import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { ChangeDetectionComponent } from './pages/change-detection/change-detection.component';
import { ControlFlowComponent } from './pages/control-flow/control-flow.component';
import { DeferOptionComponent } from './pages/defer-option/defer-option.component';
import { DeferViewsComponent } from './pages/defer-views/defer-views.component';
import { UserComponent } from './pages/user/user.component';
import { UsersComponent } from './pages/users/users.component';
import { ViewTransitionComponent } from './pages/view-transition/view-transition.component';
const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,  // Layout que contiene el <router-outlet>
    children: [
      { path: '', redirectTo: 'control-flow', pathMatch: 'full' },  // Redirección a una ruta hija predeterminada
      { path: 'change-detection', component: ChangeDetectionComponent },
      { path: 'control-flow', component: ControlFlowComponent },
      { path: 'defer-options', component: DeferOptionComponent },
      { path: 'defer-views', component: DeferViewsComponent },
      { path: 'user/:id', component: UserComponent },
      { path: 'user-list', component: UsersComponent },
      { path: 'view-transition', component: ViewTransitionComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
