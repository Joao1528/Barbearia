const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();
const agendamentoRoutes = require('./routes/agendamento');
const produtosRoutes = require('./routes/produtos')
const loginRoutes = require('./routes/login')
const cadastroRoutes = require('./routes/cadastro')
const barbeariaRoutes = require('./routes/barbearia')
const servicoRoutes = require('./routes/servico_barbearia')





mongoose.connect('mongodb+srv://Joao:Joao123456@apicluster.rqervy6.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(cors({origin: "*"}));
app.use('', agendamentoRoutes);
app.use('/produtos', produtosRoutes);
app.use('/login',loginRoutes)
app.use('/cadastro',cadastroRoutes)
app.use('/barbearia', barbeariaRoutes);
app.use('/servicos', servicoRoutes);


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

