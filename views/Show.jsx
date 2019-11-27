const React = require('react');
const AppLayout = require('./layouts/AppLayout.jsx');

class Show extends React.Component {
    render(){
        return (
            <AppLayout title="Appointment Details">
                
                <label>Full Name: &nbsp;&nbsp;</label>{ this.props.firstName } {this.props.lastName }<br></br><br></br>
                <label>Doctor: &nbsp;&nbsp;</label>{this.props.doctor}<br></br><br></br>
                { this.props.newPatient ? ` New Patient` : ` Established Patient` }
            </AppLayout>
        )
    }
}
module.exports = Show;