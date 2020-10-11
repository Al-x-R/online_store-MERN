const express = require('express')
const app = express()
const products = require('./data/products')
const router = require('./router')

app.use(express.json())

app.use('/api', router)

app.get('/', (req, res) => {
    res.send('API is running')
})

app.get('/api/products', (req, res) => {
    res.json(products)
})


module.exports = app