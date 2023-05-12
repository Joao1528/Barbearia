import { Component } from '@angular/core';
import { cliente } from '../clientes/clientes';
import { CadastroService } from './cadastro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  
  nome:string = ""
  email: string = ""
  telefone: string = ""
  senha: string = ""
 

  constructor(private CadastroService: CadastroService, private  router: Router) { }
 

  onSubmit(form: any){
    this.nome = form.value.nome;
    this.email = form.value.email;
    this.telefone = form.value.telefone
    this.senha = form.value.senha



    let cliente: cliente = {
      nome:this.nome,
      email:this.email,
      telefone:this.telefone,
      senha:this.senha
    }; 

    this.CadastroService .newCliente(cliente).subscribe(
      cliente => {
        console.log(cliente);
        this.router.navigate(['']);
      }
    )
  }




}
