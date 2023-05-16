import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Barbearia } from './barbearia';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private apiUrl = 'http://localhost:3000/barbearias';

  constructor(private http: HttpClient) { }

  barbearia: Barbearia [] = [];

  getBarbearias(): Observable<Barbearia[]> {
    return this.http.get<Barbearia[]>(this.apiUrl);
  }

  getBarbearia(id: number): Observable<Barbearia> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Barbearia>(url);
  }
}