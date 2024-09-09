import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPage } from './login/login.page';
import { HomePage } from './home/home.page';
import { RegisterPage } from './register/register.page';
import { CodigoQrPage } from './codigo-qr/codigo-qr.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'codigo-qr',
    loadChildren: () => import('./codigo-qr/codigo-qr.module').then( m => m.CodigoQrPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'inicio-estudiante',
    loadChildren: () => import('./inicio-estudiante/inicio-estudiante.module').then( m => m.InicioEstudiantePageModule)
  },
  {
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then( m => m.CursosPageModule)
  },
  {
    path: 'justificacion',
    loadChildren: () => import('./justificacion/justificacion.module').then( m => m.JustificacionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
