import { Routes } from '@angular/router';
import {PrincipalComponent} from "./principal/principal.component";
import {LoginComponent} from "./login/login.component";

export const routes: Routes = [
  {
    path: 'principal',
    component: PrincipalComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },{
    path: '**',
    redirectTo: '/login'
  }
];
