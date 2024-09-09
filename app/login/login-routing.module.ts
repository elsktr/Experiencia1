import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login.page';
import { InicioEstudiantePage } from '../inicio-estudiante/inicio-estudiante.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },
  {
    path : 'inicio-estudiante',
    component: InicioEstudiantePage

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
