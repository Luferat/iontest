export const environment = {
  production: true,

  // Configurações do aplicativo.
  appName: 'Ionic Test',
  appSlogan: 'Lorem, ipsum dolor!',

  // Tipo de login. ['redirect' ou 'popup'].
  signInMethod: 'redirect',

  // Coleção de contatos do Firestore.
  contactCollection: 'contacts',

  // Coleção principal do Firebase.
  dbCollection: 'things',

  // Imagem padrão dos documentos.
  dbDefaultImage: 'assets/generic.png',

  // Formatos de imagens permitidos.
  dbImageFormats: ['gif', 'jpg', 'jpeg', 'png', 'bmp', 'tiff', 'tif'],

  // Altere estas chaves conforme seu próprio projeto no Firebase.com.
  firebase: {
    apiKey: 'AIzaSyB3qGcFb11tOQGm2_vOnUxd7rQaBhcMkPQ',
    authDomain: 'ionteste-2023.firebaseapp.com',
    projectId: 'ionteste-2023',
    storageBucket: 'ionteste-2023.appspot.com',
    messagingSenderId: '788295881622',
    appId: '1:788295881622:web:b1ea5f214104177569c3b7'
  }

};
