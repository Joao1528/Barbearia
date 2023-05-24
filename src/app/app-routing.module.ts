import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './clientes/menu/menu.component';
import { LoginComponent } from './login/login.component';
import { AgendamentoComponent } from './clientes/agendamento/agendamento.component';
import { ServicosComponent } from './clientes/servicos/servicos.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { Barbearia } from './clientes/menu/barbearia';
import { AgendamentosComponent } from './barbearia/agendamentos/agendamentos.component';


const routes: Routes = [

{path: 'menu',component:MenuComponent},
{path: '',component:LoginComponent},
{path: 'servico/:id',component:ServicosComponent},
{path: 'agendar/:id',component:AgendamentoComponent},
{path: 'cadastro',component:CadastroComponent},
{path:  'barbearia',component:AgendamentosComponent}


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    
  
  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
