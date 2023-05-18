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


// let otroNumero = 0;

// do {
// 	otroNumero= prompt("Ingrese un número: ");
// 	console.log(otroNumero);
	
// } while (parseInt(otroNumero));


/*-------------CLASE 04-----------*/

//FUNCIONES

//DECLARACIONES

// function saludar (){
//   console.log("Hola estudiantes");
// }


//LLAMADO (PUEDO LLAMAR A LA FUNCIÓN EN CUALQUIER PARTE DEL CÓDIGO)
// saludar();

// PEDIR NOMBRE A LA VIEJA USANSA

// let nombreIngresado = prompt("Ingrese su nombre: ");
// alert("El nombre ingresado es: " + nombreIngresado);

// nombreIngresado = prompt("Ingrese su nombre: ");
// alert("El nombre ingresado es: " + nombreIngresado);
// nombreIngresado = prompt("Ingrese su nombre: ");
// alert("El nombre ingresado es: " + nombreIngresado);

//PERO AHORA CON FUNCIONES

//FUNCIONES S/ PARÁMETROS

// function solicitarNombre(){
//   let nombreIngresado = prompt("Ingresar nombre: ");
//   alert("El nombre ingreado es: " + nombreIngresado);
// }

//LO BUENO DE LAS FUNCIONES ES QUE LAS PUEDO LLAMAR DONDE QUIERA EN MI CÓDIGO

// solicitarNombre();
// solicitarNombre();

//FUNCIONES S/ PARÁMETROS

// function conParametros(parametro1, parametro2){
//   console.log(parametro1 + " " + parametro2);
// }

// conParametros("Hola", "Coder");
// conParametros("Cursando", "JS");

//SUMAR Y MOSTRA

// let resultado = 0;

// function sumar (primerNumero, segundoNumero){
//   resultado = primerNumero + segundoNumero;
// }

// function mostrar (mensaje){
//   console.log(mensaje);
// }

// sumar(10,5);
// mostrar(resultado);

//RETURN 

// function sumar (primerNumero, segundoNumero){
//   return primerNumero + segundoNumero;
// }

// let resultado = sumar(5,8);
// console.log(resultado);


//FUNCIÓN CON SWITCH

// function calculadora (primerNumero, segundoNumero, operacion){
//   switch(operacion){
//     case "+":
//       return primerNumero + segundoNumero;
//     break; 

//     case "-":
//       return primerNumero - segundoNumero;
//     break; 

//     case "*":
//       return primerNumero * segundoNumero;
//     break;
    
//     case "/":
//       return primerNumero / segundoNumero;
//     break; 

//     default: 
//     return 0;
//     break;
//   }
// }

// console.log(calculadora(10,5,"/"));

//SCOPE

//VARIABLES GLOBAL

// let resultado = 0;

// function sumar (primerNumero, segundoNumero){
//   resultado = primerNumero + segundoNumero;
//   /*VARIABLE LOCAL
//   let resultado = primerNumero + segundoNumero;*/
// }

// sumar(20,30);
// console.log(resultado);

//IDENTIFICACION VARIABLES GLOBALES Y LOCALES

//VARIABLE GLOBAL
// let nombre = "Román Riquelme";

// function saludar(){
  //VARIABLE LOCAL 
  // let nombre = "Martín Palermo";
  // console.log(nombre);
// }

//ACCEDO A LA VARIABLE NOMBRE (GLOBAL)
// console.log(nombre);
//ACCEDO A LA VARIABLE NOMBRE (LOCAL)
// saludar();

//FUNCIONES ANÓNIMAS

// const sumar = function (a,b) {
//   return a + b;
// }

// const restar = function (a,b) {
//   return a - b;
// }

// console.log(sumar(10,20));
// console.log(restar(20,10));

//FUNCIONES FLECHA

// const sumar =  (a,b) => {
//   return a + b;
// }

//SI ES UNA FUNCIÓN DE UNA SOLA LÍNEA CON RETURN PODEMOS EVITAR ESCRIBIR EL CUERPO
// const restar = (a,b) => a - b;


// console.log(sumar(10,20));
// console.log(restar(30,10));

