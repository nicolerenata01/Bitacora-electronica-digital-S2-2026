int patitaLed = 9;
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

void s (){
punto (); punto (); punto();
}

void o (){
guion(); guion(); guion();
}

void setup(){
  pinMode (patitaLed, OUTPUT);
}

void loop(){
  s ();
  o ();
  s ();
  delay (100); //para cerrar la letra
}


