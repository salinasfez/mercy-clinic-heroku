const React = require('react');
const AppLayout = require('./layouts/AppLayout.jsx');

class New extends React.Component{
    render(){
        return(
            <AppLayout title="Book Your Appointment">

            <form action={`/appointments`} method="POST">
                <label>First Name   </label><input type="text" name="firstName"></input> &nbsp;&nbsp;&nbsp;&nbsp;
                <label>Last Name   </label><input type="text" name="lastName"></input><br></br><br></br>
                <label>Reason For Visit  </label><br></br><textarea rows="4" col="50" type="text" name="reasonForVisit"></textarea><br></br><br></br>
                <label>Preferred Doctor   </label><input type="text" name="doctor"></input><br></br><br></br>
                <lable>Date and Time   </lable><input type="time" name="time"></input><br></br><br></br>
                <label>Are You A New Patient?   </label><input type="checkbox" name="newPatient"></input>
                <br></br>
                <br></br>
             <input type="submit" value="Book Now"></input>   
            </form>    



            </AppLayout>
        )
    }
}





module.exports = New;
