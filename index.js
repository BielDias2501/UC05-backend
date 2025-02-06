// importando um servidor
const express = require('express')

//inicializando o servidor
const app = express()
//Porta que o servidor ira rodar
const port = 3000

//Rota principal
app.get("/", function(req,res){
    return res.send("Página Principal")
})

app.get("/aluno", function(req,res){
    return res.send("Aluno")
})

app.get("Professor",function(req,res){
    return res.send("Professor")
})

app.listen(3000, function(){
    console.log("Testando servidor")
})