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

  constructor(private MenuService: MenuService, private  router: Router) {}

  ngOnInit() {
    this.MenuService.getBarbearias().subscribe(barbearias => {
      this.barbearia = barbearias;
    });
  }

  mostrarServicos(id: number) {
    this.MenuService.getBarbearia(id).subscribe(barbearia => {
      // Redirecionar o usuário para a página de serviços da barbearia específica
      this.router.navigate(['/servico', barbearia._id]);
    });
  }
}


