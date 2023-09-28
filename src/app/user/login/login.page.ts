import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect } from 'firebase/auth';
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

  constructor(private router: Router) { }

  ngOnInit() { }

  login() {
    // Seleciona o método de login conforme "environment".
    if (environment.signInMethod == 'popup')
      signInWithPopup(this.auth, this.provider)
    else
      signInWithRedirect(this.auth, this.provider)
    this.router.navigate(['/home']);
  }

}