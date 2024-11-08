import { Component, computed, effect, inject } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { AuthStatus } from '../../../auth/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styles: ``
})
export class DashboardLayoutComponent {
  private authService = inject(AuthService)
  public user = computed(() => this.authService.currentUser());
  public router = inject(Router);


  onLogOut(){
    this.authService.logout();
  }


  // public authStatusChanged = effect(()=> {
  //   if(this.authService.authStatus()() === AuthStatus.notAuthenticated){
  //     this.router.navigateByUrl('auth/login');
  //   }
  // });


}
