import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from './paginas/login/login.component'
import { LayoutComponent } from './layout/layout/layout.component'
import { InicioComponent } from './paginas/inicio/inicio.component'
import { AutenticacionGuard } from './guardian/autenticacion.guard'

const routes: Routes = [
  {
    component: LayoutComponent,
    path: '',
    canActivate: [AutenticacionGuard],
    children: [
      {
        component: InicioComponent,
        path: '',
      },
    ],
  },

  {
    component: LoginComponent,
    path: 'login',
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
