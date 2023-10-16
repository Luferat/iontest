import { Component, OnInit, inject } from '@angular/core';
import { environment } from 'src/environments/environment';

import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

import { ToolsService } from 'src/app/services/tools.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  // Inicializa Firebase.
  app = initializeApp(environment.firebase);
  auth = getAuth(this.app);
  db = getFirestore(this.app);

  // Define a coleção onde os contatos são armazenados.
  contactCollection = collection(this.db, environment.contactCollection);

  // Variáveis de ambiente.
  env = environment;

  // Bloqueia botão de envio.
  btnDisabled = true;

  // Formulário ainda não foi enviado, mostra formulário.
  sended = false;

  // Services de uso geral.
  tools = inject(ToolsService);

  // Model do formulário.
  form = {
    date: '',
    name: '',
    email: '',
    subject: '',
    message: '',
    status: 'received'
  }

  constructor() { }

  ngOnInit() {

    onAuthStateChanged(this.auth, (userData) => {   // Monitora usuário logado.
      if (userData) {                               // Se está logado.
        this.form.name = userData.displayName + ''; // Recupera nome.
        this.form.email = userData.email + '';      // Recupera e-mail.
      }
    });

  }

  // Quando ocorrem alterações no formulário.
  change() {
    // Valida campos do formulário usando 'stripTags()' e regex.
    if (
      this.tools.stripTags(this.form.name).length > 2 &&          // 'name' → com pelo menos 3 caracteres.
      this.tools.isMail(this.tools.stripTags(this.form.email)) && // 'email' → respeita a regex.
      this.tools.stripTags(this.form.subject).length > 2 &&       // 'subject' → com pelo menos 3 caracteres.
      this.tools.stripTags(this.form.message).length > 4          // 'message' → com pelo menos 5 caracteres.
    ) this.btnDisabled = false;                                   // Tudo válido → Desbloqueia o botão.
    else this.btnDisabled = true;                                 // Algo inválido → Bloqueia o botão.              
  }

  // Processa envio do formulário.
  sendForm() {

    // Valida campos.
    if (this.btnDisabled) return false;

    // Gera a data atual no formato ISO (yyyy-MM-dd HH:mm).
    this.form.date = this.tools.now();

    // Salva formulário no banco de dados.
    addDoc(this.contactCollection, this.form)

      // Se teve sucesso, oculta formulário e agradece ao usuário.
      .then((data) => {
        this.sended = true;
      });

    // Conclui 'sendForm()'.
    return true;

  }

}
