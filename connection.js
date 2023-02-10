const muysql = require('mysql')

const db = muysql.createConnection({
    host: "localhost", 
    user: "root",
    password :"", 
    database :"cuyuniversity"
})

module.exports = db