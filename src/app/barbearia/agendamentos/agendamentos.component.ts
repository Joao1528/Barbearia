import { Component } from '@angular/core';
import { BarbeariaService } from '../barbearia.service';
import { Clientes } from './clientes';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-agendamentos',
  templateUrl: './agendamentos.component.html',
  styleUrls: ['./agendamentos.component.css']
})
export class AgendamentosComponent {


  clientes: Clientes[] = [];

  constructor(
    private BarbeariaService: BarbeariaService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}


  ngOnInit() {
    this.BarbeariaService.getClientes().subscribe(clientes => {
      this.clientes = clientes;
    });
  }

}
