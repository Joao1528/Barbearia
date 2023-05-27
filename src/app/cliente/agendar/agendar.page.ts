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

@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.page.html',
  styleUrls: ['./agendar.page.scss'],
})
export class AgendarPage implements OnInit {

  constructor(private agendarService: AgendarService ,private activatedRoute: ActivatedRoute) { }

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
        alert('Serviço agendado');
      },
      error => {
        console.log(error);
        this.errorMensagem = error.error.message;
        alert('Ocorreu um erro ao agendar');
      }
    );
  }

  customAlertOptions = {
    header: 'Pizza Toppings',
    subHeader: 'Select your favorite topping',
    message: 'Choose only one',
    translucent: true,
  };

  customPopoverOptions = {
    header: 'Hair Color',
    subHeader: 'Select your hair color',
    message: 'Only select your dominant hair color',
  };

  customActionSheetOptions = {
    header: 'Colors',
    subHeader: 'Select your favorite color',
  };
}




