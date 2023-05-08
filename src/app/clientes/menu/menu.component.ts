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



  barbearias: Barbearia[] = [];

  constructor(private MenuService: MenuService) {}

  ngOnInit(){
    this.MenuService.getBarbearia().subscribe(
      Barbearias => {
        this.barbearias = Barbearias;
      }
    );

  }

}
