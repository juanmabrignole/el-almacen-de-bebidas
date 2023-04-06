// //Creacion de variables
// //Con var puedo crear muchas veces la misma variable
// //DECLARAMOS LA VARIABLE 
// var edad;
// //LE ASIGNO UN VALOR
// edad = 36;
// var edad = 50;


// //let no podemos crear 2 0 más variables con el mismo nombre. La puedo instanciar sin asignarle ningún valor
// let nombreUsuario;
// // alert("El nombre del usuario es: " + nombreUsuario);
// nombreUsuario = "María";
// // alert("El nombre del usuario/a es : " + nombreUsuario);

// // const no puedo reasignarle otro valor a la constante y no la puedo declarar sin asignarle un valor
// const EMAIL = "chau@servidor.com.ar";


// //La sentencia prompt sirve para que el usuario nos ingrese datos, y poder guardalo en variables para luego mostrarlas o realizar algún proceso
// // let nombreIngresado = prompt("Ingrese su nombre: ");
// // alert("El nombre ingresado fué: " + nombreIngresado);

// //OPERACIONES BÁSICAS + - * /

// let numero1 = 10;
// let numero2 = 20;
// const NUMEROC = 15;

// //SUMA
// let resultadoSuma = numero1 + numero2;
// console.log("El resultado de la suma es: " + resultadoSuma);

// let resultadoResta = numero1 - NUMEROC;
// console.log("El resultado de la resta es: " + resultadoResta);

// let resultadoMultiplicacion = numero1 * numero2;
// console.log("El resultado de la multiplicacion es: " + resultadoMultiplicacion);

// let resultadoDivision = numero1 / numero2;
// console.log("El resultado de la dvisión es: " + resultadoDivision);


// //CADENA DE CARÁTERES
// let textoA = "Coder";
// let textoB = "House";
// const BLANCO = " ";

// console.log( typeof textoA);

// let resultado = textoA + 1;
// alert(resultado);

// //PEDIMOS DATOS AL USUARIO
// //Parseo

// // let numero3 = parseInt (prompt("Ingrese un número: "));
// // let numero4 = parseInt (prompt ("Ingrese otro número: "));

// // let resultadoOperacion = numero3 + numero4;

// // alert("El resultado de la operación es: " + resultadoOperacion);

// //Parseo con Number

// // let numero5 = Number (prompt("Ingrese un número: "));
// // let numero6 = Number (prompt ("Ingrese otro número: "));

// // let resultadoOperacion2 = numero5 + numero6;

// // alert("El resultado de la operación es: " + resultadoOperacion2);

// //ParseFloat

// let numero7 = parseFloat (prompt("Ingrese un número: "));
// let numero8 = parseFloat (prompt ("Ingrese otro número: "));

// let resultadoOperacion3 = numero7 + numero8;

// alert("El resultado de la operación es: " + resultadoOperacion3);

//structuras de control
//True o false

// if (true){
//   console.log("Vas a ver este mensaje");
// }

// //OPERACION DE EQUIVALENCIA
// let unNumero = 6;

// if (unNumero == 5){
//   console.log("El número es igual a 5");
// } else {
//   console.log("El número es distinto de 5");
// }

// let nombreUsuario = prompt("Ingrese su usuario");

// // if (nombreUsuario == ""){
// //   //branch verdadero o la condicion se cumple
// //   alert("No ingresaste nombre de usuario");
// // } else {
// //   //branch del falso,la condición NO se cumple
// //   alert("El nombre de usuario es: " + nombreUsuario);
// }

//IF ANIDADOS

// let precioProducto = Number (prompt("Ingres el precio del producto:")) ;

// if (precioProducto < 20){
//   console.log("El precio del producto es menor a 20 pesos");
// } else if (precioProducto < 50){
//   console.log("El precio ingresado es menor que 50 pesos");
// } else if (precioProducto < 100){
//   console.log("El precio ingresado es menor que 100 pesos");
// } else {
//   console.log("El precio ingresado es mayor a 100 pesos");
// }

// //VARIABLES BOOLEANAS

// let edad = Number (prompt("Ingrese su edad"));
// const ESMAYOR = (edad >= 18);

// if (ESMAYOR) {
//   alert("Bienvenido/a al sitio web: ");
// } else {
//   alert("Debes ser mayor de edad para ingresar");
// }

//OPERADORES LÓGICOS

// let nombreUsuario = prompt("Ingrese su nombre: ");
// let apellidoUsuario = prompt("Ingrese su apellido: ");

// if ((nombreUsuario != "") || (apellidoUsuario != "")){
//     alert("Bienvenido" + nombreUsuario + " " + apellidoUsuario);
// } else {
//   alert("ERROR: falta algún dato!");
// } 
    

//CICLOS 
//CICLO FOR

//INCREMENTO
// for (let i= 0; i<4;i++){
// console.log("Iteración n°: " + i);
// }

//DECREMENTO
// for (let i= 4; i>=1;i--){
// 	console.log("Iteración n°: " + i);
// 	}

//TURNERA

// for (let i= 1; i<=20;i++){
// 	let ingresarNombre = prompt("Ingresar nombre: ");
// 	alert("Turno N° "+ " " + i + " Nombre: " + ingresarNombre);
// }

//CICLO WHILE
//PROGRAMITA DONDE EL USUARIO CARGA DATOS HASTA QUE INGRESA ESC 

// let entrada = prompt("Ingrese un dato: ");

// while (entrada != "ESC"){
// 	alert("El usuario ingresó: " + entrada);
// 	entrada = prompt("Ingrese oro dato: ");
// }

//LA PALABRA CORRECTA

// let palabra = "";

// while (palabra != "Hola"){
// 	palabra = prompt("Ingrese la palabra correcta");
// } 

// alert("Ingresaste la palabra correcta!");

//CICLO DO WHILE
//PROGRAMITA QUE CORTA CUANDO EL USUARIO NO INGRESA UN NÚMERO

let otroNumero = 0;

do {
	otroNumero= prompt("Ingrese un número: ");
	console.log(otroNumero);
	
} while (parseInt(otroNumero));







