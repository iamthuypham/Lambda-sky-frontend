import React from 'react';
import NavigationBar from '../navigation/NavigationBar';
import AuthenticationBar from '../authentication/authenticationBar';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const Hero = ({ classes }) => (
  <>
    <Grid container className={classes.heroMenu} direction="column-reverse">
      <Grid item xs={12}>
        <NavigationBar />
      </Grid>
      <Grid item xs={12}>
        <AuthenticationBar />
      </Grid>
    </Grid>
    <Grid
      container
      className={classes.hero}
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Typography variant="h2" className={classes.title}>
        discover
      </Typography>
      <Typography
        variant="h3"
        fontFamily="Monospace"
        className={classes.subtitle}
      >
        your outdoor
      </Typography>
      <Button className={classes.heroCTA}>Explore Now</Button>
    </Grid>
  </>
);

const styles = theme => ({
  hero: {
    height: '90vh',
    backgroundColor: 'grey',
    position: 'relative'
  },
  heroMenu: {
    position: 'absolute',
    top: 0,
    zIndex: 1
  },
  title: {
    textTransform: 'uppercase',
    color: `${theme.palette.primary.contrastText}`
  },
  subtitle: {
    color: `${theme.palette.primary.contrastText}`
  },
  heroCTA: {
    background: theme.custom.skyBackground,
    color: `${theme.palette.primary.contrastText}`,
    paddingRight: 30,
    paddingLeft: 30,
    textTransform: 'uppercase',
    marginTop: 50
  }
});

export default withStyles(styles)(Hero);
