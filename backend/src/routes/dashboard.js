const express = require('express');
const router = express.Router();

// Mock de dados - substituir pelo acesso ao banco futuramente
router.get('/', (req, res) => {
    res.json({
        vendasHoje: 1247.00,
        nfesEmitidas: 24,
        produtosCount: 58,
        estoqueBaixoCount: 5,
        vendasRecentes: [
            { nfe: "000123", cliente: "João Silva", valor: 45.90 },
            { nfe: "000122", cliente: "Maria Souza", valor: 32.50 },
            { nfe: "000121", cliente: "Carlos Oliveira", valor: 78.30 }
        ],
        itensEstoqueBaixo: [
            { nome: "Pão de Hamburguer", qtd: 5 },
            { nome: "Queijo Cheddar", qtd: 3 },
            { nome: "Bacon", qtd: 2 }
        ]
    });
});

module.exports = router;