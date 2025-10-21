import { createConnection } from 'mysql2'

process.loadEnvFile()
// Configuración de la conexión
const configConnection = {
    host : process.env.host,
    port : process.env.port,
    user : process.env.user,
    password : process.env.password,
    database : process.env.database
}

// Crear la conexión
const connection = createConnection(configConnection)

// Definir la query
const query = "SELECT * FROM contactos"
connection.query(query, (error, result, fields) => {
    if (error) throw error
    console.log(result);
})

// A Julieta Benegas le cambiamos el tipo de contacto a trabajo
// Añadimos otro contacto: "Michael Jordan 66666 personal"
// Borramos a Mike Jagger
// Borramos a Michael Jordan
// Ver como han quedado los datos
