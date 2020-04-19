

let heroesController = {
    heroes : function(req,res) {
        res.send(heroes)
    },
    detalle : function(req,res) {
        // Ruta /heroes/n ➝ se envía el nombre y profesión del héroe solicitado
        let heroe = heroes.find(x => x.id == req.params.id);
            if (heroe){ // Si se encuentra al héroe se envía el nombre y su profesión
		        res.send(`Hola, mi nombre es ${heroe.nombre} y soy ${heroe.profesion}`);

	        } else {//SiNO se encuentra se envía el mensaje de no encontrado
		        res.send("No se encontro a ese heroe")};
    }

};

module.exports = heroesController;