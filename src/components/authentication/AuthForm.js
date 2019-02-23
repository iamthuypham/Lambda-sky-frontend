import React from 'react';
import ReactDOM from 'react-dom';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const ButtonWrapper = styled.div`
  margin-top: '30px';
`;

class AuthForm extends React.Component {
  renderInput = ({ input, label, meta: { error, touched } }) => {
    return (
      <div className="container">
        <p>{label}</p>
        <TextField
          error={error && touched ? true : false}
          id={`outlined-${input.name}-input`}
          type={`${input.name}`}
          variant="outlined"
          name={`${input.name}`}
          {...input}
          autoComplete="off"
          label={label}
          margin="normal"
        />
        {error && touched ? <p>{error}</p> : null}
      </div>
    );
  };

  onFormSubmit = formValues => console.log(formValues);

  render() {
    return ReactDOM.createPortal(
      <form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
        <Field
          name="email"
          component={this.renderInput}
          label="Email Address"
        />
        <Field name="password" component={this.renderInput} label="Password" />
        <ButtonWrapper>
          <Button type="submit" variant="contained" color="primary">
            Register
          </Button>
        </ButtonWrapper>
      </form>,
      document.querySelector('#auth-modal')
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.email) {
    errors.email = 'You must enter a name, this field is required!';
  }
  if (!formValues.password) {
    errors.password = 'You must enter an email, this field is required!';
  }
  return errors;
};

export default reduxForm({
  form: 'SignIn',
  validate
})(AuthForm);
