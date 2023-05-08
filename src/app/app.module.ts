import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './clientes/menu/menu.component';
import { ServicosComponent } from './clientes/servicos/servicos.component';
import { AgendamentoComponent } from './clientes/agendamento/agendamento.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { CadastroComponent } from './cadastro/cadastro.component';
import { Router } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ServicosComponent,
    AgendamentoComponent,
    LoginComponent,
    CadastroComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
