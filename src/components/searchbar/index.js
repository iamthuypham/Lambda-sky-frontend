import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#661FFF"
  },
  row: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100"
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  destination: {
    padding: 50
  },
  checkin: {
    padding: 50
  },
  icons: {
    display: "flex"
  }
});

function SearchBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <div className={classes.row}>
        <div className={classes.column1}>
          <div className={classes.destination}>
            Destination <br />
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>Destination</Paper>
              </Grid>
            </Grid>
          </div>
          <div className={classes.checkin}>
            Checkin
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
          </div>
        </div>
        <div />
        <div className={classes.icons} />
        <i class="material-icons">flight</i> Add a flight <br />
        <i class="material-icons">directions_car</i> Add a car
      </div>
    </div>
  );
}

export default withStyles(styles)(SearchBar);
