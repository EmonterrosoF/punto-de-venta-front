import { IUsuario } from './IUsuario'

export interface IAutenticacion {
  estado: string
  estadoCodgo: number
  datos?: IUsuario
  mensaje: string
}
