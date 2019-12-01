const React = require('react');
const AppLayout = require('./layouts/AppLayout.jsx');

class Show extends React.Component {
    render(){
        return (
            <AppLayout title="Appointment Details">
                
                <label className="lead">Full Name: &nbsp;&nbsp;</label>{ this.props.firstName } {this.props.lastName }<br></br><br></br>
                <label className="lead">Date: &nbsp;&nbsp;</label>{this.props.date}&nbsp;&nbsp;<label className="lead">Time: &nbsp;&nbsp;</label>{this.props.time}<br></br><br></br>
                <label className="lead">Doctor: &nbsp;&nbsp;</label>{this.props.doctor}<br></br><br></br>
                <label className="lead">Reason For Visit: &nbsp;&nbsp;</label>{this.props.reasonForVisit}<br></br><br></br>
                { this.props.newPatient ? ` New Patient` : ` Established Patient` }<br></br><br></br>
                <button className="btn btn-success"><a href={`/appointments/edit/${this.props._id}`}>Reschedule Appointment</a></button><br></br><br></br>
                <form action={`/appointments/${this.props._id}?_method=delete`} method="post">
                        <input className="btn btn-danger" type="submit" value="Delete Appointment" />
                </form>
            </AppLayout>
        )
    }
}
module.exports = Show;