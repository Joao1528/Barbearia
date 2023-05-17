import { Component } from '@angular/core';
import { Servicos } from './servicos_agendar';
import { AgendamentoService } from './agendamento.service';
import { Dias } from './dia';
import { Horas } from './hora';
import { Agenda } from './agendar';
import { ActivatedRoute, Router } from '@angular/router';
import { Barbearia } from '../menu/barbearia';



@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.css']
})
export class AgendamentoComponent {


  servicos: Servicos[] = [];
  dias: Dias[] = [];
  horas: Horas[] = []
  barbearia: Barbearia[] = [];


  barbeariaSelecionada: Barbearia | null = null;
  
  //barbearia: string = ""
  dia?:string = ""
  hora?:string = ""
  cliente: string = ""
  servico: string = ""

  constructor(private AgendamentoService : AgendamentoService, private  router: Router , private activatedRoute: ActivatedRoute ) {}

  ngOnInit(){
    
    
    this.AgendamentoService .getServicos().subscribe(
      Servicos => {
        this.servicos = Servicos})
     
    
    
    this.AgendamentoService.getDias().subscribe(
      dias => {
        this.dias = dias;});
          
 

    this.AgendamentoService.getHoras().subscribe(
      horas => {
        this.horas = horas;})
      

      
   

    const barbeariaId = this.activatedRoute.snapshot.params['id'];
    if (barbeariaId) {
      this.AgendamentoService.getBarbearia(barbeariaId).subscribe(
        barbearia => {
          this.barbeariaSelecionada = barbearia;})
        }

  }

  mostrarServicos(id: number) {
    this.AgendamentoService.getBarbearia(id).subscribe(barbearia => {
      this.router.navigate(['/menu', barbearia._id]);
    });
  }

  onSubmit(form: any){
    this.barbearia = form.value.barbearia;
    this.cliente = form.value.cliente;
    this.dia = form.value.dia
    this.hora = form.value.hora
    this.servico = form.value.servico



    let agenda: Agenda = {
     //barbearia: this.barbearia,
     cliente: this.cliente,
     dia: this.dia,
     hora: this.hora,
     servico: this.servico
    }; 

    this.AgendamentoService .newAgendamento(agenda).subscribe(
      agenda => {
        console.log(agenda);
       
      }
    )
  }


}
