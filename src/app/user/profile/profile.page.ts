import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Importa o Core do Firebase.
import { initializeApp } from 'firebase/app';

// Importe apenas os componentes que forem necessários.
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';

// Environment contém as configurações do Firebase e de autenticação.
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  // Inicializa core do Firebase.
  app = initializeApp(environment.firebase);

  // Inicializa Authentication.
  auth = getAuth(this.app);

  // Model do usuário.
  user!: User;

  // Cumprimenta o usuário.
  userGreeting = 'Perfil de Usuário';

  // Controla a view HTML.
  view = false;

  // Configurações.
  env = environment;

  // Roteamento interno.
  router = inject(Router);

  constructor() { }

  ngOnInit() {

    // Monitora status do usuário.
    onAuthStateChanged(this.auth, (userData) => {

      if (userData) {

        // Se usuário está logado.
        this.user = userData;
        this.view = true;

        // Cumprimentar usuário.
        this.userGreeting = 'Olá ' + this.user.displayName?.split(' ')[0];

      } else {

        // Se não está logado, redireciona, por exemplo, para 'login'.
        this.router.navigate(['/login']);
      }
    });
  }

  // Logout do usuário.
  logout() {
    this.auth.signOut();

    // Vai para a home.
    // Use 'location.href' para ação imediata, em vez de router.navigate().    
    location.href = '/';
  }

  // Acessa o perfil do usuário no Google.
  toGoogleProfile() {

    // Abre o perfil em uma página/guia do navegador padrão.
    window.open('https://myaccount.google.com/', 'blank');
  }

}
