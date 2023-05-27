import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { cliente } from './cliente';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:3000/login';
  private apiUr2 = 'http://localhost:3000/teste';
  public static clienteId: string = '';

  constructor(private http: HttpClient) {}

  getlogin(data: cliente): Observable<cliente> {
    return this.http.post<cliente>(this.apiUrl, data);
  }
}
