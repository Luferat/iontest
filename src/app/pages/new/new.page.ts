import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { environment } from 'src/environments/environment';

import { Geolocation } from '@capacitor/geolocation';
import { Camera, CameraResultType } from '@capacitor/camera';
import { ToolsService } from 'src/app/services/tools.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage implements OnInit {

  // Firebase
  app = initializeApp(environment.firebase);
  auth = getAuth(this.app);
  db = getFirestore(this.app);
  storage = getStorage(this.app);

  // Bloqueia a view.
  view = false;

  // Model do documento.
  newDocument = {
    date: '',
    name: '',
    description: '',
    image: '/assets/generic.png',
    location: '',
    geolocation: '',
    owner: '',
    views: 0,
    status: 'on'
  }

  // Coordenadas do GPS.
  toggleGPS = true;

  // Botão [Salvar] desabilitado.]
  btnDisabled = true;

  // Roteamento.
  router = inject(Router);

  // Geolocalização.
  geolocation = '';

  // Services de uso geral.
  tools!: ToolsService;

  constructor() { }

  ngOnInit() {

    // Monitora usuário logado.
    onAuthStateChanged(this.auth, (userData) => {
      if (userData) {
        this.view = true;
        this.newDocument.owner = userData.uid;
      } else this.router.navigate(['/login']);
    });

    // Obtém geolocalização.
    Geolocation.getCurrentPosition()
      .then((x) => {
        this.geolocation = `${x.coords.latitude}↕, ${x.coords.longitude}↔`;
        this.newDocument.geolocation = this.geolocation;
      });

  }

  // Obtém a imagem do documento.
  // option = 'new'* | 'reset'
  // Foto do documento.
  getPhoto(option: string) {
    if (option == 'new') {

      Camera.getPhoto({

        // Configurações da captura da imagem.
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.DataUrl

      }).then(x => {

        // Envia para a view.
        this.newDocument.image = x.dataUrl + '';
      })

    } else {

      // Carrega imagem padrão.
      this.newDocument.image = '/assets/generic.png';
    }
  }

  // Valida campos do formulário usando 'stripTags()' e regex.
  change() {
    
    
    
  }

  // Monitora situação do toggle do GPS.
  toggleChange() { }

  // Salva dados do documento no back-end.
  saveDocument() { }

}
