// testConnection.js
import pool from './db.js';

const testConnection = async () => {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log('Conexión exitosa:', res.rows[0]);
  } catch (err) {
    console.error('Error al conectar a la base de datos:', err);
  }
};

testConnection();
