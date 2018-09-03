import React, { Component } from 'react'
import { PropTypes } from 'prop-types';
import {connect} from 'react-redux';

import LoginForm from '../forms/LoginForm'
import {login} from "../../actions/auth"

class  LoginPage extends Component{
  
  submit = (loginData) =>{
    //login action from redux store to dispatch login credentials
    return this.props.login(loginData).then(()=>this.props.history.push("/"))
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
LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }),
  login: PropTypes.func.isRequired
}

export default connect(null, {login})(LoginPage);