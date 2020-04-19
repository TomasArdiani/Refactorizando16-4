// Require de Express
const express = require('express');

// Require de FS
const fs = require('fs');

// Ejecución de Express
const app = express();

// Leyendo y parseando (en array) el contenido de heroes.json
const heroes = JSON.parse(fs.readFileSync(__dirname + '/data/heroes.json', 'utf-8'));

// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log('Server running in 3030 port'));

// conectando con main.js
let rutaMain = require ("./routes/main.js")
app.use('/', rutaMain);

// conecto con heroes.js
let rutaHeroes = require ("./routes/heroes.js")
app.use("/heroes", rutaHeroes);


/*

// Ruta /heroes/n/bio ➝ se envía la bio del héroe solicitado
app.get('/heroes/:id/bio/:ok?', (req, res) => {

	// Acá lo primero será encontrar al héroe que corresponda
	let heroe = heroes.find(h => h.id == req.params.id);

	if(!heroe) {// Si NO se encuentra al héroe se envía un mensaje
		res.send("No encontramos un héroe para mostrarte su biografía");
	}else { 	// Si se encuentra al héroe:
		if (req.params.ok!= undefined
			 && req.params.ok == 'ok'	){
				res.send(`${heroe.nombre}: ${heroe.resenia}`);
			 }else {res.send(`${heroe.nombre}: "Lamento que no desees saber más de mi :("`);
			}
		}

});
*/
// Ruta... ¿Pára qué sirve esto?
app.get('*', (req, res) => {
	res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});

// Ruta Créditos
app.get('/creditos', (req,res)=>{
    res.send('Credito de las y los developers.');
})
