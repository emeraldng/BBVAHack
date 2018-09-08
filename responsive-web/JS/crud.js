const DB = inizializing();
// Funcion que transforma a string los datos necesarios
// para generar el codigo QR
const QRInfoToStringlify = () => {
  DB.collection('qrUsersCodes').onSnapshot((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const concat = doc.id + JSON.stringify(doc.data());
      console.log(typeof (concat));
      console.log(concat);
    });
  });
};
// QRInfoToStringlify();

// Funcion para selecciónar que tipo de pago
const selectPaymentType = () => {
  const creditCard = getElementById('credit-card-id');
  const debitCard = getElementById('debit-card-id');
  const bbvaPoints = getElementById('bbva-points');
  const paymentType = '';
  if (creditCard !== null && debitCard === null && bbvaPoints === null) {
    paymentType = 'PAGO for tarjeta Debito';
  } else if (creditCard === null && debitCard !== null && bbvaPoints === null) {
    paymentType = 'PAGO for tarjeta Credito';
  } else if (creditCard === null && debitCard === null && bbvaPoints !== null) {
    paymentType = 'PAGO for puntos BBVA';
  }
  return paymentType;
};

// 
