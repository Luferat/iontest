import { Component, inject } from '@angular/core';
import { environment } from 'src/environments/environment';

// Importa componentes para Authentication. 
import { Router } from '@angular/router';
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

// Menu principal.
export class AppComponent {

  // Variáveis de ambiente.
  env = environment;

  // Inicializa Firebase.
  app = initializeApp(environment.firebase);

  // Inicializa Authentication.
  auth = getAuth(this.app);

  // Dados da view para usuário quando não logado.
  public appUser = {
    logged: false,
    title: 'Login / Entrar',
    url: '/login',
    icon: 'log-in',
    avatar: ''
  }

  // Menu de navegação.
  public appPages = [
    { title: 'Início', url: 'home', icon: 'home' },
    { title: 'Contatos', url: 'contacts', icon: 'mail' },
    { title: 'Sobre', url: 'about', icon: 'information-circle' },
    { title: 'Autores', url: 'author', icon: 'people' },
    { title: 'Privacidade', url: 'policies', icon: 'lock-closed' }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
    // Monitora status do usuário.
    onAuthStateChanged(this.auth, (user) => {

      // Se usuário está logado.
      if (user) {

        // Atualiza dados da view para quando usuário está logado.
        this.appUser = {
          logged: true,
          title: user.displayName + '',
          url: '/profile',
          icon: 'log-out',
          avatar: user.photoURL + ''
        }
      }
    });
  }

}
