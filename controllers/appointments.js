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

//Show Route
router.get('/:id', (req, res) => {
    Appointment.findOne({ _id: req.params.id }).then(appointment => {
      res.render('Show', appointment);
    });
  });

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
  //edit route
  router.get('/edit/:id', (req, res) => {
    Appointment.findOne({ _id: req.params.id }).then(appointment => {
      res.render('Edit', appointment);
    });
  });



//   edit put route
  router.put('/:id', (req, res) => {
    Appointment.findOneAndUpdate(
      { _id: req.params.id },
      req.body
    ).then(appointment => {
        res.redirect(`/appointments/${appointment.id}`);
      });
  });
  //the delete route
  router.delete('/:id', (req, res) => {
    Appointment.findOneAndRemove({ _id: req.params.id }).then(() => {
      res.redirect('/appointments');
    });
  });
 
        
  module.exports = router;














