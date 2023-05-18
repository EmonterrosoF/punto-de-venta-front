import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { LoginComponent } from './paginas/login/login.component'
import { LayoutComponent } from './layout/layout/layout.component'
import { InicioComponent } from './paginas/inicio/inicio.component'
import { AngularMaterialModule } from './angular-material/angular-material.module'
import { JwtInterceptor } from './interceptores/jwt.interceptor'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularMaterialModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
