import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { cliente } from '../clientes/clientes';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private apiUrl = 'http://localhost:3000/cadastro/create'

  constructor(private http: HttpClient) { }

  newCliente(data:cliente): Observable<cliente> {
    return this.http.post<cliente>(this.apiUrl,data);
  }

}
