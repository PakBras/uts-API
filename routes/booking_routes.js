const express = require('express');
const router = express.Router();
const booking_hotel_service = require('../services/booking_hotel_service');

// GET hotel bookings
router.get('/', async (req, res, next) => {
  try {
    const { page } = req.query;
    const hotelBookings = await booking_hotel_service.getHotelBookings(page);
    res.json(hotelBookings);
  } catch (error) {
    console.error('Error while getting hotel bookings:', error.message);
    next(error);
  }
});

// POST hotel booking
router.post('/', async (req, res, next) => {
  try {
    const booking = req.body;
    const result = await booking_hotel_service.createHotelBooking(booking);
    res.json(result);
  } catch (error) {
    console.error('Error while creating hotel booking:', error.message);
    next(error);
  }
});

// PUT hotel booking
router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const booking = req.body;
    const result = await booking_hotel_service.updateHotelBooking(id, booking);
    res.json(result);
  } catch (error) {
    console.error('Error while updating hotel booking:', error.message);
    next(error);
  }
});

// DELETE hotel booking
router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await booking_hotel_service.removeHotelBooking(id);
    res.json(result);
  } catch (error) {
    console.error('Error while deleting hotel booking:', error.message);
    next(error);
  }
});

// GET hotel booking by ID
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const booking = await booking_hotel_service.searchHotelBooking(id);
    res.json(booking);
  } catch (error) {
    console.error('Error while searching hotel booking:', error.message);
    next(error);
  }
});

module.exports = router;
