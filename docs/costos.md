# Costos

La infraestructura de google posee ciertos costos, entre los cuales se encuentran el costo de invocacion de las funciones de google y las operaciones a la base de datos (lectura y escritura)

## Registro de un ADN

Cuando se registra un ADN se realiza:

- 1 Invocacion a google cloud functions
- 1 operacion de lectura (para verificar que si el ADN ya existe)
- 1 Operacion de escritura (Para guardar el hash del ADN)
- 1 operacion de escritura (Para aumentar el contador de ADN)

## Consulta de estadisticas

Sorprendentemente la consulta de las estadisticas es el rubro mas costoso del proyecto debido a la utilizacion de [contadores distribuidos](https://cloud.google.com/firestore/docs/solutions/counters?hl=es-419).

Teniendo en cuenta un escenario practico, el analisis de ADN se realizara intensivamente, sin embargo la consulta de estadisticas tendra un ritmo mas tranquilo, para este caso se asume una intensidad de consulta de estadisticas de 100 consultas por segundo. Asi pues seran requeridas 100 lecturas por cada peticion de lectura requerida, asi pues:

Cuando se realiza una consulta a /stats se realizan:

- 100 consultas de lectura

## ¡Precios!

Teniendo en cuenta distintos casos de uso los precios seran:

- Si al dia se agregan en promedio un millon de ADNs y se realizan 3.000 consultas el precio es de `$7,67`

- Si al dia se agregan en promedio 5 millones de ADNs y se realizan 100.000 consultas el precio es de `$41,79`

- Si al dia se agregan en promedio 50 millones de ADNs y se realiza un millon de consultas el precio es de `$417,88`

## Detalle de los calculos

Si estas interesado en el detalle de como se calcularon los costos se puede observar una hoja de calculo con los detalles [aqui](https://firebasestorage.googleapis.com/v0/b/challengeml-8e9b9.appspot.com/o/Costos%20Mutantes%20ADN.pdf?alt=media)

Adicionalmente la documentacion de precios directamente de google siempre esta disponible

- [Google cloud functions](https://cloud.google.com/functions/pricing)
- [Precios firestore](https://firebase.google.com/docs/firestore/pricing?hl=es-419)