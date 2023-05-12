import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import{Servicos} from './servicos_agendar'
import { Dias } from './dia';
import { Horas } from './hora';



import { of } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  
  
  private apiUrl = 'http://localhost:3000/servicos/list'
  private apiUrl2 = 'http://localhost:3000/dias/dias'
  private apiUrl3 = 'http://localhost:3000/dias/Hora'

  constructor(private http: HttpClient) { }

  servicos: Servicos [] = []
  dias: Dias[] = []
  horas: Horas[] = []
  
  getServicos(): Observable<Servicos[]>{
    return this.http.get<Servicos[]>(this.apiUrl);
  }

  getDias(): Observable<Dias[]>{
    return this.http.get<Dias[]>(this.apiUrl2);
  }

  getHoras(): Observable<Horas[]>{
    return this.http.get<Horas[]>(this.apiUrl3);
  }


 

}
