import { Component } from '@angular/core';
import { cliente } from '../clientes/clientes';
import { LoginServiceService } from './login-service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  senha: string = '';
  erro: boolean = false;

  constructor(private loginService: LoginServiceService, private router: Router) {}

  onSubmit(form: any) {
    this.email = form.value.nome;
    this.senha = form.value.senha;

    const cliente: cliente = {
      email: this.email,
      senha: this.senha,
    };

    this.loginService.getlogin(cliente).subscribe(
      (response) => {
        console.log(response._id);
       // LoginServiceService.clienteId = response._id; // Salva o ID do cliente no serviço
        this.router.navigate(['/menu']);
      },
      (error) => {
        console.log(error);
        this.erro = true;
      }
    );
  }
}
