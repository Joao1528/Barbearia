import { Component } from '@angular/core';
import { Servicos } from './servicos_agendar';
import { AgendamentoService } from './agendamento.service';
import { Dias } from './dia';
import { Horas } from './hora';


@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.css']
})
export class AgendamentoComponent {


  servicos: Servicos[] = [];
  dias: Dias[] = [];
  horas: Horas[] = []

  constructor(private AgendamentoService : AgendamentoService ) {}

  ngOnInit(){
    this.AgendamentoService .getServicos().subscribe(
      Servicos => {
        this.servicos = Servicos;
      }
    );
    this.AgendamentoService.getDias().subscribe(
      dias => {
        this.dias = dias;
      }     
    );

    this.AgendamentoService.getHoras().subscribe(
      horas => {
        this.horas = horas;
      }

      
    );

  }


}
