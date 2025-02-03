//Importando o servidor    
const express = require('express')

//Inicializando o servidor
const app = express()

//Definir a porta que o servidor irá rodar
const port = 3000

//rota raiz
app.get('/', (requisicao, resposta) => {
  resposta.send('Raiz do servidor')
})

//rota /hello
app.get('/hello', (requisicao, resposta) => {
    resposta.send('Hello World!')
})
//Ouvindo a porta 3000 e exibindo uma mensagem

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost${port}`)
})