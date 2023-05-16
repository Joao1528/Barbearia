import { Component } from '@angular/core';
import { MenuService } from './menu.service';
import { Router } from '@angular/router';
import { Barbearia } from './barbearia';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {



  barbearia: Barbearia[] = [];

  constructor(private MenuService: MenuService) {}

  ngOnInit(){
    this.MenuService.getBarbearias().subscribe(
      Barbearia => {
        this.barbearia = Barbearia;
      }
    );

    

  }

  exibirDetalhes(id: number) {
    this.MenuService.getBarbearia(id)
      .subscribe(barbearia => {
        // Exiba os dados da barbearia selecionada
        console.log(barbearia);
      });


}}
