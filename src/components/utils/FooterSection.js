import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const FooterSection = ({ classes, title, subtitle, children }) => (
  <Grid
    container
    spacing={32}
    direction="row"
    justify="space-between"
    alignItems="center"
    className={classes.footerSection}
  >
    <Grid item xs={4} className={classes.leftContent}>
      <Typography paragraph={true}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam
      </Typography>
    </Grid>
    <Grid item xs={4} className={classes.rightContent}>
      <Grid container direction="column" justify="center" alignItems="flex-end">
        <Typography variant="subtitle1" className={classes.rightContentTitle}>
          Contact Info
        </Typography>
        <Typography paragraph={true} align="right">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </Typography>
      </Grid>
    </Grid>
  </Grid>
);

const styles = theme => ({
  footerSection: {
    backgroundColor: `${theme.palette.primary.dark}`,
    padding: `${theme.spacing.unit * 5}px ${theme.spacing.percentage}%`
  },
  leftContent: {
    '& p': {
      color: `${theme.palette.primary.contrastText}`
    }
  },
  rightContent: {
    '& h6, p': {
      color: `${theme.palette.primary.contrastText}`
    }
  },
  rightContentTitle: {
    textTransform: 'uppercase'
  }
});

export default withStyles(styles)(FooterSection);
