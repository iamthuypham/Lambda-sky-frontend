import React from 'react';

import Hero from '../hero/Hero';
import PageSection from '../utils/PageSection';
import ActivityCard from '../card/ActivityCard';

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
      <div>children component here</div>
    </PageSection>
    <PageSection
      title="What our clients say about us"
      subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    >
      <div>children component here</div>
    </PageSection>
  </div>
);

const styles = theme => ({
  pageSectionContent: {
    marginTop: `${theme.spacing.unit * 5}px`
  }
});

const exampleData = [{ id: 0 }, { id: 1 }, { id: 2 }];

export default withStyles(styles)(Home);
