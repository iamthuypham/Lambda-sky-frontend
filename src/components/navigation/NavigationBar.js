import React from 'react';
// import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const NavigationBar = ({ classes }) => (
  <Grid
    container
    className={classes.navigationBar}
    direction="row"
    justify="center"
    alignItems="center"
  >
    <Button className={classes.navigationItem}>Home</Button>
    <Button className={classes.navigationItem}>About Us</Button>
    <Button className={classes.navigationItem}>Offers</Button>
    <Button className={classes.navigationItem}>Contact</Button>
  </Grid>
);

const styles = theme => ({
  navigationBar: {
    backgroundColor: `${theme.palette.primary.dark}`,
    color: `${theme.palette.primary.contrastText}`,
    opacity: `${theme.custom.skyOpacitySecondary}`,
    paddingTop: `${theme.spacing.unit * 3}px`,
    paddingBottom: `${theme.spacing.unit * 3}px`
  },
  navigationItem: {
    color: `${theme.palette.primary.contrastText}`,
    letterSpacing: 1,
    paddingRight: `${theme.spacing.unit * 3}px`,
    paddingLeft: `${theme.spacing.unit * 3}px`
  }
});

export default withStyles(styles)(NavigationBar);
