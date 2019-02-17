import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#661FFF"
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

function SearchBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <div className="destination">
        Destination <br />
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>Destination</Paper>
          </Grid>
        </Grid>
      </div>
      <div className="checkin">Checkin</div>
      <Grid container spacing={24}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
      <div />
    </div>
  );
}

export default withStyles(styles)(SearchBar);
