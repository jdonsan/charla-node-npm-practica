# Práctica de apoyo a la Masterclass sobre NodeJS y NPM

## Objetivos

* Primer contacto instalando dependencias con NPM
* Primer contacto desarrollando y ejecutando Node
* Primer contacto con librerías como Express para hacer APIS

## Requisitos de la práctica

* Hay una aplicación front que necesita obtener y enviar datos a una API para funcionar correctamente. 
* El ejercicio consta de dos servicios a los que tendremos que responder. La API que hay que crear es:

1. [GET] - 200 - /api/adventures/characters - devuelve todos los personajes de hora de aventuras del fichero /data/adventures.json
2. [GET] - 200 - /api/adventures/characters/:id - devuelve el personaje del fichero /data/adventures.json con el id que se indique

* Hay que devolver un codigo 200 si todo ha ido correctamente y un 400 si no ha ido correctamente
* Los datos se tienen que devolver en formato JSON

## FAQ

### ¿Cómo se dónde tengo que incluir cosas en el código?

Con lo visto en la sesión, es posible desarrollar todo lo necesario para la API.
Como es entendible que todavía no se tenga soltura, se han ido dejando comentarios
a modo de guía para ayudar.

### Mi aplicación Web no funciona ¿Tengo que desarrollar algo en el front?

No. El front está pensando para obtener información de las API que se han puesto
como requísito. Es importante ceñirse a los requisitos para que el ejercicio funcione

### Si ya se usar algo de Node y me siento más cómoda con otros módulos de NPM ¿Puedo usarlos?

Sin problemas. El ejercicio está pensado para afianzar conceptos y mejorar los mecanismos en los 
que se trabaja con Node y NPM. Los requisitos son esos y el desarrollo tuyo.

### ¿Cómo se ejecuta la aplicación?

Colocándonos en un terminal dentro del proyecto y lanzando el comando:

```
node index
```

## Estructura del proyecto

| - charla-node-npm-practica: carpeta raíz
| ---- data: json con los datos que tenemos que enviar al navegaor
| ---- front: parte front de la práctica. (no hace falta que toquemos nada aquí)
| ---- index.js: fichero donde desarrollaremos la API de NodeJS
| ---- package.json: fichero con metainformación del proyecto