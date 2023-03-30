//Creacion de variables
//Con var puedo crear muchas veces la misma variable 
var edad = 35;
var edad = 36;

//let no podemos crear 2 0 más variables con el mismo nombre. La puedo instanciar sin asignarle ningún valor
let nombreUsuario;
nombreUsuario = "María";
alert("El nombre del usuario/a es : " + nombreUsuario);

// const no puedo reasignarle otro valor a la constante y no la puedo declarar sin asignarle un valor
const EMAIL = "chau@servidor.com.ar";


//La sentencia prompt sirve para que el usuario nos ingrese datos, y poder guardalo en variables para luego mostrarlas o realizar algún proceso

let nombreIngresado = prompt("Ingrese su nombre: ");
alert("El nombre ingresado fué: " + nombreIngresado);

let numero1 = prompt("Ingres el primer número: ");
let numero2 = numero1;
alert("El número ingresado es: " + numero2);









