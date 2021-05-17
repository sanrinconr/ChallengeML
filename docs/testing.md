# Testing
 
Para realizar el testing se empleó mocha como herramienta de testing junto a chai, una librería de aserciones y finalmente la librería supertest la cual tiene por objetivo realizar pruebas a nivel de HTTP.
 
## ¿Que se está testeando?
 
- El algoritmo, para ello se hace el testing de todas las posibilidades de la matriz (`ADNService.test.js`)
- Api, se valida que se reciban los códigos de error o éxito correctos (`mutantsApi.test.js`)
- Ingreso a la base de datos, un mini-test que agrega 10 elementos a la base de datos (`db.test.js`)
 
## Reportes
 
Al realizar `npm test`, se generan dos reportes:
 
- Cobertura: Resultado de la cobertura de los test del algoritmo (`coverage/index.html`)
- Reporte general:  Resultado de todos los test realizados (`testReport/mochaawesome.html`)
 
** Abrir con el navegador **


