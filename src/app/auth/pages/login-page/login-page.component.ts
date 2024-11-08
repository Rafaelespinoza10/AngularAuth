import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

import  Swal from 'sweetalert2';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: ``
})
export class LoginPageComponent {

  public form:FormGroup;
  private authService = inject(AuthService);
  private router =  inject(Router);


  constructor(private formBuilder: FormBuilder,
  ){
    this.form = this.formBuilder.group({
      email: ['', [ Validators.required, Validators.email ]],
      password: ['', [ Validators.required, Validators.minLength(6) ]]
    })
  }


  login():void{
    console.log(this.form.value);
    const {email, password} = this.form.value;
    this.authService.login(email, password)
      .subscribe({
        next: () => this.router.navigateByUrl('/dashboard'),
        error:(message) => {
            Swal.fire('Error', message, 'error');
        }
      });
  }

}
