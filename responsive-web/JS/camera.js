const player = document.getElementById('player'); 
  const snapshotCanvas = document.getElementById('snapshot');
  const captureButton = document.getElementById('capture');

  const handleSuccess = function(stream) {
    // Attach the video stream to the video element and autoplay.
    player.srcObject = stream;
  };
  navigator.mediaDevices.getUserMedia({video: true})
  .then(handleSuccess);

  setTimeout(function() {
    window.location.assign('../amount.html')
  }, 12000);