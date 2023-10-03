import { Component, OnInit, inject } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, collection, query, where, updateDoc, deleteDoc } from 'firebase/firestore';
import { environment } from 'src/environments/environment';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-readone',
  templateUrl: './readone.page.html',
  styleUrls: ['./readone.page.scss'],
})
export class ReadonePage implements OnInit {

  // Inicializa Firebase.
  app = initializeApp(environment.firebase);

  // Inicializa Cloud Firestore.
  db = getFirestore(this.app);

  // View dos documentos → html.
  docView: any;

  // Dependência de 'ActivatedRoute'.
  private activatedRoute = inject(ActivatedRoute);

  // Obtém id da rota.
  docId = this.activatedRoute.snapshot.paramMap.get('id') as string;

  // Referências ao documento.
  docRef = doc(this.db, environment.dbCollection, this.docId);

  // Controla a view.
  view = false;

  constructor(private alertController: AlertController) { }

  async ngOnInit() {

    // Obtém documento.  
    const docSnap = await getDoc(this.docRef);

    // Se documento existe.
    if (docSnap.exists()) {

      // Recupera documento.
      this.docView = docSnap.data();

      // Atualiza status do documento.
      this.docView['status'] = 'success';

      // Atualiza id do documento.
      this.docView['id'] = this.docId;

      // Atualiza contador de views.
      await updateDoc(this.docRef, { views: parseInt(this.docView.views + 1) });

      // Se documento não existe.
    } else {

      // Exibe erro na view.
      this.docView = { status: 'error', message: 'Documento não encontrado.' };
    }

    // Ativa a view.
    this.view = true;

  }

  async delete(id: string) {
    const alert = await this.alertController.create({
      header: 'Oooops!',
      message: `Tem certeza que deseja apagar "${this.docView.name}"? Isso é irreversível!`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: async () => {
            await updateDoc(this.docRef, { status: 'off' });
            location.href = '/readall';
          },
        },
      ]
    });

    await alert.present();
  }

}
