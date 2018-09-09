const connectBtn = document.getElementById('connect-btn');
const QRBtn = document.getElementById('qr');
const confirmPayment = document.getElementById('confirm-payment');
const confirmAmount = document.getElementById('confirm-amount');
const finalizeTransaction = document.getElementById('to-menu');

if (window.location.href.indexOf('login') > 0) {
  connectBtn.addEventListener('click', (e) => {
    event.preventDefault(e);
    window.location.assign('../public/first-view.html');
  });
}

if (window.location.href.indexOf('first') > 0) {
  QRBtn.addEventListener('click', (e) => {
    event.preventDefault(e);
    window.location.assign('../public/qrscan.html');
  });
}

if (window.location.href.indexOf('scan') > 0) {
  document.getElementById('qrbutton').addEventListener('click', (e) => {
    event.preventDefault(e);
    window.location.assign('../public/amount.html');
  });
}


if (window.location.href.indexOf('amount') > 0) {
  confirmAmount.addEventListener('click', (e) => {
    event.preventDefault(e);
    window.location.assign('../public/preview-payment.html');
  });
}

if (window.location.href.indexOf('payment') > 0) {
  confirmPayment.addEventListener('click', (e) => {
    // alert

    swal({
    //   className: 'red-bg',
      title: '¡Felicidades!',
      text: 'Tu pago se realizo con éxito',
      icon: 'success',
      button: 'Continuar',
    })
    .then((value) => {
        location.href = ('../public/comprobanteFinal.html');
      });
  });
}

if (window.location.href.indexOf('comprobanteFinal') > 0) {
  finalizeTransaction.addEventListener('click', (e) => {
    event.preventDefault(e);
    window.location.assign('../public/first-view.html');
  });
}


// toMenu.addEventListener('click', (e) => {
//     event.preventDefault(e);
//     window.location.assign('./login.html');
// });
