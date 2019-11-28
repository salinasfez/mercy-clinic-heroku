// this is like my server.js from class examples
const express = require('express');
const app = express();
const port = 3000;
const PORT = process.env.PORT || 3000;
const method = require('method-override');//method override 
const mongoose = require('./db/connection.js');//mongoose connection

//middleware
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({ extended: true }));
app.use(method('_method'));
app.use(express.static('public'));// in order to use css 
//requiring my Schema
const Appointment = require('./models/appointments.js');
//requiring controllers
const appointmentsController = require('./controllers/appointments.js');




//this will be my appointments homepage
app.use('/appointments', appointmentsController);

mongoose.connection.once('open', () => {
	console.log('connected to mongo');
});

app.listen(PORT, () => {
    console.log('listening...');
})









