import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import LoadingScreen from 'react-loading-screen';
import axios from 'axios';

class Driver extends React.Component {
  constructor(props){
    super(props);
    this.state={
      description:'',
      available_seats:'',
      isDriver:'',
      isBag:'',
      orig_address:'',
      dest_address:'',
      orig_coords:'',
      dest_coords:'',
      start_time:'',
      points:''

    }
   }
               handleClick(event){
                     var apiBaseUrl = "https://cors-anywhere.herokuapp.com/http://46.101.236.211:3333/api/v1/routes/";
                     var self = this;
                     var payload={
                     "description":this.state.description,
                     "available_seats":this.state.available_seats,
                     "isDriver":this.state.isDriver,
                     "isLocal":this.state.isLocal,
                     "isBag":this.state.isBag,
                     "orig_address":this.state.orig_address,
                     "dest_address":this.state.dest_address,
                     "orig_coords":this.state.orig_coords,
                     "dest_coords":this.state.dest_coords,
                     "start_time":this.state.start_time,
                     "points": this.state.points
                     }
             axios.post(apiBaseUrl+'login', payload)
             .then(function (response) {
                     console.log(response);
             })
             .catch(function (error) {
                     console.log(error);
             });
             }
render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Create Route"
           />
           <TextField
             type="text"
             hintText="Description"
             floatingLabelText="Description"
             onChange = {(event,newValue) => this.setState({description:newValue})}
             />
           <br/>
             <TextField
               type="number"
               hintText="Available Seats"
               onChange = {(event,newValue) => this.setState({available_seats:newValue})}
               />
             <br/>
             <TextField
               type="time"
               hintText="Time"
               onChange = {(event,newValue) => this.setState({start_time:newValue})}
               />
             <br/>
             <TextField
               type="text"
               hintText="Origin"
               onChange = {(event,newValue) => this.setState({orig_address:newValue})}
               />
             <br/>
             <TextField
               type="text"
               hintText="Destination"
               onChange = {(event,newValue) => this.setState({dest_address:newValue})}
               />
             <br/>
             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
 margin: 15,
};
export default Driver;
