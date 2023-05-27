import { Component, OnInit } from '@angular/core';
import { Agenda } from './agendar';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Barbearia } from '../menu/listbarbearia';
import { Servicos } from './servicos';
import { Dias } from './dia';
import { Horas } from './hora';
import { cliente } from 'src/app/login/cliente';
import { AgendarService } from './agendar.service';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.page.html',
  styleUrls: ['./agendar.page.scss'],
})
export class AgendarPage implements OnInit {


  constructor(private agendarService: AgendarService ,private activatedRoute: ActivatedRoute ,private alertController: AlertController) { }

  servicos: Servicos[] = [];
  dias: Dias[] = [];
  horas: Horas[] = [];
  cliente: cliente[] = [];

  barbeariaSelecionada: Barbearia | null = null;
  barbearias: string = "";
  dia: string = "";
  hora: string = "";
  servico: string = "";
  nome: string = '';
  email: string = '';
  errorMensagem: string = '';


  ngOnInit() {

    this.agendarService.getServicos().subscribe(servicos => {
      this.servicos = servicos;
    });

    this.agendarService.getDias().subscribe(dias => {
      this.dias = dias;
    });

    this.agendarService.getHoras().subscribe(horas => {
      this.horas = horas;
    });

    const barbeariaId = this.activatedRoute.snapshot.params['id'];
    if (barbeariaId) {
      this.agendarService.getBarbearia(barbeariaId).subscribe(barbearia => {
        this.barbeariaSelecionada = barbearia;
      });
    }

  }

  onSubmit(form: any) {
    this.dia = form.value.dia;
    this.hora = form.value.hora;
    this.servico = form.value.servico;
    this.barbearias = form.value.barbearias;
    this.nome = form.value.nome;
    this.email = form.value.email;

    let agenda: Agenda = {
      barbearias: this.barbearias,
      dia: this.dia,
      hora: this.hora,
      servicos: this.servico,
      nome: this.nome,
      email: this.email
    };

    this.agendarService.newAgendamento(agenda).subscribe(
      response => {
        console.log(response);
        this.presentAlert()
        
      },
      error => {
        console.log(error);
        this.errorMensagem = error.error.message;
        this.presentErrorAlert()
      }
    );
  }

  customAlertOptions = {
    header: 'Serviço',
    subHeader: 'Selecione o serviço desejado',
    message: 'Escolha apenas um',
    translucent: true,
  };

  customPopoverOptions = {
    header: 'Dia',
    subHeader: 'Selecione o dia desejado',
   
  };

  customActionSheetOptions = {
    header: 'Hora',
    subHeader: 'Selecione a hora desejada',
  };

  

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: 'Serviço agendamento',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async presentErrorAlert() {
    const alert = await this.alertController.create({
      header: 'Erro',
      subHeader: 'Ocorreu um erro ao agendar',
      message: 'Por favor, tente novamente mais tarde.',
      buttons: ['OK'],
    });
  
    await alert.present();
  }
}