//EJEMPLO APLICADO: CALCULAR PRECIO

// const suma = (a,b) => a + b;
// const resta = (a,b) => a - b;

// const iva = z => z * 0.21;
// let precioProducto = 500;
// let descuento = 50;

// let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento);
// console.log(nuevoPrecio);

/*-------------CLASE 05-----------*/

//OBJETOS

// let nombre = "Homero";
// let edad = 39;
// let calle = "Av. Siempreviva 742";

// //Las variables anteriores están relacionados entre sí, por ello lo podríamos agrupar en un objeto literal

// const persona1 = {
//   nombre: "Homero",
//   edad: 39,
//   calle: "Av. Siempreviva 742"
// };

// //INSTANCIO EL OBJETO USUARIO

// const usuario = {
//   nombre: "Natalia",
//   apellido: "Saravia",
//   edad: 40,
//   //definida la propiedad como string
//   "pais": "Colombia",
//   esPremium: true,
//   domicilio: {
//     ciudad: "Posadas",
//     direccion: "Centenario 320",
//     cp: 3300
//   },
//   //METODOS, LO QUE EL OBJETO SABE HACER, SUS ACCIONES
//   //FORMA LARGA DE DECLARAR EL MÉTODO/FUNCIÓN
//   sayHello: function (){
//     console.log("Hola mi apellido es " + usuario.apellido);
//   },
//   //FORMA ABREVIADA DE DECLARAR EL MÉTODO/FUNCIÓN
//   diHola(){
//     console.log("Hola mi nombre es " + usuario.nombre)
//   }
// }

// usuario.diHola();
// usuario.sayHello();

// //PARA ACCEDER A LA PROPIEDAD DEFINIDA COMO STRING UTILIZO LOS CORCHETES []

// console.log(usuario["pais"]);

// //ASIGNAR VALORES A UN OBJETO VACÍO

// const user = {};

// //ACCEDO AL OBJETO VACIO
// console.log(user);

// //LE ASIGNO VALORES AL OBJETO

// user.nombre = "Macarena";
// user.apellido = "Villalba";
// user.rol = "Developer";
// user.team = "Frontend";

// console.log(user);

// //OTRA FORMA DE ASIGNAR VALORES A LAS PROPIEDADES
// user["nombre"] = "Daniela";

// console.log(user);

// //PUEDO CREAR UNA NUEVA PROPIEDAD Y ASIGNARLE UN VALOR
// user.superior = "Delfina";

// console.log(user);

// // ¿QUE ES THIS?
// //ENLAZAMIENTO EXPLICITO
// const auto = {
//   nombre: "Fuego",
//   marca: "Renault",
//   presentacion (){
//     console.log(this.nombre);
//   },
  
//   //NUEVO OBJETO LOGAN
//   logan: {
//     nombre: "Logan",
//     presentacion (){
//       //THIS AQUÍ ADQUIERE OTRO VALOR
//       console.log(this.nombre);
//     },
//   }
// }

// auto.presentacion();
// //EL THIS HACE REFERENCIA AL OBJETO DONDE SE ESTA EJECUTANDO EL MÉTODO-FUNCION PRESENTACION();
// auto.logan.presentacion();


// //METODOS PERSONALIZADOS
// //FUNCION CONSTRUCTORA
// function Persona (nombre, edad, calle){
//   this.nombre = nombre;
//   this.edad = edad;
//   this.calle = calle;

//   //metodo personalizado
//   this.hablar = function (){
//     console.log("Hola soy " + this.nombre);
//   }
// }

// const persona2 = new Persona ("Homero", 39, "Av. Siempreviva 742");
// const persona3 = new Persona ("Marge", 36, "Av. Siempreviva 742");

// persona2.hablar();
// persona3.hablar();

// //OPERADOR IN Y FOR IN
// console.log("nombre" in persona2); // devuelve true
// console.log("origen" in persona2); // devuelve false

// for (const propiedad in persona2){
//   console.log(persona3[propiedad]);
// }

// //METODOS EN OBJETOS JS
// let cadena= "HOLA CODER";

// console.log(cadena.length);
// console.log(cadena.toLocaleLowerCase());
// console.log(cadena.toUpperCase());

