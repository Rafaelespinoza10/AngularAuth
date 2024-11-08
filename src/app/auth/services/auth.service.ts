import { computed, inject, Injectable, signal } from '@angular/core';
import { environments } from '../../../environments/environments';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';

import { AuthStatus, LoginResponse, ResponseRegister, User } from '../interfaces';
import { CheckTokenResponse } from '../interfaces/check-token.response';
import { Router } from '@angular/router';
import { NewUser } from '../interfaces/create-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl: string = environments.baseUrl;
  private httpClient =  inject(HttpClient);

  private _currentUser = signal< User|null>(null);
  private _authentication = signal< AuthStatus >(AuthStatus.checking);

  public currentUser = computed(() => this._currentUser() );
  public authStatus = computed(() => this._authentication);
  public router = inject(Router);

  constructor() {
    this.checkAuthStatus().subscribe();
  }


  login(email: string, password: string): Observable<boolean>{
    const url = `${this.baseUrl}/auth/login`;
    const body = {email, password};

    return this.httpClient.post<LoginResponse>(url, body)
          .pipe(
              map( ({user, token}) => this.setAuthentication(user, token)),
              catchError(err =>  throwError(() => err.error.message))
            );
  }

      logout(){
        localStorage.removeItem('token'); //removemos el token del localstorage.
        this._authentication.set(AuthStatus.notAuthenticated);
        localStorage.removeItem('token');
        this._authentication.set(AuthStatus.notAuthenticated);
        this._currentUser.set(null);
        this.router.navigateByUrl('/auth/login');
      }


  private  setAuthentication(user: User, token: string): boolean{
    this._currentUser.set(user );
    this._authentication.set(AuthStatus.authenticated);
    localStorage.setItem('token', token);
    return true;
  }


  createNewUser(user: NewUser): Observable<boolean>{
    const url = `${this.baseUrl}/auth/register`;
    return this.httpClient.post<ResponseRegister>(url, user)
      .pipe(
          map(( { user, token }) => this.setAuthentication(user, token)),
          catchError(err =>  throwError(() => err.error.message))
      );
  }

  checkAuthStatus():Observable<boolean>{
      const url = `${this.baseUrl}/auth/check-token`;
      const token = localStorage.getItem('token');
      if(!token) {
        this.logout();
        return of(false);
      }
      const headers = new HttpHeaders()
      .set('Authorization',  `Bearer ${token}`);
      return this.httpClient.get< CheckTokenResponse >(url, { headers})
        .pipe(
          map( ({token, user})=> this.setAuthentication(user, token)),
          catchError(() => {
              this._authentication.set(AuthStatus.notAuthenticated);
              return of(false);
          })
        )

     //return of(false);
  }

}

