import React, { Component } from "react";
import { Form, Button, Message } from "semantic-ui-react";
import Validator from "validator";
import PropTypes from 'prop-types';

import InlineError from "../messages/InlineError";

class LoginForm extends Component {
  state = {
    data: {
      email: "",
      password: ""
    },
    loading: false,
    errors: {}
  };

  onInputChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  onFormSubmit = () => {

    const errors = this.validate(this.state.data);
    this.setState({ errors });
    //check if errors obj is empty, if not submit data
    if (Object.keys(errors).length === 0) {
      this.setState({loading: true})
      this.props.submit(this.state.data)
      //catch errs from API
      .catch(err=>this.setState({
        errors: err.response.data.error,
        loading: false
      }))
    }
  };

  validate = data => {
    const errors = {};
    if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
    if (!data.password) errors.password = "Can't be blank!";

    return errors;
  };

  render() {
    const { data, errors, loading } = this.state;
    console.log('loading', loading);
    return (
      <Form onSubmit={this.onFormSubmit} loading={loading}>
        { errors.global ?(
          <Message negative>
            <Message.Header>Something went wrong</Message.Header>
            <p>{ errors.global }</p>
          </Message>
        ) : null }
        <Form.Field error={!!errors.email}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@example.com"
            value={data.email}
            onChange={this.onInputChange}
          />
          {errors.email && <InlineError text={errors.email} />}
        </Form.Field>
        <Form.Field error={!!errors.password}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Your password here"
            value={data.password}
            onChange={this.onInputChange}
          />
          {errors.password && <InlineError text={errors.password} />}
        </Form.Field>

        <Button primary>Login</Button>
      </Form>
    );
  }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
}

export default LoginForm;
