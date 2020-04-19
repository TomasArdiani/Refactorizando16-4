let express = require ('express')
let heroesController = require ('../controllers/heroesController.js')

let router = express.Router();

router.get("./heroes", heroesController.heroes);

router.get ("./heroes/detalle/:id", heroesController.detalle);


module.exports = router;

