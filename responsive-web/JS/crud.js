

const config = {
  apiKey: 'AIzaSyBUJpLPPYAePtEgiX4lKd_OzfW6JzGrLEM',
  authDomain: 'retoqr-bbavahack.firebaseapp.com',
  databaseURL: 'https://retoqr-bbavahack.firebaseio.com',
  projectId: 'retoqr-bbavahack',
  storageBucket: 'retoqr-bbavahack.appspot.com',
  messagingSenderId: '533948690919',
};


// lee datos 
var db = firebase.firestore();

window.readData = () => {
  db.collection("qrUsersCodes").get().then((querySnapshot) => {
    const arr = [];
    let date = new Date();

    let userDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}-${date.getHours()}:${date.getMinutes()}`;
    
    // let dateN = date.slice(0,23);
    querySnapshot.forEach((doc) => {
      // document.getElementById('comercio').innerHTML
      // console.log(doc.data().paymentData.aditionalData);
      const comercio = doc.data().paymentData.aditionalData;
      const cuenta = doc.data().paymentData.alipayQR;
      const monto = doc.data().paymentData.orderData.amount;
      const folio = doc.data().paymentData.orderData.ticketId;
      const email = doc.data().paymentData.email;
      arr.push(comercio, cuenta, monto, folio, email, userDate);
      // console.log(`${doc.id} => ${doc.data()}`);
    });
    // console.log(arr);
    if (window.location.href.indexOf('payment') > 0) {
      document.getElementById('comercio').innerHTML = arr[0];
      document.getElementById('cuenta').innerHTML = arr[1];
      document.getElementById('monto').innerHTML = arr[2];
    }
    if (window.location.href.indexOf('comprobanteFinal') > 0) {

      document.getElementById('comercio1').innerHTML = arr[0];
      document.getElementById('importe').innerHTML = arr[2];
      document.getElementById('fecha1').innerHTML = arr[5];
      document.getElementById('folio1').innerHTML = arr[3];
      document.getElementById('e-mail1').innerHTML = arr[4];
      
    }
  });
};

readData();
