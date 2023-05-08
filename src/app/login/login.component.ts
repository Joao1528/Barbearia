import { Component } from '@angular/core';
import { cliente } from '../clientes/clientes';
import { LoginServiceService } from './login-service.service';
import { Router } from '@angular/router';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent {
 

  email: string = "";
  senha: string = ""
  erro: boolean = false;
 
  
  
  cliente: cliente[] = [];
 
  

  constructor(private LoginServiceService: LoginServiceService, private  router: Router ) { }
  
  onSubmit(form: any){
    this.email = form.value.nome;
    this.senha = form.value.senha;

    

    let cliente: cliente = {
      email:this.email,
      senha:this.senha
    }; 

    this.LoginServiceService.getlogin(cliente).subscribe(
      (cliente) => {
        console.log(cliente);
        this.router.navigate(['/menu']);
      },
      (error) => {
        console.log(error);
        this.erro = true;
      }
    )
   
 
    
    

    

    }
   

}
