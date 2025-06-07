import express from 'express';

import {
    listarProdutos,
    criarProduto,
    obterProduto,
    atualizarProduto,
    deletarProduto,
    atualizarEstoque
} from '../controllers/ProductController.js';

const router = express.Router();

router.get('/listarProdutos', listarProdutos);
router.post('/criarProduto', criarProduto);
router.get('/obterProduto/:id', obterProduto);
router.put('/atualizarProduto/:id', atualizarProduto);
router.delete('/deletarProduto/:id', deletarProduto);
router.put('/atualizarEstoque/:id', atualizarEstoque);

export default router;