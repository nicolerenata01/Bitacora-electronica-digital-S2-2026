int pinBoton = 2; 
bool estadoBoton =  0; // bool solo puede ser 0 o 1
int pinLed = 9;
int valorRandom = 0; // aleatorio

void setup() {
  // pin del boton es para una entrada
  pinMode(pinBoton, INPUT);
  pinMode (pinLed, OUTPUT);
}

void loop() {
  estadoBoton = digitalRead (pinBoton); 
  valorRandom = random (0, 255);
  if (estadoBoton == HIGH) { //condicion
  analogWrite (pinLed, valorRandom);
  } else{
    analogWrite (pinLed, 0);
  }
  delay (100);
}
