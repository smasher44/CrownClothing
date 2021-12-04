import React, { Component } from 'react';
import './sign-in.scss';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { signInWithEmailAndPassword } from "firebase/auth";

class SignIn extends Component {
  constructor(props){
  super(props);
  this.state= {
    email:'',
    password:''
    }
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      this.setState({ email:'', password:''});// clears the form
    } catch (error) {
      console.log(error);
    }
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({[name]:value})
  }
       
  render() {
    const { email, password, } = this.state; 
    return(
      <div className='sign-in'>
          <h2>I already have an account</h2>
          <span>Sign in with your email and password</span>
          <form onSubmit={this.handleSubmit}>  
          <FormInput name='email' 
                      type='email' 
                      value={email}
                      handleChange={this.handleChange}
                      label='email'  
                      required />
          <FormInput name='password' 
                      type='password' 
                      value={password}
                      handleChange={this.handleChange}
                      label='password' 
                      required />
          <div className='buttons'>
              <CustomButton type='submit'>Sign in</CustomButton>
              <CustomButton onClick={ signInWithGoogle } isGoogleSignIn>
              Sign in with Google</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;    



























