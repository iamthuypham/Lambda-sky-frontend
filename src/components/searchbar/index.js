import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { wrap } from "module";

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
  doubleColumn: {
    display: "flex",
    flex: 2
  },
  column1: {
    width: 900,
    marginLeft: 20
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
    padding: 50,
    flexWrap: wrap
  },
  column2: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    flexBasis: 100,
    marginTop: 45,
    marignLeft: 50
  },
  icons: {
    // display: "flex"
  },

  buttonWrapper: {
    marginTop: 200,
    marginLeft: 50
  },

  button: {
    backgroundColor: "gold",
    width: 100
  },
  label: {
    verticalAlign: "top"
  }
});

function SearchBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <div className={classes.row}>
        <div className={classes.doubleColumn}>
          <div className={classes.column1}>
            <div className={classes.destination}>
              <Grid container spacing={24}>
                <Grid item xs={12}>
                  <label for="destination">Destination:</label>
                  <Paper className={classes.paper}>Destination</Paper>
                </Grid>
              </Grid>
            </div>
            <div className={classes.checkin}>
              <Grid container spacing={24}>
                <Grid item xs={3}>
                  <label for="destination">Check-in</label>
                  <Paper className={classes.paper}>mm/dd/yyyy</Paper>
                </Grid>
                <Grid item xs={3}>
                  <label for="destination">Check-out</label>
                  <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={2}>
                  <label for="destination">Rooms</label>
                  <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={2}>
                  <label for="destination">Adults(18+)</label>
                  <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={2}>
                  <label for="destination">Children</label>
                  <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
              </Grid>
            </div>
          </div>
          <div />
          <div className={classes.column2}>
            <div className={classes.icons} />
            <div>
              <i class="material-icons">flight</i> Add a flight
            </div>
            <div>
              <i class="material-icons">directions_car</i> Add a car
            </div>
            <div className={classes.buttonWrapper}>
              <Button className={classes.button}>Search</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(SearchBar);
