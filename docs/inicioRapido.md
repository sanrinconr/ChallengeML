# Inicio rapido
## Comprobando un ADN

Enviar una solicitud POST a 
```
https://us-central1-challengeml-8e9b9.cloudfunctions.net/mutant
```

Con los datos:
```JSON
{
    "dna":[
    "ATCGATCG",
    "GCTAGCTA",
    "ATCGATCG",
    "GCTAGCTA",
    "ATCGATCG",
    "GCTAGCTA",
    "ATCGATCG",
    "GCTAGCTA"
    ]
}
```
El codigo HTTP recibido es 403 FORBIDDEN ya que no es un mutante.

Si no se tiene a la mano ninguna aplicacion para realizar testing de API se puede utilizar [apitester.com](https://apitester.com/) y asi realizar una prueba rapida.


