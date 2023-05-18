import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http'
import { Injectable } from '@angular/core'
import { AutenticacionService } from '../servicios/autenticacion.service'
import { Observable } from 'rxjs/internal/Observable'

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private autenticacionService: AutenticacionService) {}

  intercept(
    peticion: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const usuario = this.autenticacionService.usuario

    if (usuario) {
      peticion = peticion.clone({
        setHeaders: {
          Authorization: `Bearer ${usuario.token}`,
        },
      })
    }

    return next.handle(peticion)
  }
}
