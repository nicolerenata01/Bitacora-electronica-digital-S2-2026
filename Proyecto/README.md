#### Descripción formal de lo que quieren hacer (1 párrafo):   
El proyecto consiste en la construcción de un dispositivo que transforma el goteo de agua en una representación visual asemejando un cauce, generada en tiempo real. Mediante un sistema de dos recipientes, uno arriba que actúa por gravedad como una torre de agua, el agua cae de manera intermitente sobre un contenedor receptor, donde los impactos producen variaciones sonoras que son captadas por un micrófono MAX4466 (idealmente que luego sea un sistema donde el agua pase en dos electrodos o trozos de cobre que actúen como interruptor). La señal es recibida por un Arduino y posteriormente enviada a P5.js, donde se traduce en parámetros gráficos que permiten construir progresivamente una forma de río. La intensidad sonora modifica la amplitud y curvatura de los trazos, de este modo, la imagen no se encuentra previamente definida, sino que aparece y se transforma a medida que ocurre el goteo.
![img](ruta_o_url_de_la_imagen)    

#### Conceptualización (1 párrafo):   
La obra parte de una pregunta presente en mi proyecto de egreso, cómo percibimos el agua cuando la conocemos a través de sistemas que la miden, registran y representan, es una pregunta que también se extiende a nuestra manera de relacionarnos con la naturaleza.
Este dispositivo aborda esa inquietud desde una escala mínima. Una gota cae, impacta sobre una superficie o recipiente y produce un sonido. Un sensor capta las variaciones sonoras y envía una señal a Arduino, donde es procesada para obtener valores que posteriormente son interpretados por P5.js.  A partir de este goteo, P5 irá agregando nuevos fragmentos a una línea que se va construyendo progresivamente, gota a gota, el dibujo se acumula hasta formar una trayectoria que reconocemos como un río.
Me interesa observar cómo un acontecimiento físico, aparentemente pequeño y cotidiano, puede ser capturado y transformado en información para adquirir una nueva forma de representación. El dibujo surge de la sucesión de impactos y de las reglas establecidas para traducir sus variaciones en parámetros gráficos.
 
#### Diagrama de flujo (con sensores y actuadores):   
#### Dibujo esquemático (cómo va conectado al Arduino):
#### Boceto de instalación. Ojalá tenga escala, referencias, sitio en la sala, sensores y actuadores: 
