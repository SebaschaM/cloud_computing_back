import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'oficial',
});

try {
  await connection.connect();
  console.log('Conexión exitosa a la base de datos MySQL');
} catch (error) {
  console.error('Error al conectar con la base de datos: ', error);
}

export default connection;
