// doble slash para comentarios 
//print imprime en la consola lo que sea que está dentro

function setup() {
  //Crea un lienzo, en processing es size que define el tamaño
  //createCanvas(pixHorizontal, pixVertical)
  createCanvas(400, 800);
  // color de fondo background
  // o es negro, 255 es blanco y de ahí escala de grises
  background (255);
}

function draw() {
  //para hacer una linea
  //line (PIx, PIy, PFx, PFy)
  line(100, 200, 300, 700); 
  // para texto 
  textSize (128);
  //hay que rellenar el texto antes de ejecutar con fill()
  fill (0);
  // cambiar tamañano del texto
  textSize(20);
  text ("somos unas letras", 200, 400);
}
