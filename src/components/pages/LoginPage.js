import React, { Component } from 'react'

import LoginForm from '../forms/LoginForm'

class  LoginPage extends Component{
  
  submit = (loginData) =>{
    console.log('loginData', loginData);
  }

  render() {
    return (
      <div>
        <h1>LoginPage</h1>

      <LoginForm submit={this.submit} />
      </div>
    )
  }
}

export default LoginPage