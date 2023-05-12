import { Component } from '@angular/core';
import { MenuService } from '../menu/menu.service';
import { Barbearia } from '../menu/barbearia';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent {

  
  barbearias: Barbearia[] = [];

  constructor(private MenuService: MenuService) {}

  ngOnInit(){
    this.MenuService.getBarbearias().subscribe(
      Barbearias => {
        this.barbearias = Barbearias;
      }
    );

  }
}
