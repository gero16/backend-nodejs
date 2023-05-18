const express = require('express')
const colors = require("colors")
const app = express()
const cors = require('cors')
require('dotenv').config()
const port = process.env.PORT|| 3001

const products = require("./products.json")

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/products', async (req, res) => {
  console.log(products)
  res.json(products)
})


app.listen(port, () => {
    console.log(colors.bgRed(`Example app listening on port ${port}`))
})