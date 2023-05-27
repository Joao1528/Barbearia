import { Component, OnInit } from '@angular/core';
import { MenuService } from './menu.service';
import { Barbearia } from './listbarbearia';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  barbearia: Barbearia [] = [];

  constructor(private menuService: MenuService, private router: Router) { }

  


  ngOnInit() {
    this.menuService.getBarbearias().subscribe(barbearias =>
      this.barbearia = barbearias)
  }

}
