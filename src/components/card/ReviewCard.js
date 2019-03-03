import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const ReviewCard = ({ classes }) => (
  <Card className={classes.reviewCard}>
    <CardMedia
      className={classes.media}
      image="/static/images/cards/contemplative-reptile.jpg"
      title="Contemplative Reptile"
    />
    <div className={classes.cardIcon}>Icon</div>
    <div className={classes.source}>
      <Typography variant="subtitle1" className={classes.author}>
        John Cena
      </Typography>
      <Typography variant="subtitle2">June 24, 2018</Typography>
    </div>
    <CardContent className={classes.cardContent}>
      <Typography variant="subtitle1">Best Triathlon Ever!</Typography>
      <Typography variant="subtitle2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
      </Typography>
    </CardContent>
  </Card>
);

const styles = theme => ({
  reviewCard: {
    maxWidth: 400,
    minWidth: 350,
    position: 'relative',
    height: 400,
    overflow: 'visible'
  },
  media: {
    height: '100%'
  },
  cardContent: {
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: `${theme.palette.primary.main}`,
    opacity: 0.8,
    '&> h6': {
      color: `${theme.palette.primary.contrastText}`
    },
    height: 120
  },
  source: {
    position: 'absolute',
    bottom: 120,
    left: `${theme.spacing.unit * 2}px`,
    fontFamily: `${theme.typography.fontFamily}`,
    backgroundColor: `${theme.palette.primary.contrastText}`,
    zIndex: 1,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    boxShadow: `${theme.custom.skyBoxShadow}`
  },
  author: {
    textTransform: 'uppercase',
    fontWeight: 600
  },
  cardIcon: {
    zIndex: 1,
    position: 'absolute',
    top: `-${theme.spacing.unit * 3}px`,
    left: `${theme.spacing.unit * 2}px`,
    backgroundColor: `${theme.palette.secondary.dark}`,
    padding: `${theme.spacing.unit * 2}px`,
    height: `${theme.spacing.unit * 6}px`,
    width: `${theme.spacing.unit * 6}px`,
    borderRadius: 4
  }
});

export default withStyles(styles)(ReviewCard);
