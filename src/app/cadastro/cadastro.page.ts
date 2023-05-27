import { Component, OnInit } from '@angular/core';
import { cliente } from '../login/cliente';
import { CadastroService } from './cadastro.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


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

  constructor(private cadastroService: CadastroService, private router: Router,private alertController: AlertController) { }

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
        this.router.navigate(['']);
      }
    )
  
  
  }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: 'Cliente cadastrado',
      buttons: ['OK'],
    });

    await alert.present();
  }
  

}
