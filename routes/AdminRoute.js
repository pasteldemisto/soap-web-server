import express from 'express';

import{
    criarAdmin,
    deletarAdmin,
    atualizarAdmin
} from '../controllers/AdminController.js';

const router = express.Router();

router.post('/criarAdmin', criarAdmin);
router.delete('/deletarAdmin/:id', deletarAdmin);
router.put('/atualizarAdmin/:id', atualizarAdmin);

export default router;