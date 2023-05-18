import { Component } from '@angular/core'
import { InicioService } from 'src/app/servicios/inicio/inicio.service'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent {
  constructor(private inicioService: InicioService) {
    inicioService.getHome().subscribe((resp) => console.log(resp))
  }
}
