import { Component } from '@angular/core';
import { Servicos } from './servicos_agendar';
import { AgendamentoService } from './agendamento.service';
import { Dias } from './dia';
import { Horas } from './hora';
import { Agenda } from './agendar';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginServiceService } from 'src/app/login/login-service.service';
import { cliente } from '../clientes';
import { Barbearia } from './barbearia';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.css']
})
export class AgendamentoComponent {
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


  //teste
  constructor(
    private agendamentoService: AgendamentoService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private loginService: LoginServiceService
  ) {}

  ngOnInit() {
    this.agendamentoService.getServicos().subscribe(servicos => {
      this.servicos = servicos;
    });

    this.agendamentoService.getDias().subscribe(dias => {
      this.dias = dias;
    });

    this.agendamentoService.getHoras().subscribe(horas => {
      this.horas = horas;
    });

    const barbeariaId = this.activatedRoute.snapshot.params['id'];
    if (barbeariaId) {
      this.agendamentoService.getBarbearia(barbeariaId).subscribe(barbearia => {
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
    console.log(this.servico)
    
    
    let agenda: Agenda = {
      barbearias: this.barbearias,
      dia: this.dia,
      hora: this.hora,
      servicos: this.servico,
      nome: this.nome,
      email: this.email
      
    };

    this.agendamentoService.newAgendamento(agenda).subscribe(
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
 
}

