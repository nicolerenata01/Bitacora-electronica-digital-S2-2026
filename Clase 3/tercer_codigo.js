// Vamos a aprender lo que son las variables
// Una variable es un pedazo de información
// Por ejemplo, mi edad es una variable
// Si quiero guardar mi edad, debo almacenarla
// En un lugar del computador
// Las edades son números enteros
let edad = 12;

// Hay otro tipo de variable para números con decimales
let nota = 5.2;

// Para guardar textos (cadenas de caracteres) se usan comillas
let saludo = "Hola";

// Vamos a crear un string con nombre
let nombre = "pin";

function setup() {
  createCanvas(400, 800); // Define el tamaño del canvas (equivalente a size())
  background(255);
}

function draw() {
  line(100, 100, 300, 300);
  fill(0);
  textSize(20);
  text(saludo, 200, 400);
  
  // Imprimir el nombre
  text(nombre, 200, 450);
  
  // Las variables están hechas para usarse
  // Por ejemplo, puedo mostrar mi edad en la pantalla
  // Yo puedo encadenar variables y textos usando el operador +
  text("mi edad es: " + edad, 200, 500);
  
  // Voy a mostrar la nota en la pantalla
  text("mi nota es: " + nota, 200, 550);
}
