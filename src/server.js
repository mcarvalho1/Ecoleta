const express = require("express")
const server = express()

//pegar o bd
const db = require("./database/db")

// configurar pasta pública
server.use(express.static("public"))


//utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})


// configurar caminhos da aplicação
//página inicial
// req = requisição
// res = resposta 
server.get("/", (req, res) => {
    return res.render("index.html")
})

server.get("/create-point", (req, res) => {
 
    console.log(req.query)


    return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {
    return res.send("Ok")
})

server.get("/search-result", (req, res) => {

    //pegar os dados do banco de dados
    db.all(`SELECT * FROM places`, function(err, rows) {
        if(err) {
            return console.log(err)
        }
        console.log("Aqui estão seus registros")

        //quantidade de pontos cadastrados
        const total = rows.length

        //mostrar a página html com os dados do banco de dados
        return res.render("search-result.html", {places: rows, total })
    })
})

//ligar o servidor
server.listen(3000)