// //CLASES EN EMAC6 QUE REEMPLAZA A LA FUNCIÓN CONSTRUCTORA

// class Usuario {
//   constructor (nombre, apellido, edad){
//     this.nombre= nombre;
//     this.apellido = apellido;
//     this.edad = edad;
//   }
//   //metodo de la clase
//   hablar(){
//     console.log("Hola soy " + this.nombre);
//   }
// }

// const usuario1 = new Usuario ("Magalí", "Nieva", 30);
// console.log(usuario1);
// usuario1.hablar();

// //EJEMPLO APLICADO

// class Producto {
//   constructor(nombre, precio) {
//       this.nombre  = nombre.toUpperCase();
//       this.precio  = parseFloat(precio);
//       this.vendido = false;
//   }

//   //metodos
//   sumaIva () {
//       console.log(this.precio = this.precio * 1.21);
//   }
  
//   vender () {
//     console.log(this.vendido = true);
//   }
// }

// //CONSTRUYO LOS DIFERENTES OBJETOS PRODUCTOS A PARTIR DE LA CLASE PRODUCTO

// const producto1 = new Producto("arroz", "125");
// const producto2 = new Producto("fideo", "50");


// producto1.sumaIva();
// producto2.sumaIva();
// producto1.vender();

/*-------------CLASE 06-----------*/

//ARRAYS

// const arrayA = [];
// console.log( typeof arrayA);

// //arrays de números
// const arrayB = [1,2,3,4,5];

// //arrays de string
// const arrayC = ["C1", "C2","C3"];

// //arrays de booleanos

// const arrayD = [true, false, true, false, false];

// //arrays de mixto

// const arrayE= [true, 1, "Marta", 1.5, "Jorge", true];

// //ACCEDO A LOS ELEMENTOS DEL ARRAY
// console.log(arrayE[5]);

// //RECORREMOS UN ARRAY
// const productos = ["harina", 500, "sku302", true, "pureza", "disco"];

// // for (let i=0; i < 6; i++){
// //   alert(productos[i]);
// // }

// for (let i= 0; i < productos.length; i++){
//   alert(productos[i]);
// }

//METODOS DE LOS ARRAYS

const productos = ["harina", 500, "sku302", true, "pureza", "disco"];


// //METODO/PROPIEDAD PARA CONOCER EL TAMAÑO DEL ARRAY
// console.log(productos.length);

// //AGREGAR ELEMENTOS AL FINAL DEL ARRAY (PUSH)
// productos.push("leudante");

// console.log(productos);
// productos.push(200);
// console.log(productos);

// //AGREGAR ELEMENTOS AL INICIO DEL ARRAY (UNSHIFT)
// productos.unshift("1kg");
// console.log(productos);
// console.log(productos.length);

// //QUITAR ELEMENTO AL INICIO DEL ARRAY (SHIFT)
// productos.shift();
// console.log(productos);

// //QUITAR ELEMENTO AL FINAL DEL ARRAY (POP)
// productos.pop();
// console.log(productos);


// //QUITAR UNO O MAS ELEMENTOS DEL ARRAY (SPLICE)
// productos.splice(1,2);
// console.log(productos);

// productos.splice(1,2);
// console.log(productos);

// //EL METODO JOIN SIRVE PARA SEPARAR ELEMENTOS
// console.log(productos.join("----"));
// console.log(productos.join("*"));

// //EL METODO CONCAT SIRVE PARA CONCATENAR ARRAYS
// const cervezas = ["Brahma", "Estela", "Quilmes", "Andes"];

// // const masVendidos = cervezas.concat(productos);
// // console.log(masVendidos);

// //EL METODO INDEXOF SIRVE PARA CONOCER LA POSICION DE UN ELEMENTO DENTRO DEL ARRAY
// console.log(cervezas.indexOf("Quilmes"));

// //EL METODO INCLUDES SIRVE PARA SABER SI UN ELEMENTO ESTÁ O NO DENTRO DEL ARRAY
// console.log(cervezas.includes("Patagonia"));

