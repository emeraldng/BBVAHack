const connectBtn = document.getElementById('connect-btn');
const QRBtn = document.getElementById('qr');

connectBtn.addEventListener('click', (e) => {
    event.preventDefault(e);
    window.location.assign('../responsive-web/first-view.html');
});

QRBtn.addEventListener('click', (e) => {
    event.preventDefault(e)
    window.location.assign('../responsive-web/qrscan.html');
});