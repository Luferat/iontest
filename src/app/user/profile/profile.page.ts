import { Component, OnInit, inject } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { User, getAuth, onAuthStateChanged } from 'firebase/auth';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  // Configuraçãodo ambiente.
  env = environment;

  // Inicializa Firebase.
  app = initializeApp(environment.firebase);

  // Inicializa Authentication.
  auth = getAuth(this.app);

  // Model do usuário.
  user!: User;

  // Cumprimeta usuário.
  userFirstName = 'Perfil de Usuário';

  constructor() { }

  ngOnInit() {
    // Monitora status do usuário.
    onAuthStateChanged(this.auth, (userData) => {

      // Se usuário está logado.
      if (userData) {

        if (userData) {
          this.user = userData;
          this.userFirstName = 'Olá ' + this.user.displayName?.split(' ')[0];
        }
      }
    });
  }

  logout() {
    this.auth.signOut();
    alert('Você saiu do aplicativo');
    location.href = '/home';
  }

  toProviderProfile() {
    window.open('https://myaccount.google.com/', 'blank');
  }

}