import { Component, OnInit } from '@angular/core';

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, where, getDocs, orderBy, getCountFromServer } from 'firebase/firestore';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-readall',
  templateUrl: './readall.page.html',
  styleUrls: ['./readall.page.scss'],
})
export class ReadallPage implements OnInit {

  // Inicializa Firebase.
  app = initializeApp(environment.firebase);

  // Inicializa Cloud Firestore.
  db = getFirestore(this.app);

  // View dos documentos → html.
  docView: any[] = [];

  // Contagem de documentos.
  count = 0;

  // Controla a view.
  view = false;

  constructor() { }

  // O método deve ser assíncrono.
  async ngOnInit() {

    // Monta a consulta principal.
    const q = query(

      // Seleciona a coleção.
      collection(this.db, environment.dbCollection),

      // Cujo status não é 'off'.
      where('status', '!=', 'off'),

      // Índice da busca.
      orderBy('status'),

      // Ordenado pela 'date' mais recente.
      orderBy('date', 'desc')
    );

    // Contagem de documentos.
    const snapshot = await getCountFromServer(q);
    const count = snapshot.data().count;

    if (count > 0) {

      // Executa a query de forma assíncrona.
      const querySnapshot = await getDocs(q);

      // Cria a lista de documentos.
      let docList: any[] = [];

      // Loop → Obtém próximo documento.
      querySnapshot.forEach((doc) => {

        // Armazena documento em 'docTemp'.
        let docTemp = doc.data();

        // Adiciona id ao documento em 'docTemp'.
        docTemp['id'] = doc.id

        // Adiciona o documento à lista de documentos.
        docList.push(docTemp);
      });

      // Envia a lista de documentos para a view.
      this.docView = docList;

    }

    this.view = true;

  }
}
