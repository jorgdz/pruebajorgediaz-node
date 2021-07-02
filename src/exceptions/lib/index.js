'use strict'

const niv = require('node-input-validator')
const messages = require('../util/message')
const { BadRequestException, ConflictException, MethodArgumentNotValidException } = require('../exceptions')

exports.checkNumber = (value) => {
  var RE = /^([0-9])*$/
  if (!RE.test(value)) {
    throw new BadRequestException(value + ' is not a number.')
  }

  return this
}

exports.checkIdGreaterThan = (id) => {
  if (id < 3) {
    throw new BadRequestException('Fail greater number.')
  }

  return this
}

// Validar un número decimal
exports.validateDecimal = (value) => {
  var RE = /^\d*\.?\d*$/
  if (!RE.test(value)) {
    throw new ConflictException('Invalid decimal.')
  }

  return this
}

// Validar un número decimal con dos dígitos de precisión
exports.validateDecimalPrecition = (value) => {
  var RE = /^\d*(\.\d{1})?\d{0,1}$/
  if (!RE.test(value)) {
    throw new ConflictException('Invalid precition decimal.')
  }

  return this
}

exports.validateFields = async (body, rules) => {
  niv.extendMessages(messages)

  const validator = new niv.Validator(body, rules)
  const matched = await validator.check()

  if (!matched) {
    throw new MethodArgumentNotValidException('Fields errors.', validator.errors)
  }
}
