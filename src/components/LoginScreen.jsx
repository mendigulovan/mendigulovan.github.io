import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Login from './Login';
import RegisterForm from './RegisterForm';
import { withStyles } from "@material-ui/core/styles";


const styles = theme => ({
  container: {
    marginLeft: 500

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


class LoginScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
      loginscreen:[],
      loginmessage:'',
      buttonLabel:'Register',
      isLogin:true
    }
  }
  componentWillMount(){
    var loginscreen=[];
    loginscreen.push(<Login parentContext={this} appContext=
      {this.props.parentContext}/>);
      this.setState({
                    loginscreen:loginscreen
                      })
    }

    handleClick(event){
    // console.log("event",event);
    var loginmessage;
    if(this.state.isLogin){
      var loginscreen=[];
      loginscreen.push(<RegisterForm parentContext={this}/>);
      this.setState({
                     loginscreen:loginscreen,
                     buttonLabel:"Login",
                     isLogin:false
                   })
    }
    else{
     var loginscreen=[];
     loginscreen.push(<Login parentContext={this}/>);
     loginmessage = "Not Registered yet.Go to registration";
     this.setState({
                    loginscreen:loginscreen,
                    loginmessage:loginmessage,
                    buttonLabel:"Register",
                    isLogin:true
                  })
   }
 }
    render() {
      const { classes } = this.props;
    return (
      <div className="loginscreen">
        {this.state.loginscreen}
        <div>
          {this.state.loginmessage}
          <MuiThemeProvider>
            <div className={classes.container}>
               <RaisedButton label={this.state.buttonLabel} primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
           </div>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}
const style = {
  margin: 15,
};
export default withStyles(styles)(LoginScreen);
