import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import LoadingScreen from 'react-loading-screen';
import axios from 'axios';
import { withStyles } from "@material-ui/core/styles";


const styles = theme => ({
  container: {
    marginLeft: 500,
    width: 800
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  menu: {
    width: 200
  }
});

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state={
    phone:'',
    password:''
    }
   }
               handleClick(event){
                     var apiBaseUrl = "https://cors-anywhere.herokuapp.com/http://46.101.236.211:3333/api/v1/users/login/";
                     var self = this;
                     var payload={
                     "phone":this.state.phone,
                     "password":this.state.password
                     }
             axios.post(apiBaseUrl+'login', payload)
             .then(function (response) {
                     console.log(response);
                     if(response.data.code == 200){
                     console.log("Login successfull");
                     var uploadScreen=[];
                     uploadScreen.push(<LoadingScreen appContext={self.props.appContext}/>)
                     self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
             }
             else if(response.data.code == 204){
                     console.log("User password do not match");
                     alert("user password do not match")
             }
             else{
                     console.log("User does not exists");
                     alert("Userdoes not exist");
             }
             })
             .catch(function (error) {
                     console.log(error);
             });
             }
render() {
    const { classes } = this.props;
    
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Login"
           />
           <div className={classes.container}>
           <TextField
             type="number"
             hintText="Enter your phone number"
             floatingLabelText="Phone"
             onChange = {(event,newValue) => this.setState({phone:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
         </div>
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
 margin: 15,
};
export default withStyles(styles)(Login);
