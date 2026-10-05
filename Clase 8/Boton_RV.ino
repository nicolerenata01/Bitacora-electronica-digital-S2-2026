int pinBoton = 2; 
bool estadoBoton =  0; // bool solo puede ser 0 o 1
int pinLed = 9;
int valorPot = 0; //valorPot
int pinPot = A0; //analog in siempre son input

void setup() {
  // pin del boton es para una entrada
  pinMode(pinBoton, INPUT);
  pinMode (pinLed, OUTPUT);
}

void loop() {
  estadoBoton = digitalRead (pinBoton); 
  valorPot = 255 - (analogRead (pinPot) /4); //valor del potenciometro, div en 4 para convertir 
  // del rango 0-1023 a 0-255
 // al anteponer el 255 - invertimos el comportamiento
  analogWrite (pinLed, valorPot);
  delay (100);
}
