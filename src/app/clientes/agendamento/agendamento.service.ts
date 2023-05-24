import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import{Servicos} from './servicos_agendar'
import { Dias } from './dia';
import { Horas } from './hora';
import { Agenda } from './agendar';
import { cliente } from '../clientes';
import { Barbearia } from '../menu/barbearia';


@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  
  
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

  getCliente(data: cliente): Observable<cliente> {
    return this.http.post<cliente>(this.apiUrl6, data);
  }


}
