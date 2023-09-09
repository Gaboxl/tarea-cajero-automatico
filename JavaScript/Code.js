// Datos de prueba
const usuario = "luis";
const clave = 1234;
let saldo = 500;

let intentos = 0;

function validarClave() {

  let usuarioIngresado = document.getElementById("usuario").value;
  let contrasenaIngresada = document.getElementById("contrasena").value;

  if (usuarioIngresado !== usuario || contrasenaIngresada != clave) {
    if (intentos < 3) {
      alert("Clave o nombre de usuario incorrecto. Intente de nuevo.");
      intentos++;
    } else {
      alert("Alcanzó los intentos máximos que son 3");
    }
  } else {
    alert("Clave correcta!");
    document.getElementById("login").style.display = "none";
    document.getElementById("opciones").style.display = "block";
    // Mostrar seccion de opciones
  }

}

function consultarSaldo() {
  let divResultado = document.getElementById("resultado");
  divResultado.innerHTML = `Su saldo es: ${saldo}`;
}

function ingresarMonto() {
  let monto = prompt("Ingrese monto a depositar");
  let nuevoSaldo = saldo + parseFloat(monto);
  alert("Depósito exitoso");
  let divResultado = document.getElementById("resultado");
  divResultado.innerHTML = `Usted ingresó: ${monto} <br> Su nuevo saldo es: ${nuevoSaldo}`;
  saldo = nuevoSaldo;
}

function retirarMonto() {
  let monto = prompt("Ingrese monto a retirar");
  let nuevoSaldo;
  if (monto > saldo) {
    alert("Fondos insuficientes. No puede retirar más de su saldo disponible.");
  } else {
    nuevoSaldo = saldo - parseFloat(monto);
    alert("Retiro exitoso");
    let divResultado = document.getElementById("resultado");
    divResultado.innerHTML = `Usted retiró: ${monto} <br> Su nuevo saldo es: ${nuevoSaldo}`;
    saldo = nuevoSaldo;
  }
}