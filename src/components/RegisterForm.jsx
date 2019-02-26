import React, { Component } from 'react';
import Register from './Register';
import Confirm from './Confirm';
import Success from './Success';


export class RegisterForm extends Component {
  state = {
    step: 1,
    phone:'',
    password:'',
    password_repeat:'',
    is_driver:'',
    city_id: '',
    first_name: '',
    last_name: '',
    gender: '',
    birth_date: ''
  };

  // Proceed to next step
 nextStep = () => {
   const { step } = this.state;
   this.setState({
     step: step + 1
   });
 };

 // Go back to prev step
 prevStep = () => {
   const { step } = this.state;
   this.setState({
     step: step - 1
   });
 };

 // Handle fields change
 handleChange = input => e => {
   this.setState({ [input]: e.target.value });
 };
 render() {
     const { step } = this.state;
     const {phone, password, password_repeat, is_driver, city_id, first_name, last_name,
       gender, birth_date } = this.state;
     const values = { phone, password, password_repeat, is_driver, city_id, first_name, last_name,
       gender, birth_date  };

     switch (step) {
       case 1:
         return (
           <Register
             nextStep={this.nextStep}
             handleChange={this.handleChange}
             values={values}
           />
         );
       case 2:
         return (
           <Confirm
             nextStep={this.nextStep}
             prevStep={this.prevStep}
             handleChange={this.handleChange}
             values={values}
           />
         );

 case 3:
   return <Success />;
}
}
}

export default RegisterForm;
