int pinBoton = 2; 
bool estadoBoton =  0; // bool solo puede ser 0 o 1
int pinLed = 13;

void setup() {
  // pin del boton es para una entrada
  pinMode(pinBoton, INPUT);
  pinMode (pinLed, OUTPUT);
}

void loop() {
  estadoBoton = !digitalRead (pinBoton); //lee el estado del boton
  //con el ! puedo hacer lo opuesto, operador not 
  digitalWrite(pinLed, estadoBoton);
}
