function validateForm(){
    var x = document.forms["f_reserva"]["nombre"].value;
    if (x == "" || x == null) {
      alert("Debe ingresar nombre para realizar la Reserva");
      return false;
    }

}