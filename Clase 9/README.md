 ## Clase 7 de octubre

Las entradas analógicas utilizan analogRead(numeroPin) para leer valores entre 0 y 1023, por ejemplo, desde un potenciómetro o un sensor LDR, y funcionan en los pines analógicos A0 a A5. Las salidas analógicas utilizan analogWrite(numeroPin, valor) para controlar la intensidad de un LED mediante valores entre 0 y 255, en ciertos pines digitales compatibles con PWM (~)   
Las entradas digitales utilizan digitalRead(numeroPin) para leer estados de botones, mientras que las salidas digitales utilizan digitalWrite(numeroPin, variable) para controlar luces u otros componentes mediante estados de encendido y apagado (HIGH y LOW).   

### Comunicación por I2C
El I2C (Inter-Integrated Circuit o circuito integrado interconectado) es un protocolo de comunicación que permite a una placa Arduino conectarse e intercambiar datos con múltiples sensores, pantallas u otros microcontroladores usando solo dos cables. (Arduino)

Codprofe pot arduino
```json
{
  "version": 1,
  "author": "Matías Serrano",
  "editor": "wokwi",
  "parts": [
    { "type": "wokwi-arduino-uno", "id": "uno", "top": -95.4, "left": -67.8, "attrs": {} },
    {
      "type": "wokwi-potentiometer",
      "id": "pot1",
      "top": 165.3,
      "left": 125.8,
      "rotate": 180,
      "attrs": {}
    },
    {
      "type": "wokwi-led",
      "id": "led1",
      "top": -166.8,
      "left": 128.6,
      "attrs": { "color": "magenta", "flip": "1" }
    },
    {
      "type": "wokwi-resistor",
      "id": "r1",
      "top": -130.45,
      "left": 163.2,
      "attrs": { "value": "1000" }
    }
  ],
  "connections": [
    [ "pot1:VCC", "uno:5V", "red", [ "v-48", "h-56.8" ] ],
    [ "uno:GND.3", "pot1:GND", "black", [ "v57.5", "h61.6" ] ],
    [ "pot1:SIG", "uno:A0", "green", [ "v-67.2", "h-18.8" ] ],
    [ "led1:C", "r1:1", "green", [ "v0" ] ],
    [ "r1:2", "uno:GND.2", "black", [ "v240", "h-116.4" ] ],
    [ "led1:A", "uno:3", "green", [ "v19.2", "h10" ] ]
  ],
  "dependencies": {}
```
Codprofe pot arduino pantalla
```json
{
  "version": 1,
  "author": "Matías Serrano",
  "editor": "wokwi",
  "parts": [
    { "type": "wokwi-breadboard-half", "id": "bb1", "top": 237, "left": 41.2, "attrs": {} },
    { "type": "wokwi-arduino-uno", "id": "uno", "top": -37.8, "left": -39, "attrs": {} },
    {
      "type": "wokwi-potentiometer",
      "id": "pot1",
      "top": 405.3,
      "left": 97,
      "rotate": 180,
      "attrs": {}
    },
    {
      "type": "board-ssd1306",
      "id": "oled1",
      "top": 291.14,
      "left": 403.43,
      "attrs": { "i2cAddress": "0x3c" }
    }
  ],
  "connections": [
    [ "uno:5V", "bb1:tp.1", "red", [ "v47.9", "h-101.8", "v48" ] ],
    [ "uno:GND.2", "bb1:bn.1", "black", [ "v76.7", "h-120.9", "v201.6" ] ],
    [ "pot1:VCC", "bb1:tp.5", "red", [ "v0" ] ],
    [ "pot1:GND", "bb1:bn.11", "black", [ "v-9.6", "h38.4" ] ],
    [ "pot1:SIG", "uno:A0", "green", [ "v-192", "h29.2" ] ],
    [ "oled1:GND", "bb1:bn.25", "black", [ "v-19.2", "h-57.6", "v153.6" ] ],
    [ "oled1:VCC", "bb1:tp.25", "red", [ "v0" ] ],
    [ "oled1:SCL", "uno:A5", "purple", [ "v-124.8", "h-239.7" ] ],
    [ "oled1:SDA", "uno:A4", "blue", [ "v-105.6", "h-259.13" ] ]
  ],
  "dependencies": {}
}
```
### Pantalla LCD Oled Azul y Amarillo 0,96
La **pantalla OLED de 0.96"** es un módulo gráfico autoiluminado de alta visibilidad, ideal para proyectos con microcontroladores gracias a su comunicación por bus I2C y su bajo consumo energético.
#### Especificaciones Técnicas
*   **Resolución:** 128 × 64 píxeles.
*   **Tamaño:** 0.96 pulgadas (Color dividido: franja superior amarilla, sección inferior azul).
*   **Controlador:** SSD1306.
*   **Interfaz:** I2C (Dirección por defecto: `0x3C` o `0x3D`).
*   **Pines de conexión:** 4 pines (VCC, GND, SCL, SDA).
*   **Voltaje de operación:** 3.3V a 5.0V CC.
*   **Consumo de energía:** ~0.08 W (con todos los píxeles encendidos).

conversor de imágenes para pantalla https://javl.github.io/image2cpp/

