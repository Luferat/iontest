import { Component, Input, OnInit } from '@angular/core';

import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-crudform',
  templateUrl: './crudform.component.html',
  styleUrls: ['./crudform.component.scss'],
})
export class CrudformComponent implements OnInit {

  @Input() form: any;

  // Atributos de uso geral.
  private defaultImage = 'assets/generic.png';  // Imagem padrão para um novo item.
  private photoFormat = '';                     // Formato da foto obtida da câmera.

  constructor() { }

  ngOnInit() { }

  change() { }

  sendForm() { }

  /**
   * Obtém uma foto da API da câmera (Capacitor) quando clica no botão [ALTERAR].
   * Referências: https://capacitorjs.com/docs/apis/camera
   **/
  getPhoto() {
    Camera.getPhoto({                                   // 'getPhoto()' é uma promise.
      quality: 90,                                      // Qualidade da foto.
      allowEditing: true,                               // Pode editar a foto antes de salvar.
      resultType: CameraResultType.DataUrl              // Retorna o arquivo da câmera no formato 'BASE64' (jpg).
    }).then((x) => {                                    // Obteve a foto com sucesso.
      this.form.image = x.dataUrl;  // Obtém o BASE64 da foto.
      this.photoFormat = x.format;                      // Obtém o formato da foto.
    })
  }

  setDefaultImage() { }

}
