// Inicializar Firebase
const inizializing = () => {
  // Initialize Firebase
  const config = {
    apiKey: 'AIzaSyBUJpLPPYAePtEgiX4lKd_OzfW6JzGrLEM',
    authDomain: 'retoqr-bbavahack.firebaseapp.com',
    databaseURL: 'https://retoqr-bbavahack.firebaseio.com',
    projectId: 'retoqr-bbavahack',
    storageBucket: 'retoqr-bbavahack.appspot.com',
    messagingSenderId: '533948690919',
  };
  firebase.initializeApp(config);
};
