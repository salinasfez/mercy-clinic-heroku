const React = require('react');
const AppLayout = require('./layouts/AppLayout.jsx');

class New extends React.Component{
    render(){
        return(
            <AppLayout title="Book Your Appointment">

            <form action={`/appointments`} method="POST">
                <label>First Name   </label><input className="form-control" type="text" name="firstName"></input> &nbsp;&nbsp;&nbsp;&nbsp;
                <label>Last Name   </label><input className="form-control" type="text" name="lastName"></input><br></br><br></br>
                <label>Reason For Visit  </label><br></br><textarea className="form-control" rows="4" col="50" type="text" name="reasonForVisit"></textarea><br></br><br></br>
                <label>Preferred Doctor   </label><select type="text" name="doctor">
                                                        <option value="Dr. Knows A Bit" name="doctor">Dr. Knows A Bit</option>
                                                        <option value="Dr. Knows A Lot" name="doctor">Dr. Knows A Lot</option>
                                                        <option value="Dr. Pepper" name="doctor">Dr. Pepper</option>
                                                        <option value="Dr. Will Tickel" name="doctor">Dr. Will Tickel</option>
                                                  </select><br></br><br></br>
                <label>Date  </label><input type="date" name="date"></input>&nbsp;&nbsp;
                <label>Time   </label><input type="time" name="time"></input><br></br><br></br>
                <label>Are You A New Patient?   </label><input className="new-patient" type="checkbox" name="newPatient"></input>
                <br></br>
                <br></br>
             <input className="btn btn-success" type="submit" value="Book Now"></input>   
            </form>    



            </AppLayout>
        )
    }
}





module.exports = New;
