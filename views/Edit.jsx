const React = require('react');
const AppLayout = require('./layouts/AppLayout.jsx');

class Edit extends React.Component{
    render(){
        return(
            <AppLayout title="Reschedule Your Appointment">

            <form action={`/appointments/${this.props._id}?_method=put`} method="post">
                <label>First Name   </label><input type="text" name="firstName" value={`${this.props.firstName}`}></input> &nbsp;&nbsp;&nbsp;&nbsp;
                <label>Last Name   </label><input type="text" name="lastName" value={`${this.props.lastName}`}></input><br></br><br></br>
                <label>Reason For Visit  </label><br></br><textarea rows="4" col="50" type="text" name="reasonForVisit" value={`${this.props.reasonForVisit}`}></textarea><br></br><br></br>
                <label>Preferred Doctor   </label><select type="text" name="doctor" value={`${this.props.doctor}`}>
                                                        <option value="Dr. Knows A Bit" name="doctor">Dr. Knows A Bit</option>
                                                        <option value="Dr. Knows A Lot" name="doctor">Dr. Knows A Lot</option>
                                                        <option value="Dr. Pepper" name="doctor">Dr. Pepper</option>
                                                        <option value="Dr. Will Tickel" name="doctor">Dr. Will Tickel</option>
                                                  </select><br></br><br></br>
                <label>Date  </label><input type="date" name="date" value={`${this.props.date}`}></input>&nbsp;&nbsp;
                <label>Time   </label><input type="time" name="time" value={`${this.props.time}`}></input><br></br><br></br>
                <label>Are You A New Patient?   </label><input className="new-patient" type="checkbox" name="newPatient"></input>
                <br></br>
                <br></br>
             <input type="submit" value="Submit Changes"></input>   
            </form>    



            </AppLayout>
        )
    }
}

module.exports = Edit;