// //EL METODO REVERSE INVIERTE LAS POSICIONES DE LOS ELEMENTOS DEL ARRAY
// cervezas.reverse();
// console.log(cervezas);

// //EJEMPLO APLICADO: CARGAR ENTRADAS

// const listaNombres = [];
// let cantidad = 5;

// //cargamos las nombres en el array mediante 

// console.log(listaNombres);

// do{
//   //pedimos que se ingrese el nombre
//   let entrada = prompt ("Ingresar nombre: ");
//   //vamos guardando cada ingreso al final del array
//   listaNombres.push(entrada.toUpperCase());
//   console.log(listaNombres.length);
// } while (listaNombres.length != cantidad)

// // console.log(listaNombres);

// const nuevaLista = listaNombres.concat (["ANA", "EMMA"]);


// alert(nuevaLista.join("\n"));

//EJEMPLO APLICADO: ELIMINAR CUALQUIER ELEMENTO
// const nombres = ["Rita", "Pedro", "Miguel", "Ana", "Vanesa"];

// console.log(nombres);

// recibo el elemento a borrar por parámetro

// const eliminar = (nombre) => {
//   busco su indice en el array
//   let index = nombres.indexOf(nombre);

//   si existe el indíce, o sea, es distinto de -1, lo borramos con splice
//   if (index != -1){
//     nombres.splice(index, 1);
//   }
// }

// eliminar("Pedro");
// console.log(nombres);

/*-------------CLASE 07-----------*/
/*-------------FUNCIONES DE ORDEN SUPERIOR-----------*/

//ABSTRACCION
//LA MISMA FUNCION, PERO SIRVE PARA CALCULAR CUALQUIER RANGO

// function sumarRangos(min,max) {
  
//   let total = 0;
  
//   for (let i=min; i<=max; i++){
//     total += i;
//   }
//   return total;
// }

// console.log(sumarRangos(1,10));//55
// console.log(sumarRangos(2,8));// 35
// console.log(sumarRangos(2,4));// 9

// let sumaEntreDosYCuatro = sumarRangos(2,4);
// console.log(sumaEntreDosYCuatro);

///RETORNAR FUNCIONES 

// function mayorQue (n){
//   return (m) => m > n;
// }

// let mayorQueDiez = mayorQue(20);

// console.log(mayorQueDiez(19));// true
// console.log(mayorQueDiez(8));// false

///RETORNAR FUNCIONES II

//Función Nombrada
// function asignarOperacion (op){
//   if (op=="sumar"){
//     //retorna el resultado de ejecutar una función flecha
//     return (a,b) => a + b;
//   } else if (op=="restar"){
//       //retorna el resultado de ejecutar una función flecha
//     return (a,b) => a-b;
//   }
// }

// let suma = asignarOperacion ("sumar");
// let resta = asignarOperacion ("restar");

// console.log(suma(10,20));
// console.log(resta(5,2));

//METODOS NATIVOS DE JS PARA BUSQUEDA Y TRANSFORMACION
//METODO FOR EACH // POR CADA UNO

// const numeros = [1,2,3,4,5,6];

// numeros.forEach( (num)  => {
//   console.log(num);
// });

//METODO FIND DEVUELVE EL PRIMER OBJETO QUE CUMPLA CON LA CONDICION, SINO UNDEFINED
//FIND CON PROMPT
// let cervezaElegida = prompt("Ingrese la cerveza: ");
// console.log(cervezasLatas.find ((cervezas) => cervezas.nombre === cervezaElegida));

// const resultado = cervezasLatas.find( (cerveza) => cerveza.nombre === "patagonia");
// const resultado2 = cervezasLatas.find( (cerveza) => cerveza.nombre === "quilmes");

// console.log(resultado);
// console.log(resultado2);

//METODO FILTER RETORNA EL ARRAY CON EL O LOS ELEMENTOS QUE CUMPLAN LA CONDICION, SINO VACIO

// const resultado3 = cervezasLatas.filter( (cerveza) => cerveza.precio < 600);
// const resultado4 = cervezasLatas.filter ( (cerveza) => cerveza.nombre.includes("origen"));
// // console.log(resultado3);
// console.log(resultado4);
// console.log(cervezasLatas);

