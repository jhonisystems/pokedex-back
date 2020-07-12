import * as express from 'express';
import * as pokemonesController from '../controllers/pokemones';
import * as movimientosController from '../controllers/movimientos';
import * as tiposController from '../controllers/tipos';

const router = express.Router();
const pokemones = new pokemonesController.PokemonesController();
const movimientos = new movimientosController.MovimientosController();
const tipos = new tiposController.MovimientosController();

router.get('/pokemones', pokemones.get);
router.get('/pokemones/texto/:texto', pokemones.get);
router.get('/pokemones/:id', pokemones.getById);
router.get('/pokemones/:inicio/:fin', pokemones.getBySecuencia);
router.get('/pokemones/:inicio/:fin/:tipo', pokemones.getBySecuencia);
router.get('/movimientos', movimientos.get);
router.get('/tipos', tipos.get);

export default router;