import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  public env = environment;

  // Modela entidade form.
  public form = {
    name: '',
    email: '',
    subject: '',
    message: '',
    date: '',
    status: 'received',
    sended: false
  }

  // Inicializa Firebase.
  app = initializeApp(environment.firebase);

  // Inicializa Authentication.
  auth = getAuth(this.app);

  // Controla a view.
  view = false;

  // Inicializa Firestore.
  db = getFirestore(this.app);

  // Define a coleção.
  contactsCollection = collection(this.db, environment.contactCollection);

  constructor() { }

  ngOnInit() {
    onAuthStateChanged(this.auth, (userData) => {
      if (userData) {

        // Preenche os campos 'nome' e 'email'.
        this.form.name = userData.displayName + '';
        this.form.email = userData.email + '';
      }
    });
  }

  // Salva contato.
  sendForm() {

    // Regex simples para validar e-mail.
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Valida preenchimento dos campos.
    if (
      this.form.name.trim().length < 3 ||
      !regexEmail.test(this.form.email.trim()) ||
      this.form.subject.trim().length < 3 ||
      this.form.message.trim().length < 5
    ) return false;

    // Gera a data atual no formado ISO.
    const d = new Date();
    this.form.date = d.toISOString().split('.')[0].replace('T', ' ');

    // Salva contato no Firestore.
    addDoc(this.contactsCollection, this.form)
      .then((data) => {
        console.log('Contato salvo com Id: ' + data.id)
        this.form.sended = true;
      })

    // Encerra sem fazer mais nada.
    return false;
  }

}