//METODO SOME RETORNA TRUE O FALSE SI ENCUENTRA O NO ALGUN ELEMENTO QUE CUMPLA CON LA CONDICION

// console.log(cervezasLatas.some((cerveza) => cerveza.nombre == "corona origen"));
// console.log(cervezasLatas.some((cerveza) => cerveza.nombre == "palermo"));

// const nombresCervezas = cervezasLatas.map ((cervezas) => cervezas.nombre);
// console.log(nombresCervezas);

//METODO MAP CON LOS PRECIOS MODIFICADOS

// const preciosActualizados = cervezasLatas.map((cerveza) => {
//   return {
//     nombre: cerveza.nombre,
//     precio: cerveza.precio * 1.21
//   }

// });

// console.log(preciosActualizados);
// console.log(cervezasLatas);

//METEDODO REDUCE RECORRE EL ARRAY Y NOS RETORNA UN UNICO VALOR, LUEGO DE HACER UNA COMPARACION

// const numeros = [20,335,25,150,900,10];

// const totalCompra = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
// console.log(totalCompra);

// const compraTotal = cervezasLatas.reduce ((acumulador, cerveza) => acumulador + cerveza.precio ,0)
// console.log(compraTotal);

const cervezasLatas = [
  {
    nombre: "patagonia",
    precio: 700
  },
  {
    nombre: "patagonia",
    precio: 800
  },
  {
    nombre: "estela",
    precio: 500
  },
  {
    nombre: "andes origen",
    precio: 600
  },
  {
    nombre: "brahma",
    precio: 450
  },
  {
    nombre: "corona origen",
    precio: 450
  },
];

/*-------------CLASE 08-----------*/
/*-------------FUNCIONES DE ORDEN SUPERIOR II-----------*/

//OBJETO MATH

// console.log(Math.PI);

// // console.log(Math.min(1,2,3,-1,-2,10));
// // console.log(Math.max(1,2,3,-1,-2,10));

// const pi = Math.PI; // 3.141592653589793

// //CEIL: devuelve el entero mayor o igual más proximo
// console.log(Math.ceil(pi)); // 4

// //FLOOR: devuelve el entero más cercano, pero redondeado hacia abajo
// console.log(Math.floor(pi)); // 3

// //ROUND: devuelve el valor de un numero redondeado al entero más cercano
// console.log(Math.round(pi)); // 3

// //Raíz cuadrada
// console.log(Math.sqrt(8));

//numeros aleatorios, entre 0 y 1
// console.log(Math.random());
// console.log(Math.round(Math.random()));

//numeros aleatorios entre 0 y 10
// console.log(Math.random() * 10);

// const generarNumeros = () => {
//   return Math.round (Math.random() * 100);
// }

// console.log(generarNumeros());

//LA CLASE DATE

// //FECHA Y HORA ACTUAL
// console.log(new Date);

// //constructor
// console.log(new Date(2023,3,24));

// const casiNavidad = new Date ("December 25, 2023,23:59:59");
// console.log(casiNavidad);

// //obtener un valor de la fecha
// console.log(casiNavidad.toDateString());
// console.log(casiNavidad.toLocaleDateString());

// console.log(casiNavidad.getFullYear()); //2023
// console.log(casiNavidad.getMonth());
// console.log(casiNavidad.getDate());

/*-------------CLASE 09-----------*/
/*-------------DOM-----------*/

//document es un objeto global, que convierte las etiquetas html en nodos (objetos) en JS
//accedo al body del html mediante el objeto global document
console.log(document.body);

// console.log(document.body);
// console.log(document.head);

// FORMAS DE ACCEDER A LOS NODOS
// let docu = document.getElementById("app");
// let parrafo = document.getElementById("parrafo1");

// console.log(docu.innerHTML);
// console.log(parrafo.innerHTML);

// //getElementsByClassName
// let paginas = document.getElementsByClassName("secciones");
// console.log(paginas[0].innerHTML);
// console.log(paginas[1].innerHTML);
// console.log(paginas[2].innerHTML);
// console.log(paginas[3].innerHTML);
// console.log(paginas[4].innerHTML);
// alert("Bienvenido/a! Usted está en la seccion " + paginas[2].innerHTML);

