const express = require('express');
const router = express.Router();

const Appointment = require('../models/appointments.js');
//index route
router.get('/', (req, res) => {
    Appointment.find({}).then(appointments => {
    res.render('Index', { appointments });

    });
});
//create new appointment route
router.get('/new', (req, res) => {
    res.render('New');
})
//posting my appointment to the index route/page
router.post('/', (req, res) => {
    Appointment.create(req.body).then(() => {
        res.redirect('/appointments');
    })
})
//Show Route
router.get('/:id', (req, res) => {
    Appointment.findOne({ _id: req.params.id }).then(appointment => {
      res.render('Show', appointment);
    });
  });
 
        
  module.exports = router;














