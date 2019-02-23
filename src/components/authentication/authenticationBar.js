import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const AuthenticationBar = ({ classes }) => (
  <div className={classes.authenticationBar}>
    <Button>Sign In</Button>
    <Button>Register</Button>
  </div>
);

const styles = theme => ({
  authenticationBar: {
    background: theme.palette.primary.main,
    '&& button': {
      color: theme.palette.common.white
    }
  }
});

export default withStyles(styles)(AuthenticationBar);
