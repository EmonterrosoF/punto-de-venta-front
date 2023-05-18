import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class InicioService {
  constructor(private http: HttpClient) {}

  getHome() {
    return this.http.get('https://localhost:7260/api/home')
  }
}
