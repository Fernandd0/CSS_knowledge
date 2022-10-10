function fncEnviar(){
    var nombre = document.getElementById('txtnombre').value;
    var apellido = document.getElementById('txtapellido').value;
    var edad = document.getElementById('txtedad').value;
    var datos = '<strong>Nombres: </strong>' + nombre + '<br><strong>Apellido: </strong>' + apellido + '<br><strong>Edad: </strong>' + edad;

    document.getElementById('divMensaje').innerHTML = datos;
}