# Estructura del proyecto
 
En esta sección se pretende realizar un descripción de cuál es la funcionalidad de cada carpeta en el proyecto y finalmente explicar el flujo de este.
 
## Carpetas
 
- `docs/` Aquí residen todos los archivos de documentación que redirige el README
 
- `services/` La lógica de la aplicación, aquí se encuentra el algoritmo que se encarga de buscar mutantes.
 
- `test/` Como su nombre lo indica aquí se encuentra lo relacionado a el testing, en `/test/dataTesting/` se encuentran los datos empleados para pruebas con matrices numerosas
 
- `utils/` Herramientas desarrolladas para pruebas más eficientes como la generación de matrices de ADN grandes y conversión a JSON
 
Los siguientes espacios se generaran condicionalmente

- `build/` En esta carpeta se guardaran las matrices de prueba (si desea probar y generarlas, ejecutar `npm run genData`, y esto generará varias matrices, de 8x8, 100x100, 1000x1000 y 3000x3000)

- `coverage/` Una vez se ejecutan los tests (`npm test`) se genera el reporte de cobertura, para visualizar los resultados abrir con un navegador el archivo `coverage/index.html`

- `testReport/` Reporte de los tests realizados (realizar tests ejecutando `npm test`), para visualizar los resultados abrir con un navegador el archivo `testReport/mochaawesome.html`
 
## Flujo del proyecto
 
En el archivo index.js se encuentra la definicion de la ruta /mutants/ ([sintaxix de GCP](https://firebase.google.com/docs/functions/get-started#add-the-addmessage-function)), la cual una vez es llamada lo que hará es utilizar el servicio que valida si el ADN ingresado es o no mutante, se analiza la respuesta y se retorna el código de exito o error de acuerdo a la respuesta


[Volver al readme principal](../README.md#Documentación)

