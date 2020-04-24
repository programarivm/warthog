import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core'
import { Footer } from './Footer';
import { Link } from 'react-router-dom';
import React from 'react';
import stickyNotes from '../../../images/sticky-notes.jpg';

function Home() {
  return (
    <Grid container style={{ marginTop: 40 }}>
      <Grid item xs={2}></Grid>
      <Grid container justify="center" xs={7}>
        <h2 style={{ marginBottom: 20 }}>What's being said about the restaurants in your area?</h2>
        <h5>
          This is a real-world example SPA, a React GUI interacting with a Laravel API with the following features: ACL (access control list),
          JWT authentication, CRUD implementation, REST API, Redux, Data-driven tests.
        </h5>
        <Grid container justify="center" style={{ margin: 20 }}>
          <img src={stickyNotes} alt="Warthog logo" style={{ marginTop: 15, maxWidth: 400 }}/>
        </Grid>
        <Grid container justify="center">
          <Button variant="contained" color="primary" component={Link} to={'/login'}>Find out now!</Button>
        </Grid>
      </Grid>
      <Grid item xs={2}></Grid>
      <hr />
      <Footer />
    </Grid>
  );
}

export { Home };
