# Base datos

La base de datos usada para la consulta y guardado de datos fue firestore, un servicio brindado por firebase el cual maneja un esquema NoSQL.

## ¿Como se realiza el guardado de los datos?

Teniendo en cuenta que guardar toda la matriz ADN del sujeto en la base de datos no genera ninguna ventaja (solo se quiere saber si alguien es o no mutante) pero si genera un gran gasto de espacio (por ejemplo una matriz de 3000x3000 elementos llega a ocupar 10MB) se opta por guardar el hash de la matriz ( el cual siempre tendra un peso de 32 bytes, una mejora gigante).

Por otra parte, para el manejo de las estadisticas se tienen dos contadores, el contador de los mutantes encontrados y los que no lo son. Sin embargo a nivel de implementacion firestore posee limites para manejar las estructuras de contadores por lo que se opta por el uso de [contadores distribuidos](https://firebase.google.com/docs/firestore/solutions/counters#solution_distributed_counters)