//getElementsByTagName
// let contenedores = document.getElementsByTagName("div");
// console.log(contenedores[0].innerHTML);

//innerText
// let titulo = document.getElementById("titulo");
// console.log(titulo.innerHTML);

// //modifico el contenido textual
// titulo.innerText = "Elegí lo mejor";
// alert(titulo.innerText);

//innerHTML

// let container = document.getElementById("container");
// console.log(container);

// //cambiar/ definir el contenido de ese div vacío
// container.innerHTML = "<h1>Tu tienda favorita</h1><p>Te estamos esperando</p>";

// //className
// container.className = "fontsize encabezado";


//createElements
// let parrafo = document.createElement("p");
// parrafo.innerHTML = "<h2>Bienvenidos</h2>";

// document.body.append(parrafo);

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }

//---AFTER 02---

//funciones clásicas/ función nombrada/ hoisting: puedo llamar a la función, inclusive, antes de inicializarla/crearla

// console.log(saludo("Juan"));
// console.log(saludo("Hernán"));
// console.log(saludo("Romina"));

// //creo/inicializo la  función
// function saludo (nombre){
//   return "Hola " + nombre;
// } 

// //funciones anónimas sin hoisting
// // console.log(saluda("Jorge")); // error de referencia - no puedo llamarla antes de la inicialización

// let saluda = function (nombre){
//   return "Saludos " + nombre;
// }
// console.log(saluda("Jorge"));

// // funciones flecha 
// //1-Son anónimas
// //2 no necesitan la palabra reservada function
// //3 no permite hoisting
// //4 si es de sólo una línea la instrucción, puede ir sin return
// //5- También le puedo sacar las llaves

// let saludar = (nombre) =>  "Bienvenidos" + nombre;
// console.log(saludar("Máximo"));

// //otra función flecha
// let sumar = (num1, num2) => {
//   return num1 + num2;
// }

// console.log(sumar(50,50));

// ///RETORNAR FUNCIONES II

// //Función Nombrada
// function asignarOperacion (op){
//   if (op=="sumar"){
//     //retorna el resultado de ejecutar una función flecha
//     return (a,b) => a + b;
//   } else if (op=="restar"){
//       //retorna el resultado de ejecutar una función flecha
//     return (a,b) => a-b;
//   }
// }

// let suma = asignarOperacion ("sumar");
// let resta = asignarOperacion ("restar");

// console.log(suma(10,20));
// console.log(resta(5,2));

/*-------------CLASE 10-----------*/
/*-------------DOM + EVENTOS-----------*/

// let variableNueva = document.getElementsByClassName("secciones");
//variable se transforma en un nodo
// variableNueva[3].remove();

//GETELEMENTSBYTAGNAME ME CREA UN ARRAY CON LOS ELEMENTOS QUE CUMPLAN LA CONDICION
// let variable = document.getElementsByTagName("p");
// console.log(variable[1]);

// let variable = document.createElement("p");
// // console.log(variable);
// variable.innerHTML = "<h2>Bienvenidos</h2>";

// //agrego como hijo el nodo creado (variable) con append
// document.body.append(variable);

// //remover nodos remove ()
// variable.remove();

//PLANTILLLAS LITERALES E INNERHTML

// let producto = {
//   id: 1,
//   nombre: "patagonia",
//   precio: 650
// };

// let plantillaNueva = document.createElement("div");
// //lo declaramos el html con backtick alt+ 96 ``
// plantillaNueva.innerHTML = `
// ID: ${producto.id} - Producto: ${producto.nombre} - Precio: $${producto.precio};
// `;

// document.body.appendChild(plantillaNueva);

//querySelector

// let otroParrafo = document.querySelector(".secciones");
// // let unParrafoMas = document.querySelector(".texto");
// console.log(otroParrafo);

//EVENTOS

//OPCION 01 CON NOMBRE DE EVENTO Y FUNCION DE RETORNO COMO PARAMETROS
// let boton = document.getElementById("btnPrincipal");
// boton.addEventListener('click', respuestaClick)
//   // function respuestaClick (){
//   //   console.log("respuesta 1");
//   // }

