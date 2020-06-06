// importar a dependência do SQLite3
// Ver mensagens no console
const sqlite3 = require("sqlite3").verbose()

//criar o objeto que irá fazer interações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

//utilizar o objeto de banco de dados para operações
db.serialize( () =>{
    //criar tabela

    //inserir dados na tabela

    //consultar dados na tabela

    //deletar dado da tabela
})