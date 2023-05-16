import { Component } from '@angular/core';

import { ListService } from './list.service';
import { Barbearia } from './teste';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent {

 
  
  barbearia: Barbearia[] = [];
  barbeariaSelecionada: Barbearia | null = null;
  constructor(private ListService: ListService , private  router: Router , private activatedRoute: ActivatedRoute) {}

  
  ngOnInit() {
    // this. ListService.getBarbearias().subscribe(
    //   barbearias => {
    //     this.barbearia = barbearias;
    //   }
    ;

    const barbeariaId = this.activatedRoute.snapshot.params['id'];
    if (barbeariaId) {
      this. ListService.getBarbearia(barbeariaId).subscribe(
        barbearia => {
          this.barbeariaSelecionada = barbearia;
        }
      );
    }
  }
}