//OPCION 02 EMPLEAR PROPIEDAD DEL NODO
// boton.onclick = () => { console.log("respuesta 2");}

//OPCION 03 comO ATRIBUTO HTML NO RECOMENDADO USAR OPCIONES 01 O 02

//EVENTOS DEL MOUSE

// boton.onmousemove = () => {
//   console.log("move");
// }

//EVENTO SUBMIT

// let miFormulario = document.getElementById("formulario");

// miFormulario.addEventListener('submit', validarFormulario);

// function validarFormulario (e){
//   e.preventDefault();
//   console.log("Formulario Enviado");
// }

/*-------------OBJETO STORAGE-----------*/

//localStorage
//seter
// localStorage.setItem("Bienvenido", "Hola People");
// localStorage.setItem("esValido", true);
// localStorage.setItem("unNumero", 20);

// //localStorage.getItem - lo que obtenemos lo guardamos en variables
// //getter
// // 1- inicializar los metodos/funciones

// let mensaje = localStorage.getItem("Bienvenido");
// let esValido = localStorage.getItem("esValido");
// let numero = localStorage.getItem("unNumero");

// // 2- llamo a las funciones/metodos
// console.log(mensaje);
// console.log(esValido);
// console.log(numero);

//sessionStorage
//seter
//sessionStorage.setItem

// sessionStorage.setItem("seleccionados", [1,2,3,4]);
// sessionStorage.setItem("email", "hola@servidor.com");

// //sessionStorage.getItem

// let email = sessionStorage.getItem("email");

// console.log(typeof email);
// console.log(email);

//eliminar datos del Storage

//enLocaleStorage

// localStorage.setItem("temaHoy", "Storage");

// //lo eliminamos
// localStorage.removeItem("temaHoy");

/*-------------JSON-----------*/

// const producto2 = {
//   id: 0002,
//   nombre: "Patagonia",
//   precio: 500,
//   stock: true
// }

// //sin JSON
// // localStorage.setItem("producto2", producto2);

// //LO CONVERTIMOS A JSON CON EL METODO STRINGIFY
// const enJSON = JSON.stringify(producto2);
// console.log(enJSON);
// console.log( typeof enJSON);

// //AHORA LO GUARDO EN LOCALSTORAGE
// localStorage.setItem("producto2", enJSON);

/*-------------OPERADORES AVANZADOS-----------*/

//EL OPERADOR ++

// let num = 10;

// //aumentar a la antigua
// num = num + 1;
// // console.log(num);

// //PRIMERA SIMPLIFICACION
// num += 1; // le sumo 1 a lo que ya tenía en num

// //SEGUNDA SIMPLIFICACION
// num++; //le sumo 1 a lo que ya tenía en num
// console.log(num);

// //OPERADOR TERNARIO
// //A LA ANTIGUA

// let temperatura = 31;

// // if (temperatura > 30){
// //   alert("Día caluroso!");
// // } else {
// //   alert("Día lindo!");
// // }

// // SIMPLIFICAMOS CON TERNARIO

// (temperatura > 30) ? alert("Dia caluroso") : alert("Dia lindo!"); 

// const usuario = {
//   nombre: "Juanma",
//   edad: 15
// }

// const permiso = (usuario.edad >= 18) ? true : false;

// permiso ? alert("Puedes comprar cerve") : alert("No chiquito, no puedes comprar cerve");

// OPERADOR && AND

// const carrito = [];

// a la old school
// if (carrito.length === 0){
//   alert("No tienes cerves en el carrito");
// } else {
//   alert("Tu carrito tiene una cerve");
// }

// //con con AND &&
// carrito.length === 0 && console.log("Tu carrito no tiene ni una cerve");

//OPERADOR OR || 

// const usuario1 = {
//   nombre: "Juan",
//   edad:15 
// };

// const usuario2 = null;

// console.log(usuario1 || "Estás adentro");
// console.log(usuario2 || "Usuario no registrado");


// // /*-------------OPERADORES AVANZADOS II-----------*/
// //desestructuracion
// const usuario = {
//   nombre: "Juanma",
//   edad: 39,
//   cursos: {
//     javascript: "aprobado",
//     html: "aprobado",
//   }
// }

