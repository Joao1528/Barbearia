import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { cliente } from '../clientes/clientes';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private apiUrl = 'http://localhost:3000/login/login'

  constructor(private http: HttpClient) { }

 
  clientes: cliente[] = [];
  

  getCliente(): Observable<cliente[]> {
    return of(this.clientes);

    
  }

  getlogin(data:any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data)
  }

}

