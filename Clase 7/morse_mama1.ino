int patitaLed = 9; //cambio al pin 9
void setup(){
  // la patita 13 se va a comportar como salida
  pinMode (patitaLed, OUTPUT);
}

void loop(){
  // a en morse (.-)
  // m (--)
  //dos argumentos: la patita, si es HIGH o LOW
  guion (); guion();
  punto (); guion();
  guion (); guion();
  punto (); guion();
  delay (100); //para cerrar la letra
}


void punto(){
  //esta funcion va a escribir un punto
  digitalWrite(patitaLed, HIGH);
  delay(100); 
  digitalWrite(patitaLed, LOW);
  delay(500); 
}

void guion (){
  // funcion que escribe el guion
   digitalWrite(patitaLed, HIGH);
  delay(1000); 
  digitalWrite(patitaLed, LOW);
  delay(500); 
}