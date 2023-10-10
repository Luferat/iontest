import { Component, OnInit, inject } from '@angular/core';

import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";
import { environment } from 'src/environments/environment';

import { Geolocation } from '@capacitor/geolocation';
import { ToolsService } from 'src/app/services/tools.service';
import { Camera, CameraResultType } from '@capacitor/camera';
import { Toast } from '@capacitor/toast';
import { Router } from '@angular/router';

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

  // Model.
  newDocument = {
    date: '',
    name: '',
    description: '',
    image: 'assets/generic.png',
    location: '',
    geolocation: '',
    owner: '',
    views: 0,
    status: 'on'
  }

  // Desabilita botão.
  btnDisabled = true;

  // Visualização do GPS.
  toggleGPS = true;

  // Services de uso geral.
  tools = inject(ToolsService);

  // Geolocalização.
  geolocation = '';

  // Roteamento.
  router = inject(Router);

  // Controle da view.
  view = false;

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
      this.newDocument.image = 'assets/generic.png';
    }
  }

  // Valida campos do formulário usando 'stripTags()' e regex.
  change() {
    if (
      this.tools.stripTags(this.newDocument.name).length > 2 &&
      this.tools.stripTags(this.newDocument.description).length > 5 &&
      this.tools.stripTags(this.newDocument.location).length > 3
    ) this.btnDisabled = false;
    else this.btnDisabled = true;
  }

  saveDocument() {
    this.newDocument.date = this.tools.now();
    this.newDocument.geolocation = this.newDocument.geolocation.replace('↕', '').replace('↔', '');
    console.log(this.newDocument);
  }

  toggleChange() {
    this.newDocument.geolocation = (this.toggleGPS) ? this.geolocation : '';
  }



}
