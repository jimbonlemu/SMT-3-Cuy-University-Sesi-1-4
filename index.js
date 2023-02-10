const express = require('express')
const app = express()
const port = 6969
const bodyParser = require('body-parser')


/// Routes / URL /utama kita method GET

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/tot', (req, res) => {
  console.log({urlParams : req.query})
  res.send('Hello sat!')
})

app.post('/login', (req, res) => {
  console.log({ requestFromOutside: req.body })
  res.send('berhasil login')
})

app.put('/username', (req, res) => {
  console.log({updateData : req.body})
  res.send('update berhasil')
})

/// Routes
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})