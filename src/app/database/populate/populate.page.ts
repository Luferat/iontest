import { Component, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment';
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { addDoc, collection, doc, getDocs, getFirestore, deleteDoc } from "firebase/firestore";

// Importa lista de documentos "fake".
import { things } from "../data";

@Component({
  selector: 'app-populate',
  templateUrl: './populate.page.html',
  styleUrls: ['./populate.page.scss'],
})
export class PopulatePage implements OnInit {

  view = false;

  // Inicializa Firebase.
  app = initializeApp(environment.firebase);

  // Inicializa Authentication.
  auth = getAuth(this.app);

  // Inicializa Firestore.
  db = getFirestore(this.app);

  // Define a coleção.
  myCollection = collection(this.db, environment.dbCollection);

  // Lista de documentos adicionados.
  docList: string[] = [];

  constructor() { }

  ngOnInit() {

    if (environment.production == true) location.href = '/';

    // Monitora status do usuário.
    onAuthStateChanged(this.auth, (user) => {
      if (user) this.view = true;
      else location.href = '/';
    });

  }

  populate() {

    // Obtém todos os documentos que já existem na coleção.
    getDocs(this.myCollection)

      // Apaga todos.
      .then(docData => docData.forEach(doc => deleteDoc(doc.ref)))

      // Se ocorrer erro.
      .catch(err => console.error(err))

      // Quando concluir.
      .finally(() => {

        // Obtém a lista de documentos e adiciona à coleção.
        things.forEach(async (itemData) =>
          addDoc(this.myCollection, itemData).then(x => this.docList.push(x.id))
        );

      });

  }

}