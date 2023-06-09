import { Injectable } from '@angular/core'
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router'
import { Observable } from 'rxjs'
import { AutenticacionService } from '../servicios/autenticacion.service'

@Injectable({
  providedIn: 'root',
})
export class AutenticacionGuard implements CanActivate {
  constructor(
    private router: Router,
    private autenticacion: AutenticacionService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.autenticacion.usuario) return true

    this.router.navigate(['/login'])
    return false
  }
}
