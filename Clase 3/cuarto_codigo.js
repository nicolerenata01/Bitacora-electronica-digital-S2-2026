// Creamos una variable que gobierna
// el tamaño del círculo
let diametro = 300;

function setup() {
  createCanvas(400, 800);
  background(255);
}

function draw() {
  // Para hacer círculos, se usa
  // circle(posX, posY, diametro);
  circle(200, 400, diametro);
  
  // Ya sabemos hacer líneas
  line(100, 100, 300, 700);
  
  // Para hacer un cuadrado
  // square(posX, posY, largoLado);
  square(300, 150, 50);
  
  // Para hacer un triángulo, damos coordenadas
  // de cada vértice
  // triangle(x1, y1, x2, y2, x3, y3);
  triangle(100, 700, 150, 650, 200, 750);
}
