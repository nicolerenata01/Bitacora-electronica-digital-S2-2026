// Paleta
// const variable que no se puede cambiar
const beige = '#d8ccb8';
const beigeClaro = '#d3c9b6';
const grisClaro = '#b4afa3';
const grisMedio = '#7b7a76';
const grisMedio2 = '#8a8881';
const grisColumna = '#6c6b68';
const grisOscuro = '#403f3d';
const negro = '#222222';
const azul = '#456b7c';
const azulOscuro = '#3a5c6a';

function setup() {
  createCanvas(1024, 1536);
  textFont("Arial");
}
 
function draw() {
  background(beige);
  noStroke();

  // columna verticar tras la tuberia
  fill (grisMedio);
  rect(840, 0, 80, 640);

  // plano gris izquierdo
  fill(grisMedio);
  quad(0, 405, 600, 655, 566, 770, 0, 822);
  // quad cuadrilatero
  // pieza gris entre la boca de la tubería y el pilar
  quad(720, 706, 768, 732, 768, 764, 702, 772);

  // gris canal
  quad(0, 1076, 766, 762, 768, 952, 0, 1216);

  // mini franja
  fill(beigeClaro);
  quad(0, 1040, 541, 842, 766, 760, 0, 1076);
  // línea clara fina sobre la cuña negra
  quad(0, 822, 566, 770, 565, 772, 0, 838);

  // triang negro, al lado de chorro
  fill(negro);
  quad(0, 838, 565, 772, 541, 842, 0, 1040);

  // agua
  fill(azul);
  beginShape();
  vertex(572, 724);
  vertex(701, 775);
  vertex(650, 958);
  vertex(640, 1019);
  vertex(352, 1210);   // sigue la línea del muro
  vertex(352, 1390);
  vertex(135, 1536);
  vertex(0, 1536);
  vertex(0, 1205);
  vertex(495, 985);
  endShape(CLOSE);

  // reflejo oscuro entre el chorro y el muro
  fill(azulOscuro);
  triangle(650, 958, 742, 952, 640, 1019);

  // triángulo oscuro abajo a la izquierda
  fill(azul);
  triangle(352, 1390, 352, 1536, 135, 1536);

  // pilar
  fill(grisClaro);
  quad(768, 636, 850, 636, 850, 880, 768, 934);
  fill(grisMedio2);
  quad(850, 636, 920, 636, 920, 834, 850, 880);

  // tuberia
  dibujarTuberia();

  // muro
  // franja clara (borde superior, sigue la línea del muro)
  fill(beigeClaro);
  quad(1024, 765, 1024, 791, 410, 1197, 352, 1210);
  // plano superior gris
  fill(grisMedio);
  quad(1024, 791, 410, 1197, 405, 1222, 1024, 1446);
  // cara frontal oscura
  fill(grisOscuro);
  quad(405, 1222, 1024, 1446, 1024, 1536, 405, 1536);
  // cara lateral clara
  fill(grisClaro);
  quad(352, 1210, 410, 1197, 405, 1222, 405, 1536);
  rect(352, 1210, 53, 326);

  // text
  dibujarTexto();
}

function dibujarTexto() {
  // La animación vuelve a empezar (entran, esperan y se devuelven)
  let tiempo = frameCount % 1200;

  noStroke();
  fill(150,7,12);
  textSize(49);
  textFont("Courier New");
  textStyle(BOLD);

  // Posiciones finales
  let xLlegar = 350;
  let xY = 528;
  let xLlevar = 557;

  let y = 250;

  // Llegar
  if (tiempo < 200) {
    // entra desde la izquierda
    let x = map(tiempo, 0, 200, -210, xLlegar);
    text("Llegar", x, y);
  } else if (tiempo < 940) {
    // queda quieta
    text("Llegar", xLlegar, y);
  } else if (tiempo < 1140) {
    // sale de última, de vuelta hacia la izquierda
    let x = map(tiempo, 940, 1140, xLlegar, -210);
    text("Llegar", x, y);
  }

  // Y
  if (tiempo > 200 && tiempo < 340) {
    // entra desde la derecha
    let x = map(tiempo, 200, 340, 1074, xY);
    text("y", x, y);
  } else if (tiempo >= 340 && tiempo < 800) {
    // queda quieta
    text("y", xY, y);
  } else if (tiempo >= 800 && tiempo < 940) {
    // sale segunda, de vuelta hacia la derecha
    let x = map(tiempo, 800, 940, xY, 1074);
    text("y", x, y);
  }

  // Llevar
  if (tiempo > 340 && tiempo < 540) {
    // entra desde la derecha
    let x = map(tiempo, 340, 540, 1074, xLlevar);
    text("llevar", x, y);
  } else if (tiempo >= 540 && tiempo < 600) {
    // queda quieta
    text("llevar", xLlevar, y);
  } else if (tiempo >= 600 && tiempo < 800) {
    // sale primero, de vuelta hacia la derecha
   let x = map(tiempo, 600, 800, xLlevar, 1074);
    text("llevar", x, y);
  }
}

function dibujarTuberia() {
  // Codo: polígono con vertex() (curva aproximada con segmentos rectos)
  fill(negro);
  noStroke();
  beginShape();
  vertex(570, 722);
  vertex(590, 660);
  vertex(620, 595);
  vertex(668, 540);
  vertex(720, 510);
  vertex(770, 503);
  vertex(802, 503);
  vertex(802, 636);
  vertex(765, 636);
  vertex(745, 655);
  vertex(735, 690);
  vertex(720, 740);
  vertex(703, 774);
  endShape(CLOSE);

  // Tramo horizontal (llega hasta el borde derecho)
  fill(negro);
  rect(864, 503, 160, 133);

  // Brida
  rect(800, 502, 66, 135);


}