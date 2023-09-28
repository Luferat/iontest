import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';

const routes: Routes = [

  // Rota padrão. Deve ser sempre a primeira rota desta lista.
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  // Rota modelo do Ionic. Pode ser apagada posteriormente.
  {
    path: 'folder/:id',
    title: environment.appName + ' - Página de teste',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'home',
    title: environment.appName + ' - ' + environment.appSlogan,
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'contacts',
    title: environment.appName + ' - Faça contato',
    loadChildren: () => import('./pages/contacts/contacts.module').then(m => m.ContactsPageModule)
  },
  {
    path: 'about',
    title: environment.appName + ' - Sobre',
    loadChildren: () => import('./pages/about/about.module').then(m => m.AboutPageModule)
  },
  {
    path: 'policies',
    title: environment.appName + ' - Políticas de privacidade',
    loadChildren: () => import('./pages/policies/policies.module').then(m => m.PoliciesPageModule)
  },
  {
    path: 'e404',
    title: environment.appName + ' - Erro 404',
    loadChildren: () => import('./pages/e404/e404.module').then(m => m.E404PageModule)
  },
  {
    path: 'author',
    title: environment.appName + ' - Sobre os autores',
    loadChildren: () => import('./pages/author/author.module').then(m => m.AuthorPageModule)
  },
  {
    path: 'profile',
    title: environment.appName + ' - Perfil do usuário',
    loadChildren: () => import('./user/profile/profile.module').then(m => m.ProfilePageModule),
  },
  {
    path: 'login',
    title: environment.appName + ' - Login / Entrar',
    loadChildren: () => import('./user/login/login.module').then(m => m.LoginPageModule),
  },

  // Rota curinga. Deve ser sempre a última rota desta lista.
  {
    path: '**',
    redirectTo: 'e404',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
