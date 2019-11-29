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
    if (req.body.newPatient === 'on') {
		req.body.newPatient = true;
	} else {
		req.body.newPatient = false;
	}
    Appointment.create(req.body).then(() => {
        res.redirect('/appointments');
    })
})
//edit route ////////HAD TO MOVE THIS ROUTE BEFORE THE SHOW ROUTE...CAN'T BE FORGETTING THOSE SIMPLE THINGS!!!/////
router.get('/edit', (req, res) => {
    // res.send('testing edit route');
    Appointment.findOneAndUpdate(req.params.id).then(appointment => {
        res.render('Edit', appointment)
    })
})
//Show Route
router.get('/:id', (req, res) => {
    Appointment.findOne({ _id: req.params.id }).then(appointment => {
      res.render('Show', appointment);
    });
  });
//   edit put route
  router.put('/:id', (req, res) => {
    Appointment.findOneAndUpdate(
      { _id: req.params.id },
      req.body
    ).then(appointment => {
      appointment.redirect(`/appointments/${appointment.id}`);
    });
  });
 
        
  module.exports = router;














