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
import { LoginComponent } from 'src/app/login/login.component';




@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.css']
})
export class AgendamentoComponent {

  // IMPORTANDO AS INTERFACE
  servicos: Servicos[] = [];
  dias: Dias[] = [];
  horas: Horas[] = [];
  

  barbeariaSelecionada: Barbearia | null = null;
  barbearias: string = "";
  dia: string = "";
  hora: string = "";
  servico: string = "";
  cliente: string = ''
  email: string = ""
  senha: string = ""


 

  constructor(
    private agendamentoService: AgendamentoService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private loginService: LoginServiceService
  ) {}

  // Exibindo no HTML os documentos
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

    const cliente: cliente = {
      email: this.email,
      senha: this.senha,
    };
    
    console.log(LoginServiceService.clienteId)

    // this.agendamentoService.getCliente(cliente).subscribe(
    //   (response) => {
    //     console.log(response._id);
    //     LoginServiceService.clienteId = response._id; // Salva o ID do cliente no serviço
    //   },
    //   (error) => {
    //     console.log(error);
        
    //   }
    // );
  

    

    const barbeariaId = this.activatedRoute.snapshot.params['id'];
    if (barbeariaId) {
      this.agendamentoService.getBarbearia(barbeariaId).subscribe(barbearia => {
        this.barbeariaSelecionada = barbearia;
      });
    }
  }

  // Envia o formulário para o MongoDB
  onSubmit(form: any) {
    this.dia = form.value.dia;
    this.hora = form.value.hora;
    this.servico = form.value.servico;
    this.barbearias = form.value.barbearias;

    let agenda: Agenda = {
      barbearias: this.barbearias,
      //cliente: LoginServiceService.clienteId,
      dia: this.dia,
      hora: this.hora,
      servicos: this.servico
    };

    this.agendamentoService.newAgendamento(agenda).subscribe(
      response => {
        console.log(response);
        alert('Serviço agendado');
        console.log(LoginServiceService.clienteId)
      },
      error => {
        console.log(error);
        alert('Ocorreu um erro ao agendar');
      }
    );
  }
}
