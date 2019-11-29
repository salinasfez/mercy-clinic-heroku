const React = require('react');
const AppLayout = require('./layouts/AppLayout.jsx');

class Show extends React.Component {
    render(){
        return (
            <AppLayout title="Appointment Details">
                
                <label>Full Name: &nbsp;&nbsp;</label>{ this.props.firstName } {this.props.lastName }<br></br><br></br>
                <label>Date: &nbsp;&nbsp;</label>{this.props.date}&nbsp;&nbsp;<label>Time: &nbsp;&nbsp;</label>{this.props.time}<br></br><br></br>
                <label>Doctor: &nbsp;&nbsp;</label>{this.props.doctor}<br></br><br></br>
                <label>Reason For Visit: &nbsp;&nbsp;</label>{this.props.reasonForVisit}<br></br><br></br>
                { this.props.newPatient ? ` New Patient` : ` Established Patient` }<br></br><br></br>
                <button><a href="/appointments/edit">Reschedule Appointment</a></button>
            </AppLayout>
        )
    }
}
module.exports = Show;