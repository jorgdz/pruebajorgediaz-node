'use strict'

const path = require('path')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({
    path: path.join(__dirname, '.env')
  })
}

const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const { handler } = require('./src/exceptions')
const departamentos = require('./src/routes/departamentos')
const { NotFoundException } = require('./src/exceptions/exceptions')
const PORT = process.env.PORT || 3000

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())

// Cors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE')
  next()
})

// Api endpoints
app.use('/api', departamentos)

// Not found endpoint
app.use(function (req, res, next) {
  next(new NotFoundException('The path was not found.'))
})

// Handler exceptions
app.use(handler)

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`)
})
