# Estructura del proyecto
 
En esta sección se pretende realizar un descripción de cuál es la funcionalidad de cada carpeta en el proyecto y finalmente explicar el flujo de este.
 
## Carpetas
 
- `docs/` Aquí residen todos los archivos de documentación que redirige el README
 
- `services/` La lógica de la aplicación, aquí se encuentra el algoritmo que se encarga de buscar mutantes.
 
- `test/` Como su nombre lo indica aquí se encuentra lo relacionado a el testing, en `/test/dataTesting/` se encuentran los datos empleados para pruebas con matrices numerosas
 
- `utils/` Herramientas desarrolladas para pruebas más eficientes como la generación de matrices de ADN grandes y conversión a JSON
 
- `build/` Esta carpeta aparecerá solo si se generan matrices de prueba (si desea probar, ejecutar `npm run genData`, y esto generará varias matrices en build/)
 
## Flujo del proyecto
 
En el archivo index.js se encuentra la definicion de la ruta /mutants/ ([sintaxix de GCP](https://firebase.google.com/docs/functions/get-started#add-the-addmessage-function)), la cual una vez es llamada lo que hará es utilizar el servicio que valida si el ADN ingresado es o no mutante, se analiza la respuesta y se retorna el código de error de acuerdo a la respuesta

