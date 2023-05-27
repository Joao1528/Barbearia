import { Component, OnInit } from '@angular/core';
import { Barbearia } from '../menu/listbarbearia';
import { PerfilBarbearia } from './perfil-barbearia.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Servicos } from '../agendar/servicos';

@Component({
  selector: 'app-perfil-barbearia',
  templateUrl: './perfil-barbearia.page.html',
  styleUrls: ['./perfil-barbearia.page.scss'],
})
export class PerfilBarbeariaPage  {
 
  constructor(private perfilbarbearia : PerfilBarbearia, private  router: Router,private activatedRoute: ActivatedRoute) { }
  


  servicos: Servicos[] = [];

  barbearia: Barbearia[] = [];
  barbeariaSelecionada: Barbearia | null = null;

  ngOnInit() {

    this.perfilbarbearia.getServicos().subscribe(servicos => {
      this.servicos = servicos;
    });

    this.perfilbarbearia.getBarbearias().subscribe(
      barbearias => {
        this.barbearia = barbearias;
      }
     )

     const barbeariaId = this.activatedRoute.snapshot.params['id'];
    if (barbeariaId) {
      this.perfilbarbearia.getBarbearia(barbeariaId).subscribe(
        barbearia => {
          this.barbeariaSelecionada = barbearia;
        }
      );
    }   
  
  }
  
}


