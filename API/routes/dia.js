const express = require('express');
const router = express.Router();
const { Dia, Hora } = require('../models/dia');

router.post('/novaDia', async (req, res) => {
  try {
    const dia = new Dia(req.body);
    await dia.save();
    res.status(201).send(dia);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post('/novaHora', async (req, res) => {
  try {
    const hora = new Hora(req.body);
    await hora.save();
    res.status(201).send(hora);
  } catch (error) {
    res.status(400).send(error);
  }
});



router.get('/dias', async (req, res) => {
  try {
    const dias = await Dia.find({});
    res.status(200).send(dias);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/hora', async (req, res) => {
  try {
    const horas = await Hora.find({});
    res.status(200).send(horas);
  } catch (error) {
    res.status(500).send(error);
  }
});


module.exports = router;