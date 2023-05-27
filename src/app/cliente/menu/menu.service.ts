import { Injectable } from '@angular/core';
import { Barbearia } from './listbarbearia';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private apiUrl = 'http://localhost:3000/barbearia/barbearias';
  private apiUrl2 = 'http://localhost:3000/barbearia';

  constructor(private http: HttpClient) { }

  barbearia: Barbearia [] = [];

  getBarbearias(): Observable<Barbearia[]> {
    return this.http.get<Barbearia[]>(this.apiUrl);
  }

  getBarbearia(id: number): Observable<Barbearia> {
    const url = `${this.apiUrl2}/${id}`;
    return this.http.get<Barbearia>(url);
  }

}
