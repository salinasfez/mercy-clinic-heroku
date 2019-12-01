const React = require('react');
const AppLayout = require('./layouts/AppLayout.jsx');

class Index extends React.Component{
  render() {
   
    return (
      <AppLayout title="Mercy Health Appointment Center">
            <h2>Today's Appointments</h2>
           <ul>
                {
                    this.props.appointments.map((appointment, i) => {
                        return (
                           <li id={i} key={`li${i}`}>
                        <label className="lead">Patient's Full Name:  &nbsp;&nbsp;  </label><a href={`/appointments/${ appointment._id }`}>{ appointment.firstName } {appointment.lastName }</a>
                        <br></br><br></br>
                        <label className="lead">Time: &nbsp;&nbsp;   </label>{appointment.time}<br></br><br></br>
                        <label className="lead">Status: &nbsp;&nbsp;</label>{ appointment.newPatient ? ` New Patient` : ` Established Patient` }
                        <br></br><br></br><br></br><br></br>
                        </li>
                        )
                    })
                }
            </ul>
      
      </AppLayout>

    )
  }
}
module.exports= Index ;