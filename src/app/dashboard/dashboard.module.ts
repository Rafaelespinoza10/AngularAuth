import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChangeDetectionComponent } from './pages/change-detection/change-detection.component';
import { ControlFlowComponent } from './pages/control-flow/control-flow.component';
import { DeferOptionComponent } from './pages/defer-option/defer-option.component';
import { DeferViewsComponent } from './pages/defer-views/defer-views.component';
import { UserComponent } from './pages/user/user.component';
import { UsersComponent } from './pages/users/users.component';
import { ViewTransitionComponent } from './pages/view-transition/view-transition.component';
import { HeavyLoadersSlowComponent } from './shared/heavy-loaders/heavy-loaders-slow/heavy-loaders-slow.component';
import { HeavyLoadersFastComponent } from './shared/heavy-loaders/heavy-loaders-fast/heavy-loaders-fast.component';
import { SideMenuComponent } from './shared/side-menu/side-menu/side-menu.component';
import { TitleComponent } from './shared/title/title.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    DashboardLayoutComponent,
    DashboardComponent,
    ChangeDetectionComponent,
    ControlFlowComponent,
    DeferOptionComponent,
    DeferViewsComponent,
    UserComponent,
    UsersComponent,
    ViewTransitionComponent,
    HeavyLoadersSlowComponent,
    HeavyLoadersFastComponent,
    SideMenuComponent,
    TitleComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
  ]
})
export class DashboardModule { }
