import { Component } from '@angular/core';
import { Servicos } from './servicos_agendar';
import { AgendamentoService } from './agendamento.service';
import { Dias } from './dia';
import { Horas } from './hora';
import { Agenda } from './agendar';
import { ActivatedRoute, Router } from '@angular/router';

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
  barbeariaSelecionada: Barbearia | null = null;
  barbearias: string = "";
  dia: string = "";
  hora: string = "";
  cliente: string = "";
  servico: string = "";

  constructor(
    private agendamentoService: AgendamentoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
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
    this.cliente = form.value.cliente;
    this.dia = form.value.dia;
    this.hora = form.value.hora;
    this.servico = form.value.servico;
    this.barbearias = form.value.barbearias;

    let agenda: Agenda = {
      barbearias: this.barbearias,
      cliente: this.cliente,
      dia: this.dia,
      hora: this.hora,
      servico: this.servico
    };

    this.agendamentoService.newAgendamento(agenda).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }
}
