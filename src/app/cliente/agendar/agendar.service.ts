import { Injectable } from '@angular/core';
import { Agenda } from './agendar';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Barbearia } from '../menu/listbarbearia';
import { Servicos } from './servicos';
import { Dias } from './dia';
import { Horas } from './hora';
import { cliente } from 'src/app/login/cliente';

@Injectable({
  providedIn: 'root'
})
export class AgendarService {



  private apiUrl = 'http://localhost:3000/servicos/list'
  private apiUrl2 = 'http://localhost:3000/dias/dias'
  private apiUrl3 = 'http://localhost:3000/dias/Hora'
  private apiUrl4 = 'http://localhost:3000/agendar'
  private apiUrl5 = 'http://localhost:3000/barbearia'
  private apiUrl6 = 'http://localhost:3000/cadastro'

  constructor(private http: HttpClient) { }

  servicos: Servicos [] = []
  dias: Dias[] = []
  horas: Horas[] = []
  agenda: Agenda[] = []
  barbearia: Barbearia[] = []
  cliente: cliente[] = []
  
  public static clienteId: string = '';

  
  getServicos(): Observable<Servicos[]>{
    return this.http.get<Servicos[]>(this.apiUrl);
  }

  getDias(): Observable<Dias[]>{
    return this.http.get<Dias[]>(this.apiUrl2);
  }

  getHoras(): Observable<Horas[]>{
    return this.http.get<Horas[]>(this.apiUrl3);
  }

  newAgendamento(data:Agenda): Observable<Agenda> {
    return this.http.post<Agenda>(this.apiUrl4,data);
  }
 
  getBarbearia(id: number): Observable<Barbearia> {
    const url = `${this.apiUrl5}/${id}`;
    return this.http.get<Barbearia>(url);
  }

  getCliente(): Observable<cliente[]>{
    return this.http.get<cliente[]>(this.apiUrl6);
  }

}
