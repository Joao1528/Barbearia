const express = require('express');
const router = express.Router();
const Cliente = require ('../models/cliente')

router.post('/cadastro', async (req, res) => {
  try {
    const { nome, telefone, email, senha } = req.body;

    // Verifica se o email já existe no banco de dados
    const existingCliente = await Cliente.findOne({ email });
    if (existingCliente) {
      return res.status(409).json({ error: 'Este email já está cadastrado' });
    }

    // Cria um novo cliente
    const cliente = new Cliente({ nome, telefone, email, senha });
    await cliente.save();

    // Retorna o novo cliente para o cliente
    res.json(cliente);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao cadastrar o cliente' });
  }
});

router.get('/:id', async (req, res) => {
  const _id = req.params.id;

  try {
    const cliente = await Cliente.findById(_id);

    if (!cliente) {
      return res.status(404).send();
    }

    res.send(cliente);
  } catch (error) {
    res.status(500).send();
  }
});

router.get('/teste', async (req, res) => {
  try {
    const clientes = await Cliente.find({});
    res.status(200).send(clientes);
  } catch (error) {
    res.status(500).send(error);
  }
});


module.exports = router;
