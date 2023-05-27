import { ErrorHandler, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Barbearia } from '../menu/listbarbearia';
import { Servicos } from '../agendar/servicos';


@Injectable({
  providedIn: 'root'
})
export class PerfilBarbearia {
  private apiUrl = 'http://localhost:3000/barbearia/barbearias';
  private apiUrl2 = 'http://localhost:3000/barbearia'

  constructor(private http: HttpClient) { }

  barbearia: Barbearia [] = []

  getBarbearias(): Observable<Barbearia[]> {
    return this.http.get<Barbearia[]>(this.apiUrl);
  }
  

  getBarbearia(id: number): Observable<Barbearia> {
    const url = `${this.apiUrl2}/${id}`;
    return this.http.get<Barbearia>(url);
  }

  
  getServicos(): Observable<Servicos[]>{
    return this.http.get<Servicos[]>(this.apiUrl);
  }


  
  }
