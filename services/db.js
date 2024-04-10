const mysql = require('mysql2/promise');
const config = require('../config');

async function query(sql, params) {
  const connection = await mysql.createConnection(config.db);
  const [results, ] = await connection.execute(sql, params);

  return results;
}

async function getBookingById(id) {
    const connection = await mysql.createConnection(config.db);
    try {
      const [results] = await connection.execute('SELECT * FROM booking_hotel WHERE id_booking = ?', [id]);
      return results[0]; // Mengembalikan hasil dari query
    } finally {
      await connection.end(); // Menutup koneksi setelah digunakan
    }
  }

module.exports = {
  query,
  getBookingById
}
