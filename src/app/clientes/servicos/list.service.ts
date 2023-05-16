import { ErrorHandler, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Barbearia } from './teste';


@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'http://localhost:3000/barbearia/barbearias';
  private apiUrl2 = 'http://localhost:3000/barbearia'

  constructor(private http: HttpClient) { }

  barbearia: Barbearia [] = []


  

  getBarbearia(id: number): Observable<Barbearia> {
    const url = `${this.apiUrl2}/${id}`;
    return this.http.get<Barbearia>(url);
  }


  
  }



