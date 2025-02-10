
//Importando o servidor    
const express = require('express')

//Inicializando o servidor
const app = express()

const dotenv = require('dotenv')

//configurando a env
dotenv.config()

//Middleware(meio termo) para permitir o uso de json
app.use(express.json())

//Definir a porta que o servidor irá rodar
const port = process.env.PORTA

//banco de dados
const produtos = []

//rota raiz
app.get('/', (requisicao, resposta) => {
  try {
    if(produtos.length === 0){
      return resposta.status(200).json({msg:"não há produtos para serem exibidos"})
    }
    resposta.status(200).json(produtos) 
  } catch (error) {
    resposta.status(500).json({msg: "Err ao buscar produtos"})
  }
})

//rota /hello
app.get('/hello', (requisicao, resposta) => {
    resposta.send('Hello World!')
})

// Rota de cadastro de produtos
app.post('/',(requisicao,resposta) => {
  try {
    const {id, nome, preco, quantidade} = requisicao.body
    const novoProduto = {id,nome,preco,quantidade}
    produtos.push(novoProduto);
    resposta.status(201).json(novoProduto)
  } catch (error) {
    resposta.status(500).json({msg:"Erro ao cadastrar produtos!"})
  }
})

//rota para editar o produto
app.put('/:id',(requisicao,resposta) => {
  try {
    const { id } = requisicao.params
    const produto = produtos.find((elemento) => elemento.id === id)
    if(!produto){
      return resposta.status(404).json({msg: "Produto não encontrado"})
    }
    const {novoNome, novoPreco, novaQuantidade} = requisicao.body
    if(produto){
      produto.nome = novoNome
      produto.preco = novoPreco
      produto.quantidade = novaQuantidade
      return produto
    }
    resposta.status(200).json(produto)
  } catch (error) {
    resposta.status(500).json({msg:"Erro ao atualizar produtos!"})
  }
})

//Ouvindo a porta 3000 e exibindo uma mensagem
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost${port}`)
})


