import { Component } from '@angular/core';
import { ListService } from './list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Barbearia } from '../menu/barbearia';


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
     this. ListService.getBarbearias().subscribe(
      barbearias => {
        this.barbearia = barbearias;
      }
     )

    const barbeariaId = this.activatedRoute.snapshot.params['id'];
    if (barbeariaId) {
      this. ListService.getBarbearia(barbeariaId).subscribe(
        barbearia => {
          this.barbeariaSelecionada = barbearia;
        }
      );
    }   
  }

  
  // mostrarServicos(id: number) {
  //   this.ListService.getBarbearia(id).subscribe(barbearia => {
  //     this.router.navigate(['/menu', barbearia._id]);
  //   });
  // }




}