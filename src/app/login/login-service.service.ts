import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { cliente } from '../clientes/clientes';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private apiUrl = 'http://localhost:3000/login';
  public static clienteId: string = '';

  constructor(private http: HttpClient) {}

  getlogin(data: cliente): Observable<cliente> {
    return this.http.post<cliente>(this.apiUrl, data);
  }
}
