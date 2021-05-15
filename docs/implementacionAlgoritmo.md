# Consigna
Magneto quiere reclutar la mayor cantidad de mutantes para poder luchar
contra los X-Men. Te ha contratado a ti para que desarrolles un proyecto que detecte si un humano es mutante basándose en su secuencia de ADN.
 
Para eso te ha pedido crear un programa con un método o función con la siguiente firma (En
alguno de los siguiente lenguajes: Java / Golang / C-C++ / Javascript (node) / Python / Ruby):
 
En donde recibirás como parámetro un array de Strings que representan cada fila de una tabla de
(NxN) con la secuencia del ADN. Las letras de los Strings solo pueden ser: (A,T,C,G), las cuales
representan cada base nitrogenada del ADN.
 
Sabrás si un humano es mutante, si encuentras más de una secuencia de cuatro letras
iguales, de forma oblicua, horizontal o vertical.
 
##### Ejemplo (Caso mutante)
String[] dna = {"ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"};
En este caso el llamado a la función isMutant(dna) devuelve “true”.
 
# Implementación
### Contenido
**[¿Qué elementos se deben verificar?](#¿Qué-elementos-se-deben-verificar?)**<br>
**[¿Cómo realizar el recorrido?](#¿Cómo-realizar-el-recorrido?)**<br>
**[¡Resultados!, no muy buenos](#¡Resultados!,-no-muy-buenos)**<br>
**[Una mejora al algoritmo](#Una-mejora-al-algoritmo)**<br>
**[¿Se puede mejorar el algoritmo a O(n)?](#¿Se-puede-mejorar-el-algoritmo-a-O(n)?)**<br>
**[Alternativas](#Alternativas)**<br>
### ¿Qué elementos se deben verificar?
¿Estando en la posición inicial de la matriz (0,0) cuales son los posibles candidatos para verificar mutación?, la línea vertical, horizontal y diagonal del tablero, así:
 
![Primer acercamiento](https://firebasestorage.googleapis.com/v0/b/challengeml-8e9b9.appspot.com/o/1primeraAproximacion.svg?alt=media)
 
Si se avanza a la siguiente fila ocurrirá lo mismo, se debe buscar en cada recta mencionada.
 
Sin embargo al hacer esto se deja de lado la línea perpendicular a la diagonal, así entonces se debe agregar una linea mas, de modo que las verificaciones serán:
 
![Nueva recta](https://firebasestorage.googleapis.com/v0/b/challengeml-8e9b9.appspot.com/o/2pimeraAproximacionSegundo.svg?alt=media)
 
Entonces se tiene el primer objetivo: recorrer todas las rectas mencionadas
 
### ¿Cómo realizar el recorrido?
 
Ya que emplear ciclos anidados para cada recta haría muy costoso la búsqueda (O(n^4)) entonces se pueden usar punteros, así pues, si se puede recorrer toda la recta horizontal con las variables [i,j] en este mismo paso entonces se puede inferir que:
 
- La línea vertical será ( j,i )
- La línea diagonal (amarilla) será ( j + i , j )
- La línea diagonal (roja) será ( j, n - 1 - j + i ) donde n es la longitud de la matriz
 
### ¡Resultados!, no muy buenos
Con esta idea se obtienen las rectas y al final de cada iteración se verifica si es o no mutante (la recta), así el tiempo el tiempo de ejecución se ve reducido a:
 
- O(n^3), por una parte se tiene que recorrer la matriz, lo que tiene un costo de O(n^2) pero también se debe de realizar la verificación de las 6 rectas lo cual es O(n) (esto se logra usando el mismo índice para las 6).
 
### Una mejora al algoritmo
Este orden no es para nada deseable, ¿así que como mejorar el rendimiento?.
 
¡Utilizando un memorizador!, ¿qué es eso? un string que va guardando las palabras repetidas, eliminando la tarea de tener que verificar al final, un ejemplo será más claro.
 
Teniendo en cuenta esta matriz y sus valores en la diagonal, se parte de un memorizador vacio asi:
 
![Nueva recta](https://firebasestorage.googleapis.com/v0/b/challengeml-8e9b9.appspot.com/o/3diagonalLlena1.svg?alt=media)
 
Cuando se empiece a recorrer la recta se irán agregando elementos, en el primer caso, la A, como el memorizador está vacío, se agrega
 
![Primer elemento](https://firebasestorage.googleapis.com/v0/b/challengeml-8e9b9.appspot.com/o/3diagonalLlena2.svg?alt=media)
 
Luego viene la letra G, ya que en el memorizador no hay una G entonces este se limpia y se mete la G.
 
![Segundo elemento](https://firebasestorage.googleapis.com/v0/b/challengeml-8e9b9.appspot.com/o/3diagonalLlena3.svg?alt=media)
 
Aquí viene la "magia", el siguiente elemento es una G, así que el memorizador no se limpia (existe una G por lo que coincide) quedando así:
 
![tercer elemento](https://firebasestorage.googleapis.com/v0/b/challengeml-8e9b9.appspot.com/o/3diagonalLlena4.svg?alt=media)
 
¿Luego que pasara?. ¡Viene otra G!, así que el memorizador tampoco se limpiara:
 
![cuarto elemento](https://firebasestorage.googleapis.com/v0/b/challengeml-8e9b9.appspot.com/o/3diagonalLlena5.svg?alt=media)
 
¡El ultimo elemento!, una A, ¿qué ocurre aquí?, pues como A no es un elemento repetido del memorizador (La G) entonces se limpiara:
 
![quinto elemento](https://firebasestorage.googleapis.com/v0/b/challengeml-8e9b9.appspot.com/o/3diagonalLlena6.svg?alt=media)
 
 
¿Qué pasó en todo este proceso?, ¡que por una letra estuvimos a punto de descubrir un mutante!, pero además de ello se evidencia que a medida que se va avanzando, ¡se va a haciendo la verificación! (cuando el memorizador tenga 4 letras, un mutante ha sido detectado).
 
Y esto es una excelente noticia porque ya no se tiene que "guardar y verificar" cada posible arreglo (horizontal, vertical, diagonales) al final del recorrido. Pero, ¿de qué sirve esto? Con esto se logra reducir el tiempo de ejecución! (se elimina el trabajo de la validación de las rectas encontradas que era O(n)).
 
Así entonces con esta idea se pasa del O(n^3) visto anteriormente a un orden de O(n^2), ¡lo cual es una mejora sustancial!.
 
### ¿Se puede mejorar el algoritmo a O(n)?
 
Mi respuesta es que no (aunque puede que sí exista la implementación) debido a dos ideas:
 
- Asumiendo que únicamente se requiriera la verificación horizontal la matriz se podría recorrer en O(n) (solo recorrer filas), pero se debería encontrar un algoritmo que verifique si un string es o no mutante en tiempo O(1), algoritmo que aún no se descubre (uno de los mejores en búsqueda de cadenas es de orden n , [Boyer-Moore](https://es.wikipedia.org/wiki/Algoritmo_de_b%C3%BAsqueda_de_cadenas_Boyer-Moore)), por lo que vuelve y se requiere O(n^2), y eso que son solo las horizontales!.
 
- Las verificaciones que no sean la horizontal requieren que la matriz sea recorrida a lo alto y a lo ancho y debido a esta doble dimensionalidad dos punteros son requeridos, en otras palabras, recorrer una matriz conlleva a O(n^2) por lo que no es posible una solucion mas eficiente (usando este enfoque)
 
### Alternativas
 
Si se quiere reducir el orden de este algoritmo se debe optar si o si por un enfoque que no implique recorrer la matriz en su totalidad, una opcion podria ser una implementación de "divide y vencerás", algoritmo que seguramente resultará en O(n*logn) pero que hasta el momento no he podido implementar.
 
 
## Nota sobre implementación de diagonales
 
En el código se puede observar que hay una diagonal inferior y superior (actualIDinf y actualIDsup) estas dos diagonales nacen por que con solo una solo se puede recorrer medio tablero así:
 
![Nota 1](https://firebasestorage.googleapis.com/v0/b/challengeml-8e9b9.appspot.com/o/4Nota1.svg?alt=media)
 
Generando el problema de que los cuadros blancos no son verificados nunca.
 
La solución es crear una nueva diagonal que sea el espejo de la actual así:
 
![Nota 2](https://firebasestorage.googleapis.com/v0/b/challengeml-8e9b9.appspot.com/o/4Nota2.svg?alt=media)
 
Lo mismo aplica para diagonal paralela y así entonces se tiene todo el tablero recorrido con las diagonales.
 
Esto no afecta el rendimiento del programa.