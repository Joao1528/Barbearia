import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilBarbeariaPage } from './perfil-barbearia.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilBarbeariaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilBarbeariaPageRoutingModule {}
