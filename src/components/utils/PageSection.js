import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const PageSection = ({ classes, title, subtitle, children }) => (
  <div className={classes.pageSection}>
    <Grid
      container
      spacing={32}
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.pageSectionDescription}
    >
      <Grid item xs={10}>
        <Typography variant="h3">{title}</Typography>
      </Grid>
      <Grid item xs={10}>
        <Typography variant="h4">{subtitle}</Typography>
      </Grid>
    </Grid>
    {children}
  </div>
);

const styles = theme => ({
  pageSection: {
    height: '90vh',
    paddingTop: `${theme.spacing.unit * 5}px`,
    paddingBottom: `${theme.spacing.unit * 5}px`
  }
});

export default withStyles(styles)(PageSection);
