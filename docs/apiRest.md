# API REST

La api emplea la infraestructura de Google cloud platform (GCP), mas especificamente la implementacion de funciones las cuales tienen un enfoque orientado a los micro servicios.

## Endpoints

Actualmente la api cuenta con un endpoint

- `/mutant/` el cual es el encargado de validar si el ADN de entrada es o no un mutante

## Detalle documentacion

Para ver mas claramente el funcionamiento del endpoint y algunos casos de uso de ejemplo, se opto por realizar la documentacion detallada con postman, la cual puede ser encontrada [aqui](https://documenter.getpostman.com/view/12569393/TzRVg7FW).

En caso de tener algun problema, ingresar directamente a:

- [documenter.getpostman.com/view/12569393/TzRVg7FW](https://documenter.getpostman.com/view/12569393/TzRVg7FW)

## Limitaciones

Google cloud functions impone un [limite de recursos](https://firebase.google.com/docs/functions/quotas#resource_limits), por lo que el tamaño de cada solicitud no puede superar los 10MB, lo cual genera el limite de que el tamaño maximo de la matriz enviada debe ser de aproximadamente 3000x3000 elementos (3162 es el valor exacto), en caso de sobrepasar estos limites se retornara un codigo de error HTTP 412 Request entity too large