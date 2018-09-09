
const config = {
  apiKey: 'AIzaSyBUJpLPPYAePtEgiX4lKd_OzfW6JzGrLEM',
  authDomain: 'retoqr-bbavahack.firebaseapp.com',
  databaseURL: 'https://retoqr-bbavahack.firebaseio.com',
  projectId: 'retoqr-bbavahack',
  storageBucket: 'retoqr-bbavahack.appspot.com',
  messagingSenderId: '533948690919',
};
firebase.initializeApp(config);
let db = firebase.firestore();

const but = document.getElementById("confirm-amount");

but.addEventListener(click, () => {

  const amount11 = document.getElementById("number").value;

  db.collection("pagos").add({
    amount: amount11,
    country: "MX",
    currency: "MXN",
    merchandtId: "234876991",
    paymentType: "Pago con T. Débito",
    terminalId: 6,
    ticketID: "WDF-201700011177234",
    signature: "ccef112c5be48f9b3ee43396d201b77fbf9955ed14df2c096d5269c01a99594h",
    timeStamp: "",
    transactionName: "Transaction LG",
    clientEmail: "ifglitterthen@gmail.com"
  })
})
.then(function(docRef){
 alert("exito!");
})
.catch(function (err){
alert("error!");
});