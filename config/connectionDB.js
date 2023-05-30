import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

const connection = await mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
});

async function handleConnect() {
  try {
    await connection.connect();
    console.log('Conexión exitosa a la base de datos MySQL');
  } catch (error) {
    console.error('Error al conectar con la base de datos: ', error);
  }
}

export default handleConnect;
