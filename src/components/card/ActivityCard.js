import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const ActivityCard = ({ classes }) => (
  <Card className={classes.activityCard}>
    <CardMedia
      className={classes.media}
      image="/static/images/cards/contemplative-reptile.jpg"
      title="Contemplative Reptile"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
        Lambda Marathon
      </Typography>
      <Grid container justify="space-between" alignItems="center">
        <Typography variant="subtitle2">Salt Lake City, Utah</Typography>
        <Typography variant="subtitle2">May 14, 2019</Typography>
      </Grid>
      <Grid container justify="center" alignItems="center">
        <Button className={classes.activityCardButton}>Book Now</Button>
      </Grid>
    </CardContent>
  </Card>
);

const styles = theme => ({
  activityCard: {
    maxWidth: 400,
    minWidth: 350
  },
  media: {
    height: 240
  },
  activityCardButton: {
    background: theme.custom.skyBackground,
    color: `${theme.palette.primary.contrastText}`,
    paddingRight: 30,
    paddingLeft: 30,
    marginTop: `${theme.spacing.unit * 2}px`,
    textTransform: 'uppercase'
  }
});

export default withStyles(styles)(ActivityCard);
