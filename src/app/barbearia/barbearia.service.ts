import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clientes } from './agendamentos/clientes';

@Injectable({
  providedIn: 'root'
})
export class BarbeariaService {

  private apiUrl = 'http://localhost:3000/clientes'

  constructor(private http: HttpClient) { }

  clientes: Clientes[] = [];

  getClientes(): Observable<Clientes[]> {
    return this.http.get<Clientes[]>(this.apiUrl);
  }
}