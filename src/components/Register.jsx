import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import Login from './Login';
import RegisterForm from './RegisterForm';
import PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Confirm from './Confirm';
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

class Register extends Component {

  constructor(props){
    super(props);
    this.state= {
      phone:'',
      password:'',
      password_repeat:'',
      is_driver:'',
      city_id: '',
      first_name: '',
      last_name: '',
      gender: '',
      birth_date: ''
    }
};

continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

submit = event => {
  event.preventDefault();
  console.log("SUBMIT", event);
};


handleClick(event){
    var apiBaseUrl = "https://cors-anywhere.herokuapp.com/http://46.101.236.211:3333/api/v1/users/create/";
    console.log("values",this.state.phone,this.state.password,this.state.password_repeat,
    this.state.is_driver, this.state.city_id, this.state.first_name, this.state.last_name, this.state.gender, this.state.birth_date);
    var self = this;
    var payload={
        "phone": this.state.phone,
        "password":this.state.password,
        "password_repeat": this.state.password_repeat,
        "is_driver":this.state.is_driver,
        "city_id":this.state.city_id,
        "first_name": this.state.first_name,
        "last_name": this.state.last_name,
        "gender": this.state.gender,
        "birth_date": this.state.birth_date
    }
    axios.post(apiBaseUrl+'/register', payload)
    .then(function (response) {
      console.log(response);
      if(response.data.code >= 200){
        console.log("registration successfull");
        var loginscreen=[];
        loginscreen.push(<Login parentContext={this}/>);
        var loginmessage = "Not Registered yet.Go to registration";
        self.props.parentContext.setState({loginscreen:loginscreen,
        loginmessage:loginmessage,
        buttonLabel:"Register",
        isLogin:true
         });
      }
    })
    .catch(function (error) {
      console.log(error);
    });
   }


render() {
     const { classes } = this.props;
     const { values, handleChange } = this.props;
  return (
        <MuiThemeProvider>
        <div>
        <AppBar
           title="Registration"
         />
         <div className={classes.container}>
           <form
           onSubmit={this.submit.bind(this)}
           autoComplete="off"
           >
            <TextField
              id="name"
              label="Name"
              required
              hintText="Enter your first name"
              floatingLabelText="First name"
              className={classes.textField}
              onChange = {(event,newValue) => this.setState({first_name:newValue})}
              />
            <br/>
            <TextField
              hintText="Enter your last name"
              floatingLabelText="Last name"
               className={classes.textField}
              onChange = {(event,newValue) => this.setState({last_name:newValue})}
              required
              />
            <br/>
            <TextField
              hintText="Enter your phone"
              floatingLabelText="Phone"
              defaultValue="700500500"
              onChange = {(event,newValue) => this.setState({phone:newValue})}
            />
        <br/>
             <TextField
               type="password"
               hintText="Enter your Password "
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <TextField
               type="password"
               hintText="Repeat your Password"
               floatingLabelText="Repeat your Password"
               onChange = {(event,newValue) => this.setState({password_repeat:newValue})}
               />
             <br/>
             <div className={classes}>
         <FormControl component="fieldset" className={classes}>
           <RadioGroup
             aria-label="Gender"
             name="gender1"
             className={classes}
             value={this.state.is_driver}
             onChange= {(event,newValue) => this.setState({is_driver:newValue})}
           >
             <FormControlLabel value="true" control={<Radio color="primary" />} label="Driver" />
             <FormControlLabel value="false" control={<Radio color="primary" />} label="Passenger" />
             </RadioGroup>
        </FormControl>
        </div>
        <FormControl className={classes}>
          <InputLabel  htmlFor="city-simple">City</InputLabel>
          <Select
            value={this.state.city_id}
            onChange={this.handleChange}
            style={{width: '100%'}}
            inputProps={{
              name: 'city_id',
              id: 'city-simple',
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>Bishkek</MenuItem>
            <MenuItem value={2}>Osh</MenuItem>
            <MenuItem value={3}>Uzgen</MenuItem>
          </Select>
        </FormControl>
        <br/><br/>
             <div className={classes}>
         <FormControl component="fieldset" className={classes}>
           <FormLabel component="legend">Gender</FormLabel>
           <RadioGroup
             aria-label="Gender"
             name="gender1"
             className={classes}
             value={this.state.gender}
             onChange= {(event,newValue) => this.setState({gender:newValue})}
           >
             <FormControlLabel value="2" control={<Radio color="primary" />} label="Female" />
             <FormControlLabel value="1" control={<Radio color="primary" />} label="Male" />
             <FormControlLabel value="3" control={<Radio color="primary" />} label="Other" />
             </RadioGroup>
        </FormControl>
        </div>
             <TextField
               type="date"
               onChange = {(event,newValue) => this.setState({birth_date:newValue})}
               />
             <br/>
              <RaisedButton type="submit" label="Send Code" primary={true} style={style} onClick={(event) => this.handleClick(event)}
              onClick={this.continue}
              />
            </form>
            <RaisedButton type="submit" label="Write Code" primary={true} style={style} onClick={this.continue}/>
              </div>
            </div>
            </MuiThemeProvider>

      );
    }
  }
  const style = {
    margin: 15,
  };
  Register.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Register);
