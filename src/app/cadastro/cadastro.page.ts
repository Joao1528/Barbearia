import { Component, OnInit } from '@angular/core';
import { cliente } from '../login/cliente';
import { CadastroService } from './cadastro.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage  {

  nome: string = ''
  email: string = ''
  telefone: string = ''
  senha: string = ''

  constructor(private cadastroService: CadastroService, private router: Router) { }

  onSubmit(form:any){
    this.nome = form.value.nome
    this.email = form.value.email
    this.senha = form.value.senha
    this.telefone = form.value.telefone
  
  
    let cliente: cliente = {
      nome: this.nome,
      telefone: this.telefone,
      senha: this.senha,
      email: this.email
  
    }

    this.cadastroService.newCliente(cliente).subscribe(
      cliente =>{
        console.log(cliente)
      }
    )
  
  
  }



  

}
