import React from 'react';
import ReactDOM from 'react-dom';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const Logo = styled.div`
  height: 65px;
  width: 135px;
  background-color: #280547;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Close = styled.div`
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ef6003;
  border-radius: 50%;
`;

const styles = theme => ({
  authForm: {
    flexGrow: 1
  }
});

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
        {error && touched ? <Typography>{error}</Typography> : null}
      </div>
    );
  };

  onFormSubmit = formValues => console.log(formValues);

  render() {
    const { classes } = this.props;
    return ReactDOM.createPortal(
      <Grid container xs={12} md={6}>
        <Card>
          <CardContent>
            <Grid item xs={12} md={6}>
              <Grid container direction="row">
                <Grid item xs={2}>
                  <Logo>
                    <Typography variant="h4">LOGO</Typography>
                  </Logo>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h6">Register to Explore!</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Close>
                    <Typography variant="body.1">X</Typography>
                  </Close>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} className={classes.authForm}>
              <form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
                <Field
                  name="email"
                  component={this.renderInput}
                  label="Email Address"
                />
                <Field
                  name="password"
                  component={this.renderInput}
                  label="Password"
                />
                <div>
                  <Button type="submit" variant="contained" color="primary">
                    Register
                  </Button>
                </div>
              </form>
            </Grid>
          </CardContent>
        </Card>
      </Grid>,

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

export default withStyles(styles)(
  reduxForm({
    form: 'SignIn',
    validate
  })(AuthForm)
);
