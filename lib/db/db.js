'use strict'

const oracledb = require('oracledb')
const config = require('../../config').config.db

let conn = null
const connection = async function () {
    conn = await oracledb.getConnection(config)
    return conn
}

const closeConnection = async function () {
    if (conn) {
        await conn.close()
    }
}

module.exports = { connection, closeConnection }
