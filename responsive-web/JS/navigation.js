const connectBtn = document.getElementById('connect-btn');
const QRBtn = document.getElementById('qr');
const confirmPayment = document.getElementById('confirm-payment');
const confirmAmount = document.getElementById('confirm-amount')

if(window.location.href.indexOf('login') > 0) {
    connectBtn.addEventListener('click', (e) => {
        event.preventDefault(e);
        window.location.assign('../responsive-web/first-view.html');
    });
};

if(window.location.href.indexOf('first') > 0){
    QRBtn.addEventListener('click', (e) => {
        event.preventDefault(e)
        window.location.assign('../responsive-web/qrscan.html');
    });
};

if(window.location.href.indexOf('scan') > 0) {
    document.getElementById('qrbutton').addEventListener('click', (e) => {
        event.preventDefault(e);
        window.location.assign('../responsive-web/amount.html');
    });
};

if(window.location.href.indexOf('amount') > 0) {
    confirmAmount.addEventListener('click', (e) => {
        event.preventDefault(e);
        window.location.assign('../responsive-web/preview-payment.html')
    });
};

if(window.location.href.indexOf('payment') > 0) {
    confirmPayment.addEventListener('click', (e) => {
        event.preventDefault(e);
        window.location.assign('../responsive-web/success.html')
    });
};

if(window.location.href.indexOf('success') > 0) {
    finalizeTransaction.addEventListener('click', (e) => {
        event.preventDefault(e);
        window.location.assign('../responsive-web/first-view.html');
    });
};
