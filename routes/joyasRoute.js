import express from 'express';
import * as joyasController from '../controllers/joyasController.js';

const router = express.Router();

router.get('/v1/joyas', joyasController.getHATEOAS);
router.get('/v1/joyas/categoria/:categoria', joyasController.filterCategory);
router.get('/v1/joyas/filtrar/:campo', joyasController.filterJewerlyByField);
router.get('/v1/joyas/:id', joyasController.getJewerlyById);
router.get('/v1/joyas/paginar', joyasController.pageJewelry);
router.get('/v1/joyas/ordenar', joyasController.sortJewelryByValue);

export default router;