// // inmutabilidad= guardo el valor de una propiedad en una variable, para no modificar o resguardar 
//  //a la antigua

// //  let nombre = usuario.nombre;
// //  console.log(nombre);

// //  let edad = usuario.edad;
// //  console.log(edad);

//  //simplificar con Desestructuracion
// const {nombre, edad} = usuario;
// console.log(nombre);
// console.log(edad);

//Otro tipo  de desestructuración

// const usuario1 = {
//   nombre: "John Doe",
//   edad: 32,
//   telefono: {
//       cel: 113334444,
//       casa: null,
//       trabajo: 113325555
//   }
// }

// const {nombre, telefono: {trabajo}} = usuario1;
// console.log(trabajo);

// // //ALIAS

// // //desestructuramos el objeto patagonia

// const patagonia = {
//   item_id: 0002,
//   product_name: "patagonia",
//   price_per_unit: 800
// }

// const {
//   item_id: id,
//   product_name: nombre1,
//   price_per_unit: precio
// } = patagonia

// console.log(id) // 0002
// console.log(nombre1) // "patagonia"
// console.log(precio) // 800

//Spread

// const nombres = ["Juan", "Julieta", "Carlos", "Mariela"];
// // console.log(nombres);

// console.log(...nombres);

// //spread de ARRAYS
// const numeros = [4, 77, 92, 10, 3, -32, 54, 11];

// console.log(Math.max(...numeros));

// const nombres1 = ["Juan", "Julieta"];
// const nombres2 = ["Carlos", "Mariela"];

// const nombres3 = [...nombres1,...nombres2];
// console.log(nombres3);

//Spread en un objeto

// const nombres = ["Juan", "Julieta", "Carlos", "Mariela"];

// const nombresObj = {
//   ...nombres
// }

// console.log(nombresObj);

// // /*-------------LIBRERIAS-----------*/

//SWEETALERT2

//ACCEDO AL DOM
const sweetAlert = document.querySelector('#sweetAlert');

//CREAMOS EL EVENTO
sweetAlert.addEventListener('click', () => {
  //UN OBJETO COMO PARAMETRO DEL METÓDO SWEET ALERT
  Swal.fire (
    {
      title: '¿Eres mayor de edad?',
      text: 'Veamos si puedes ingresar',
      // html: '<b class="tudiaalert">Hola!</b>'
      icon: 'warning',
      // iconHtml: '<i class="bi bi-cup-straw"></i>',
      iconColor:  '#cb4335',
      footer: '<span class="rojo">Información Importante</span>',
      // width: '50%'
      padding: '1rem',
      // background: '#000'
      // timer: '5000',
      // timerProgressBar: true, 
      // toast: true,
      // position: 'bottom-end'
  
      //inputs
      // input: 'text',
      // inputPlaceholder: 'Ingrese su edad',
      // inputValue: "0000"
  
      //BOTON CONFIRMAR
      showConfirmButton: true,
      confirmButtonText: 'Si, soy mayor de edad',
      confirmButtonColor: '#3498db',
      confirmButtonAriaLabel: 'mayor de edad',
  
       //BOTON CANCELAR
       showCancelButton: true,
       cancelButtonText: 'No soy mayor de edad',
       cancelButtonColor: '#d7bde2',
       cancelButtonAriaLabel: 'menor de edad',
  
       //BOTON DE CERRAR ALERTA
      showCloseButton: true,
      closeButtonAriaLabel: 'cerrar',
  
      //IMAGENES
      imageUrl: 'img/beerModalConfirm.jpg',
      imageWidth: '250px',
      imageHeight: '250px',
      imgAlt: 'Imagen brindis'
    }) 
    .then((resultado) => { // AFUERA DEL OBJETO, PERO DENTRO DEL EVENTO, CONDICIONAL
      if (resultado.isConfirmed) {
        Swal.fire ({
          title: 'Bienvenido a la tienda'
        })
      } else {
        Swal.fire (
          {
          title: 'No puedes ingresar a la tienda'
        })
      }
    });
})













































































































