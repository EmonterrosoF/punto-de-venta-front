import { Component } from '@angular/core'
import { FormControl, Validators, FormGroup } from '@angular/forms'
import {
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
  MatSnackBar,
} from '@angular/material/snack-bar'
import { Router } from '@angular/router'
import { IAutenticacion } from 'src/app/models/autenticacionToken/IAutenticacion'
import { AutenticacionService } from 'src/app/servicios/autenticacion.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  horizontalPosition: MatSnackBarHorizontalPosition = 'start'
  verticalPosition: MatSnackBarVerticalPosition = 'bottom'
  hide = true
  desabilitar = false
  resp: IAutenticacion = { estado: '', estadoCodgo: 0, mensaje: '' }

  constructor(
    private _autenticacionService: AutenticacionService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    if (_autenticacionService.usuario) {
      this.router.navigate(['/'])
    }
  }

  perfilForm = new FormGroup({
    correo: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  })

  getErrorMessage() {
    if (this.perfilForm.get('correo')?.hasError('required')) {
      return 'El correo es requerido'
    }

    return this.perfilForm.get('correo')?.hasError('email')
      ? 'Correo no valido'
      : ''
  }

  login() {
    if (this.perfilForm.valid) {
      this.desabilitar = true
      this._autenticacionService
        .login(this.perfilForm.value.correo!, this.perfilForm.value.password!)
        .subscribe(
          (resp) =>
            resp.estado === 'EXITO' ? this.router.navigate(['/']) : '',
          (error) => {
            this.desabilitar = false
            this.openSnackBar(error.error.mensaje)
          }
        )
      // .subscribe(
      //   (resp) => (this.resp = resp),
      //   (error) => (this.resp = error.error)
      // )
    }
  }
  openSnackBar(mensaje: string) {
    this._snackBar.open(mensaje, 'Quitar', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 2000,
    })
  }
}
