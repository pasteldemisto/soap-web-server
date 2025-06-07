import express from 'express';

import {
    listarTarefas,
    criarTarefa,
    obterTarefa,
    atualizarTarefa,
    deletarTarefa
} from '../controllers/TarefaController.js';


const router = express.Router();

router.get('/listarTarefas', listarTarefas);
router.post('/criarTarefa', criarTarefa);
router.get('/obterTarefa/:id', obterTarefa);
router.put('/atualizarTarefa/:id', atualizarTarefa);
router.delete('/deletarTarefa/:id', deletarTarefa);

export default router;