const express = require('express')
const app = express()
const port = 6969
const bodyParser = require('body-parser')
const db = require('./connection')
const formatResponse = require('./response')

/// Routes / URL /utama kita method GET

app.use(bodyParser.json())

app.get('/', (req, res) => {
  db.query('select * from mahasiswa', (err, result) => {
    // hasil dari mysql
    console.log(result)
    formatResponse(200, result, "mendapatkan seluruh data dari tabel mahasiswa", res)
  })
})

app.get('/nimu', (req, res) => {
  console.log('Find NIM : ', req.query.nim)

  const sql = `select nama from mahasiswa where nim = "${req.query.nim}"`
  db.query(sql, (err, result) => {
    formatResponse(200, result, "get NIM from mahasiswa", res)
  })
})

app.post('/login', (req, res) => {
  console.log({ requestFromOutside: req.body })
  res.send('berhasil login')
})

app.put('/username', (req, res) => {
  console.log({ updateData: req.body })
  res.send('update berhasil')
})

/// Routes
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})