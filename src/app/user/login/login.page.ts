import { Component, OnInit } from '@angular/core';

import { initializeApp } from 'firebase/app';
import { getAuth, getRedirectResult, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signInWithRedirect } from 'firebase/auth';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // Inicializa Firebase.
  app = initializeApp(environment.firebase);

  // Inicializa Authentication.
  auth = getAuth(this.app);

  // Define o provedor de autenticação.
  provider = new GoogleAuthProvider();

  // Visualiza a página somente quando estiver pronta.
  view = false;

  constructor() {}

  ngOnInit() {

    // Monitora status do usuário.
    onAuthStateChanged(this.auth, (user) => {

      // Se usuário está logado, manda para perfil.
      if (user) location.href = '/';
      else this.view = true;

    });

  }

  login() {
    // Seleciona o método de login conforme "environment".
    if (environment.signInMethod == 'popup')
      signInWithPopup(this.auth, this.provider)
    else {
      signInWithRedirect(this.auth, this.provider)
    }
  }

}