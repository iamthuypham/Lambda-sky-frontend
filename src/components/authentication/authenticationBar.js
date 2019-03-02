import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const AuthenticationBar = ({ classes }) => (
  <Grid container justify="flex-end" className={classes.authenticationBar}>
    <Grid item className={classes.authenticationBarCTA}>
      <Button className={classes.authenticationBarButton}>Sign In</Button>
      <Button className={classes.authenticationBarButton}>Register</Button>
    </Grid>
  </Grid>
);

const styles = theme => ({
  authenticationBar: {
    background: theme.palette.primary.dark,
    opacity: `${theme.custom.skyOpacityPrimary}`,
    paddingTop: `${theme.spacing.unit}px`,
    paddingBottom: `${theme.spacing.unit}px`
  },
  authenticationBarCTA: {
    padding: `0 ${theme.spacing.unit * 3}px`
  },
  authenticationBarButton: {
    color: theme.palette.common.white
  }
});

export default withStyles(styles)(AuthenticationBar);
