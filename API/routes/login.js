const express = require('express');
const router = express.Router();
const Cliente = require('../models/cliente')

router.post('/login', async (req, res) => {
  try {
    const { email, senha } = req.body;
    const cliente = await Cliente.findOne({ email, senha });
    if (!cliente) {
      return res.status(401).send('Email ou senha incorretos');
    }
    res.send({ _id: cliente._id, nome: cliente.nome, email: cliente.email, senha: cliente.senha,telefone : cliente.telefone });
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao fazer login');
  }
});



module.exports = router;
