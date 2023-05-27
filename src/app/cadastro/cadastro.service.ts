import { Injectable } from '@angular/core';
import { cliente } from '../login/cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private apiurl1 = 'http://localhost:3000/cadastro'

  constructor(private http : HttpClient ) { }


  newCliente(data:cliente): Observable<cliente> {
    return this.http.post<cliente>(this.apiurl1,data)
  }

}
