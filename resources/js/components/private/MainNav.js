import { AppBar, Button, ButtonGroup, IconButton, Toolbar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Can from '../Can';
import { Link, NavLink, Route } from 'react-router-dom';
import React from 'react';
import Restaurants from './Restaurants';
import Reviews from '../common/Reviews';
import SignOut from './SignOut';
import Users from './Users';
import logo from '../../../images/logo.png';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  menuOption: {
    marginRight: theme.spacing(2),
    color: '#fff',
    '&:hover': {
       color: '#fff',
    },
  },
  buttonGroup: {
    backgroundColor: '#fff',
  },
});

class MainNav extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <NavLink tag={Link} to="/home" className={classes.menuOption}>
                <img src={logo} alt="Warthog logo" />
              </NavLink>
            </IconButton>
            <NavLink tag={NavLink} to="/reviews" activeClassName="active" className={classes.menuOption}>Reviews</NavLink>
            <Can I="index" a="User">
              <NavLink tag={NavLink} to="/users" activeClassName="active" className={classes.menuOption}>Users</NavLink>
            </Can>
            <Can I="update" a="Restaurant">
              <NavLink tag={NavLink} to="/restaurants" activeClassName="active" className={classes.menuOption}>Restaurants</NavLink>
            </Can>
            <ButtonGroup size="small" aria-label="small outlined button group" className={classes.buttonGroup}>
              <Button>
                <NavLink tag={Link} to="/logout">Sign out</NavLink>
              </Button>
            </ButtonGroup>
          </Toolbar>
        </AppBar>
        <Route
          path="/reviews"
          render={(props) => <Reviews {...props} />}
        />
        <Route
          path="/users"
          render={(props) => <Users {...props} />}
        />
        <Route
          path="/restaurants"
          render={(props) => <Restaurants {...props} />}
        />
        <Route
          path="/logout"
          render={(props) => <SignOut {...props} />}
        />
      </div>
    );
  }
}

export default withStyles(styles)(MainNav);
