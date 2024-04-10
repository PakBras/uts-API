const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getHotelBookings(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT id_booking, id_pelanggan, id_kamar, tanggal_check_in, tanggal_check_out, total_harga, status_pembayaran, status_booking
    FROM booking_hotel
    LIMIT ?, ?`,
    [offset, config.listPerPage]
  );
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta
  };
}

async function createHotelBooking(booking) {
  const { tanggal_check_in, tanggal_check_out } = booking;
  if (!tanggal_check_in || !tanggal_check_out) {
    throw new Error("tanggal_check_in and tanggal_check_out are required");
  }

  // Format dates to YYYY-MM-DD format
  const formattedCheckInDate = helper.formatDate(tanggal_check_in);
  const formattedCheckOutDate = helper.formatDate(tanggal_check_out);

  const result = await db.query(
    `INSERT INTO booking_hotel 
    (id_pelanggan, id_kamar, tanggal_check_in, tanggal_check_out, total_harga, status_pembayaran, status_booking) 
    VALUES 
    (?, ?, ?, ?, ?, ?, ?)`,
    [booking.id_pelanggan, booking.id_kamar, formattedCheckInDate, formattedCheckOutDate, booking.total_harga, booking.status_pembayaran, booking.status_booking]
  );

  let message = 'Error in creating hotel booking';

  if (result.affectedRows) {
    message = 'Hotel booking created successfully';
  }

  return { message };
}

async function updateHotelBooking(id, booking) {
  const { tanggal_check_in, tanggal_check_out } = booking;
  if (!tanggal_check_in || !tanggal_check_out) {
    throw new Error("tanggal_check_in and tanggal_check_out are required");
  }

  // Format dates to YYYY-MM-DD format
  const formattedCheckInDate = helper.formatDate(tanggal_check_in);
  const formattedCheckOutDate = helper.formatDate(tanggal_check_out);

  const result = await db.query(
    `UPDATE booking_hotel 
    SET id_pelanggan=?, id_kamar=?, tanggal_check_in=?, tanggal_check_out=?, total_harga=?, status_pembayaran=?, status_booking=? 
    WHERE id_booking=?`,
    [booking.id_pelanggan, booking.id_kamar, formattedCheckInDate, formattedCheckOutDate, booking.total_harga, booking.status_pembayaran, booking.status_booking, id]
  );

  let message = 'Error in updating hotel booking';

  if (result.affectedRows) {
    message = 'Hotel booking updated successfully';
  }

  return { message };
}


async function removeHotelBooking(id) {
  const result = await db.query(
    `DELETE FROM booking_hotel WHERE id_booking=?`,
    [id]
  );

  let message = 'Error in deleting hotel booking';

  if (result.affectedRows) {
    message = 'Hotel booking deleted successfully';
  }

  return { message };
}

async function searchHotelBooking(id) {
  const rows = await db.query(
    `SELECT * FROM booking_hotel WHERE id_booking=?`,
    [id]
  );
  const data = helper.emptyOrRows(rows);
  return {
    data
  };
}

module.exports = {
  getHotelBookings,
  createHotelBooking,
  updateHotelBooking,
  removeHotelBooking,
  searchHotelBooking
};
