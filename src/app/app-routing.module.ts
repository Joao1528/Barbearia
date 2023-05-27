import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./cliente/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'perfil/:id',
    loadChildren: () => import('./cliente/perfil-barbearia/perfil-barbearia.module').then( m => m.PerfilBarbeariaPageModule)
  },
  {
    path: 'agendar/:id',
    loadChildren: () => import('./cliente/agendar/agendar.module').then( m => m.AgendarPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
