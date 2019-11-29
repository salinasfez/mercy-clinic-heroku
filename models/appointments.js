// this file is where my Schema will live
const mongoose = require('../db/connection');

const AppointmentSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  reasonForVisit: String,
  doctor: String,
  time: String,
  date: String,
  newPatient: Boolean,
  createdAt: { type: Date, default: Date.now }
});

const Appointment = mongoose.model('Appointment', AppointmentSchema);

module.exports = Appointment;