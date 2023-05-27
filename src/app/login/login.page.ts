import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { cliente } from './cliente';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {

  email: string = '';
  senha: string = '';
  erro: boolean = false;

   constructor(private LoginService: LoginService, private router: Router) {}

  onSubmit(form: any) {
    this.email = form.value.nome;
    this.senha = form.value.senha;

    const cliente: cliente = {
      email: this.email,
      senha: this.senha,
    };

    this.LoginService.getlogin(cliente).subscribe(
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
