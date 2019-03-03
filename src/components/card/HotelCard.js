import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const HotelCard = ({ classes }) => (
  <Card className={classes.hotelCard}>
    <Grid container direction="row" justify="center" alignItems="flex-start">
      <Grid item xs={8}>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
      </Grid>
      <div className={classes.location}>Tropical Safari</div>
      <Grid item xs={4}>
        <CardContent>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={6}>
              <Typography gutterBottom variant="h5" color="secondary">
                $105
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom variant="h6">
                per night
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="h6">Customer Review</Typography>
          <Typography variant="subtitle2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut
          </Typography>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={6}>
              <Typography gutterBottom variant="subtitle2">
                Share
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom variant="subtitle2">
                Favorite
              </Typography>
            </Grid>
          </Grid>
          <Button>Read More</Button>
        </CardContent>
      </Grid>
    </Grid>
  </Card>
);

const styles = theme => ({
  hotelCard: {
    maxWidth: 600,
    minWidth: 500,
    position: 'relative'
  },
  location: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    backgroundColor: `${theme.palette.secondary.main}`,
    color: `${theme.palette.secondary.contrastText}`,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
  }
});

export default withStyles(styles)(HotelCard);
