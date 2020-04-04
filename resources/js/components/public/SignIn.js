import ApiAuthActions from '../../actions/api/AuthActions';
import { Button, Divider, Grid, TextField, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import Loading from '../Loading';
import React from 'react';
import Validation from '../Validation';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(e) {
    this.props.login({
      email: e.target.email.value,
      password: e.target.password.value
    });
    e.preventDefault();
  }

  render() {
    return (
      <Grid container style={{ margin: 20, padding: 20 }}>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <Typography component="h1" variant="h5">
            Log in to your account
          </Typography>
          <Loading loading={this.props.loading}>
            <Validation show={true} messages={this.props.response} />
          </Loading>
          <form onSubmit={ (e) => this.handleLogin(e) }>
            <TextField
              required
              fullWidth
              autoFocus
              variant="outlined"
              margin="normal"
              id="email"
              label="Email address"
              name="email"
              autoComplete="email"
            />
            <TextField
              required
              fullWidth
              variant="outlined"
              margin="normal"
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{ marginTop: 10 }}
            >
              Log in
            </Button>
          </form>
          <Divider style={{ margin: 20 }} />
          <p>How to use the demo:</p>
          <ul>
            <li>john@gmail.com as a basic user</li>
            <li>alice@gmail.com as an editor user</li>
            <li>bob@gmail.com as an admin user</li>
          </ul>
          <p>The password for all roles is <code>password</code></p>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return state.ApiAuthReducer;
};

const mapDispatchToProps = dispatch => {
  return {
    login: (credentials) => dispatch(ApiAuthActions.login(credentials))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
