import { Router } from 'express'

const router = Router();
import * as detallectr from '../controllers/detalle.controller'
const { checkToken } = require('../auth/token_validation');

router.get('/' ,checkToken, detallectr.readAllDetalle);
router.get("/:dni" ,checkToken, detallectr.readMatriculaxalumno);


export default router;