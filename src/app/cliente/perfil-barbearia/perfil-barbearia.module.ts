import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilBarbeariaPageRoutingModule } from './perfil-barbearia-routing.module';

import { PerfilBarbeariaPage } from './perfil-barbearia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilBarbeariaPageRoutingModule
  ],
  declarations: [PerfilBarbeariaPage]
})
export class PerfilBarbeariaPageModule {}
