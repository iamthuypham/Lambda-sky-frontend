import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const Hero = ({ classes }) => (
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
      variant="h2"
      fontFamily="Monospace"
      className={classes.subtitle}
    >
      your outdoor
    </Typography>
    <Button className={classes.heroCTA}>Explore Now</Button>
  </Grid>
);

const styles = theme => ({
  hero: {
    height: 500,
    backgroundColor: 'grey'
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
