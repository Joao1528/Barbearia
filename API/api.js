const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')


const app = express();
const agendamentoRoutes = require('./routes/agendamento');

const loginRoutes = require('./routes/login')
const cadastroRoutes = require('./routes/cadastro')
const barbeariaRoutes = require('./routes/barbearia')
const servicoRoutes = require('./routes/servico_barbearia')
const diaRouter = require('./routes/dia')




// Conectar com o banco
mongoose.connect('mongodb+srv://Joao:Joao123456@apicluster.rqervy6.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middlewares
app.use(express.json());
app.use(cors({origin: "*"}));



// Rotas
app.use('', agendamentoRoutes);
app.use('',loginRoutes)
app.use('/cadastro',cadastroRoutes)
app.use('/barbearia', barbeariaRoutes);
app.use('/servicos', servicoRoutes);
app.use('/dias', diaRouter);


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

