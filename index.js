/**
 * Este es el fichero index.js donde empieza 
 * siempre la magia de NodeJS
 * ---------------------------------------------------------
 * 1. Los paquetes
 * ---------------------------------------------------------
 * Lo primero que hacemos es obtener todos aquellos paquetes 
 * que vamos a necesitar para crear nuestra API.
 * 
 * Aquí estoy cargando los paquetes que creo que vas a necesitar
 * para desarrollar tu API, si necesitas más o menos, este 
 * es un buen sitio para buscarlo.
 * 
 * Si cuando ejecutes tu script, tienes problemas para que NodeJS
 * encuentre estos paquetes, RECUERDA las lección de NPM
 */
var fs = require('fs');
var express = require('express');
var app = express();

/**
 * 2. Los middlewares
 * ---------------------------------------------------------
 * Lo siguiente que hacemos es configurar los middleware
 * Yo he añadido este. Este middleware se encarga de servir 
 * ficheros estáticos por nosotros. 
 * 
 */
app.use(express.static('front/dist'));

/**
 * 3. Las llamadas a la API
 * ---------------------------------------------------------
 * Ahora tenemos que configurar las dos llamadas a la API
 * RECUERDA que los requisitos eran crear dos rutas de tipo
 * GET:
 *  -   /adventures/characters = devuelve todos los personajes
 *  -   /adventures/characters/id = devuelve el personaje con el id indicado
 * 
 * ELEMENTOS QUE QUIZÁ NECESITES:
 *  -   fs
 *  -   JSON.parse
 *  -   utf8
 *  -   __dirname
 */
app.get('/api/adventures/characters', function (req, res) {
    fs.readFile(__dirname + '/data/adventures.json', 'utf8', function (error, adventures) {
        if (error) {
            console.log(error);
            res.status(400).json({ message: 'No es posible obtener los personajes de hora de aventuras' });
        }

        res.status(200).json(JSON.parse(adventures));
    });
});

app.get('/api/adventures/characters/:id', function (req, res) {
    fs.readFile(__dirname + '/data/adventures.json', 'utf8', function (error, adventures) {
        if (error) {
            console.log(error);
            res.status(400).json({ message: 'No es posible obtener el personaje de hora de aventuras' });
        }

        var characters = JSON.parse(adventures);
        var character = characters.find((character) => character.id === req.params.id);

        res.status(200).json(character);
    });
});

/**
 * En esta parte del código tenemos que hacer que 
 * nuestra aplicación se encuentre escuchando en
 * el puerto 300
 */
app.listen(3000, function () {
    console.log('API escuchando en el puerto 3000');
});