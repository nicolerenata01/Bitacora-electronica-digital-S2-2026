// C++ code
//
int patitaLed = 13;
void setup(){
  // la patita 13 se va a comportar como salida
  pinMode (patitaLed, OUTPUT);
}

void loop(){
  // a en morse (.-)
  //dos argumentos: la patita, si es HIGH o LOW
  // el .
  digitalWrite(patitaLed, HIGH);
  delay(150); // Wait for 100 millisecond(s)
  digitalWrite(patitaLed, LOW);
  delay(500); // Wait for 500 millisecond(s)
  // el -
  digitalWrite(patitaLed, HIGH);
  delay(1000); // Wait for 1000 millisecond(s)
  digitalWrite(patitaLed, LOW);
  delay(500); // Wait for 500 millisecond(s)
  
  delay (100);
}