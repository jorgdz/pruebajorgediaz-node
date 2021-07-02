const connection = require('../../lib/db/db')
const Departamento = require('../models/Departamento')

const getAll = async function (sigla) {
    let departamentos = []
    let conn

    try {
        let result = null
        conn = await connection.connection()
        if (sigla == undefined)
            result = await conn.execute('SELECT * FROM departamentos')
        else 
            result = await conn
                .execute('SELECT * FROM departamentos WHERE SIGLA_CIUDAD=:sigla', [sigla])
        
        result.rows.forEach(row => {
            let dep = new Departamento(row[0], row[1], row[2])
            departamentos.push(dep)
        });

    } catch (err) {
        console.log(err)
    } finally {
        if (conn) {
            try {
                await conn.close();
            } catch(err) {
                console.log("Error when closing the database connection: ", err);
            }
        }
    }

    return departamentos
}


const create = async function (body) {
    let conn
    let good = false;
    try {
        conn = await connection.connection()
        let result = await conn.execute("insert into departamentos values (increment_departamentos.NEXTVAL, '"+body.nombreDepartamento+"', '"+body.siglaCiudad+"')", [], {autoCommit: true});
        
        console.log(result)

        if (result.rowsAffected > 0) {
            good = true
        }

    } catch (err) {
        console.log(err)
    } finally {
        if (connection) {
            try {
                await conn.close();
            } catch(err) {
                console.log("Error when closing the database connection: ", err);
            }
        }
    }

    return Promise.resolve(good)
}

module.exports = { getAll, create }
