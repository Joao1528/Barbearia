const express = require('express');
const router = express.Router();
const Produtos = require('../models/produtos');


router.post('/creates',async (req,res)=>{
    const{nome,preco} = req.body;

    const produtoExistente = await Produtos({nome});
    if(produtoExistente){
        return res.status(409).json({ message: 'Produto já cadastrado.' });
    }
    try {
        res.send("Produto Cadastro com sucesso!")
        const novoProduto = new Produtos(req.body)
        await novoProduto .save()
        
        res.status(201).send(novoProduto)
    } catch (error) {
        res.status(400).send(error);
    }
})


router.get('/:id',async(req,res)=>{
    const id = req.params.id;
    try {
        const produto = await Produtos.findOne({ _id: id });
        res.status(200).json(produto);
      } catch (error) {
        res.status(500).json({ error: error });
      }

})



router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    console.log(id);
    try {
      const produtoRemovido = await Produtos.findOneAndDelete({ _id: id });
      if (!produtoRemovido) {
        return res.status(404).json({ message: 'produto não encontrado.' });
      }
      res.status(200).json(produtoRemovido);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  
  router.patch('/:id', async (req, res) => {
    const id = req.params.id;
    try {
      const produtoAtualizado = await Produtos.findByIdAndUpdate(id, req.body, { new: true });
      if (!produtoAtualizado) {
        return res.status(404).json({ message: 'produto não encontrado.' });
      }
      res.status(200).json(produtoAtualizado);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });





module.exports = router;