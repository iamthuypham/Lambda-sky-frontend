import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import { withStyles } from '@material-ui/core/styles';
import AuthenticationMenu from './AuthenticationMenu';

class AuthenticationBar extends React.Component {
  state = {
    open: false
  };
  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };
  render() {
    const { classes } = this.props;
    const { open } = this.state;
    return (
      <Grid container justify="flex-end" className={classes.authenticationBar}>
        <Grid item className={classes.authenticationBarCTA}>
          <Button className={classes.authenticationBarButton}>Sign In</Button>
          <Button
            className={classes.authenticationBarButton}
            buttonRef={node => {
              this.anchorEl = node;
            }}
            aria-owns={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={this.handleToggle}
          >
            Register
          </Button>
          <Popper
            className={classes.authenticationMenu}
            open={open}
            anchorEl={this.anchorEl}
            transition
            placement="bottom-end"
          >
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <Paper>
                  <AuthenticationMenu />
                </Paper>
              </Fade>
            )}
          </Popper>
        </Grid>
      </Grid>
    );
  }
}

const styles = theme => ({
  authenticationBar: {
    background: theme.palette.primary.dark,
    opacity: `${theme.custom.skyOpacityPrimary}`,
    paddingTop: `${theme.spacing.unit}px`,
    paddingBottom: `${theme.spacing.unit}px`
  },
  authenticationBarCTA: {
    padding: `0 ${theme.spacing.unit * 3}px`
  },
  authenticationBarButton: {
    color: theme.palette.common.white
  },
  authenticationMenu: {
    zIndex: 1
  }
});

export default withStyles(styles)(AuthenticationBar);
