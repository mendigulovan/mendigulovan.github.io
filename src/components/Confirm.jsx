import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
import TextField from 'material-ui/TextField';

export class Confirm extends Component {
  constructor(props){
    super(props);
    this.state= {
      sms_code :'',
      user_id : {serverports: []}
    }
};
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  componentDidMount(){
      axios.get('http://46.101.236.211:3333/api/v1/users/user_id/')
      .then(json => json.data.results.map(result => (
    {
      name: `${result.name.user_id}`,
      id: result.registered
    })))
  .then(newData => this.setState({users: newData, store: newData}))
  .catch(error => alert(error))
}

  handleClick(event){
      var apiBaseUrl = "https://cors-anywhere.herokuapp.com/http://46.101.236.211:3333/api/v1/users/validate/";
      console.log("values",this.state.sms_code, this.state.user_id);
      var self = this;
      var payload={
          "sms_code": this.state.sms_code,
          "user_id": this.state.user_id
      }
      axios.post(apiBaseUrl+'/confirm', payload)
     .then(function (response) {
       console.log(response);
       if(response.data.code == 200){
         console.log("registration successfull");
       }
     })
     .catch(function (error) {
       console.log(error);
     });
    }


  render() {
    const {
    values: { phone, password, password_repeat, is_driver, city_id, first_name, last_name,
      gender, birth_date }
  } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm User Data" />
          <br/>
          <TextField
            floatingLabelText="Code"
            onChange = {(event,newValue) => this.setState({sms_code:newValue})}
            />
          <RaisedButton
            label="Confirm & Continue"
            primary={true}
            style={styles.button}
            onClick={(event) => this.handleClick(event)}
          />
          <RaisedButton
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.back}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default Confirm;
