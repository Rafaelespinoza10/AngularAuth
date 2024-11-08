import { Component, computed, effect, inject } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { AuthStatus } from './auth/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  public finishedAuthCheck = computed<Boolean>(() => {
    const authStatus = this.authService.authStatus()();
    return authStatus !== AuthStatus.checking;
  });

  // Efecto para escuchar el cambio de estado de autenticación
  public authStatusChangedEffect = effect(() => {
    const authStatus = this.authService.authStatus()();

    if (authStatus === AuthStatus.checking) {
      return; // Si aún está verificando, no hacemos nada.
    }

    if (authStatus === AuthStatus.authenticated) {
      this.router.navigateByUrl('/dashboard');  // Redirige a dashboard si está autenticado.
    } else {
      this.router.navigateByUrl('auth/login');  // Redirige al login si no está autenticado.
    }
  });
}
