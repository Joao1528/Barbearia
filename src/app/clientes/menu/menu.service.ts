import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Barbearia } from './barbearia';

import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private apiUrl = 'http://localhost:3000/barbearia/barbearias'

  constructor(private http: HttpClient) { }

  barbearia: Barbearia [] = []

  
  getBarbearia(): Observable<Barbearia[]>{
    return this.http.get<Barbearia[]>(this.apiUrl);
  }

  

}
