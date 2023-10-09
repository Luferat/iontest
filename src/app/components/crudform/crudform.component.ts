import { Component, Input, OnInit, inject } from '@angular/core';

import { Camera, CameraResultType } from '@capacitor/camera';

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadString } from "firebase/storage";

import { environment } from 'src/environments/environment';

import { ToolsService } from 'src/app/services/tools.service';

@Component({
  selector: 'app-crudform',
  templateUrl: './crudform.component.html',
  styleUrls: ['./crudform.component.scss'],
})
export class CrudformComponent implements OnInit {

  @Input() form: any;

  // Firebase.
  app = initializeApp(environment.firebase);
  auth = getAuth(this.app);
  db = getFirestore(this.app);
  storage = getStorage(this.app);

  // Atributos de uso geral.
  private defaultImage = 'assets/generic.png';  // Imagem padrão para um novo item.
  private photoFormat = '';                     // Formato da foto obtida da câmera.

  // Services.
  private services: ToolsService = inject(ToolsService);

  constructor() { }

  ngOnInit() { }

  change() { }

  sendForm() { }

  saveForm() { }

  /**
   * Obtém uma foto da API da câmera (Capacitor) quando clica no botão [ALTERAR].
   * Referências: https://capacitorjs.com/docs/apis/camera
   **/
  getPhoto() {
    Camera.getPhoto({                       // 'getPhoto()' é uma promise.
      quality: 90,                          // Qualidade da foto.
      allowEditing: true,                   // Pode editar a foto antes de salvar.
      resultType: CameraResultType.DataUrl  // Retorna o arquivo da câmera no formato 'BASE64' (jpg).
    }).then((x) => {                        // Obteve a foto com sucesso.
      this.form.image = x.dataUrl;          // Obtém o BASE64 da foto.
      this.photoFormat = x.format;          // Obtém o formato da foto.
    })
  }

  // Ao clicar no botão [PADRÃO].
  setDefaultImage() {

    // Carrega a imagem padrão no campo imagem.
    this.form.controls['image'].setValue(this.defaultImage);
  }

}
