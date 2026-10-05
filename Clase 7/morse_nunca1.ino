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

void n (){
guion (); punto ();
}

void u (){
punto (); punto (); guion();
}

void c(){
guion (); punto (); guion (); punto ();
}

void a(){
punto(); guion();
}

void h (){
punto(); punto(); punto(); punto();
}
  
void b (){
guion(); punto();punto();punto();
}

void i (){
punto(); punto();
}

void v (){
punto(); punto();punto(); guion ();
}

void s (){
punto(); punto(); punto();
}

void t (){
guion ();
}

void o (){
guion (); guion (); guion ();
}

void j (){
punto(); guion (); guion (); guion ();

}


void setup(){
  pinMode (patitaLed, OUTPUT);
}

void loop(){
  n ();
  u ();
  n ();
  c ();
  a ();
  h ();
  a ();
  b ();
  i ();
  a ();
  v ();
  i ();
  s ();
  t ();
  o ();
  t ();
  a ();
  n ();
  t ();
  a ();
  c ();
  a ();
  c ();
  a ();
  j ();
  u ();
  n ();
  t ();
  a ();
  delay (100); //para cerrar la letra
}


