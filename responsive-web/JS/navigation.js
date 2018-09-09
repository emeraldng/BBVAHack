const connectBtn = document.getElementById('connect-btn');
const QRBtn = document.getElementById('qr');
const alertConfirm = document.getElementById('confirm-payment');
const toMenu = document.getElementById('to-menu');

QRBtn.addEventListener('click', (e) => {
    event.preventDefault(e)
    window.location.assign('../responsive-web/qrscan.html');
});

connectBtn.addEventListener('click', (e) => {
    event.preventDefault(e);
    window.location.assign('../responsive-web/first-view.html');
});

alertConfirm.addEventListener('click', (e) => {
    event.preventDefault(e);
    window.location.assign('../responsive-web/succes.html')
})

toMenu.addEventListener('click', (e) => {
    event.preventDefault(e);
    window.location.assign('./login.html');
});
