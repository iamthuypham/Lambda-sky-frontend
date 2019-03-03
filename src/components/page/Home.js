import React from 'react';

import Hero from '../hero/Hero';
import PageSection from '../utils/PageSection';
import FooterSection from '../utils/FooterSection';
import ActivityCard from '../card/ActivityCard';
import HotelCard from '../card/HotelCard';
import ReviewCard from '../card/ReviewCard';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const Home = ({ classes }) => (
  <div>
    <Hero />
    <PageSection
      title="The best outdoor activities for you"
      subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    >
      <Grid
        container
        spacing={8}
        direction="row"
        justify="space-around"
        alignItems="center"
        className={classes.pageSectionContent}
      >
        {exampleData.map(activity => (
          <Grid item key={activity.id}>
            <ActivityCard />
          </Grid>
        ))}
      </Grid>
    </PageSection>
    <PageSection
      title="The best offers with room"
      subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    >
      <Grid
        container
        spacing={8}
        direction="row"
        justify="space-around"
        alignItems="center"
        className={classes.pageSectionContent}
      >
        {exampleData1.map(hotel => (
          <Grid item key={hotel.id}>
            <HotelCard />
          </Grid>
        ))}
      </Grid>
    </PageSection>
    <PageSection
      title="What our clients say about us"
      subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    >
      <Grid
        container
        spacing={8}
        direction="row"
        justify="space-around"
        alignItems="center"
        className={classes.pageSectionContent}
      >
        {exampleData.map(activity => (
          <Grid item key={activity.id}>
            <ReviewCard />
          </Grid>
        ))}
      </Grid>
    </PageSection>
    <FooterSection />
  </div>
);

const styles = theme => ({
  pageSectionContent: {
    marginTop: `${theme.spacing.unit * 5}px`
  }
});

const exampleData = [{ id: 0 }, { id: 1 }, { id: 2 }];
const exampleData1 = [{ id: 0 }, { id: 1 }];

export default withStyles(styles)(Home);
