// importando um servidor
const express = require('express')

//inicializando o servidor
const app = express()
//Porta que o servidor ira rodar
const port = 3000

//Rota principal
app.get('/', (requisicao, resposta) => {
  resposta.send('Raiz do servidor')
})

// rota / hello
app.get('/hello', (requisicao, resposta) => {
    resposta.send('Hello World!')
  })

  //Ouvindo a porta 3000 e xibindo uma mensagem no console
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost ${port}`)
})
