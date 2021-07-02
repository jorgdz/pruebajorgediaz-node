'use strict'

const express = require('express')
const { BadRequestException } = require('../exceptions/exceptions')
const router = express.Router()
const { validateFields } = require('../exceptions/lib')
const DepartamentoService = require('../services/Departamento')

// GET departamentos 
router.get('/departamentos', async function (req, res, next) {
    try {
        let sigla = req.query.sigla
        const departamentos = await DepartamentoService.getAll(sigla)
        res.status(200).send(departamentos)
    } catch (err) {
        next(err)
    }
})

// ADD depa /
router.post('/departamentos', async function (req, res, next) {
    try {
      const body = req.body
  
      // Validate fields
      await validateFields(body, {
        nombreDepartamento: 'required',
        siglaCiudad: 'required',
      })

      const depa = await DepartamentoService.create(body)

      if (depa)
        res.status(201).send({ message: 'Departamento creado.' })
      else
        throw new BadRequestException('No se ha podido crear el recurso.')

    } catch (err) {
      next(err)
    }
})

module.exports = router
