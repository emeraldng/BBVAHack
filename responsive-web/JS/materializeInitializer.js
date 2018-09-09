// Navbar
document.addEventListener('DOMContentLoaded', () => {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});

// swal('hola');

swal({
  title: "¡Felicidades!",
  text: "Tu pago se realizo con éxito",
  icon: "success",
});
