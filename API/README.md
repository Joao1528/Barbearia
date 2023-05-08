
# Projeto Barbearia

## Nesse código foi desenvolvido uma API de agendamentos em nodejs e mongoDB

### Para rodar este código, você precisará instalar o Node.js e o gerenciador de pacotes npm (ou yarn) no seu computador. Além disso, você precisará ter um banco de dados MongoDB configurado e em execução.

### você precisará instalar as seguintes dependências:

+	express: framework web para o Node.js
+	mongoose: biblioteca para modelagem de objetos MongoDB para Node.js
+	nodemon (opcional): utilitário que ajuda a desenvolver aplicativos baseados em node.js reiniciando automaticamente o aplicativo quando mudanças de arquivo no diretório são detectadas

+ Realizar as mudanças necessárias em api.js para conectar no seu mongoDB de acordo como foi configurado

### Depois que o servidor estiver em execução, você pode enviar solicitações HTTP para as rotas usando um cliente HTTP, como o Postman, para testar a funcionalidade do código.

#### A api conta com as seguintes rotas

* Rota para criar um novo agendamento: esta rota espera um método HTTP POST com as informações do agendamento (nome, e-mail, telefone, data, horário e serviço) no corpo da requisição (req.body). Antes de criar um novo agendamento, a rota verifica se já existe um agendamento com o mesmo e-mail ou no mesmo horário e data. Caso exista, a rota retorna uma resposta com o status HTTP 409 (conflito) e uma mensagem de erro. Caso contrário, um novo agendamento é criado e salvo no banco de dados. Se a operação de criação do agendamento for bem-sucedida, a rota retorna uma resposta com o status HTTP 201 (criado) e as informações do agendamento criado. Se ocorrer algum erro na criação do agendamento, a rota retorna uma resposta com o status HTTP 400 (bad request) e uma mensagem de erro.

+ Rota para consultar agendamento: esta rota espera um método HTTP GET com o ID do agendamento a ser consultado como parâmetro na URL (req.params.id). A rota busca o agendamento no banco de dados com base no ID fornecido. Se o agendamento for encontrado, a rota retorna uma resposta com o status HTTP 200 (ok) e as informações do agendamento. Caso contrário, a rota retorna uma resposta com o status HTTP 500 (internal server error) e uma mensagem de erro.

+ Rota para remover agendamento (/:id): esta rota espera um método HTTP DELETE com o ID do agendamento a ser removido como parâmetro na URL (req.params.id). A rota busca o agendamento no banco de dados com base no ID fornecido e remove-o. Se a operação de remoção for bem-sucedida, a rota retorna uma resposta com o status HTTP 200 (ok) e as informações do agendamento removido. Se o agendamento não for encontrado, a rota retorna uma resposta com o status HTTP 404 (not found) e uma mensagem de erro. Se ocorrer algum outro erro na operação de remoção, a rota retorna uma resposta com o status HTTP 500 (internal server error) e uma mensagem de erro.

+ Rota para alterar o agendamento: esta rota espera um método HTTP PATCH com o ID do agendamento a ser atualizado como parâmetro na URL (req.params.id) e as informações atualizadas do agendamento no corpo da requisição (req.body). A rota busca o agendamento no banco de dados com base no ID fornecido e atualiza as informações do agendamento com as informações fornecidas. Se a operação de atualização for bem-sucedida, a rota retorna uma resposta com o status HTTP 200 (ok) e as informações do agendamento atualizado. Se o agendamento não for encontrado, a rota retorna uma resposta com o status HTTP 404 (not found) e uma mensagem de erro. Se ocorrer algum outro erro na operação de atualização, a rota retorna uma resposta com o status HTTP 500 (internal server error) e uma mensagem de erro

