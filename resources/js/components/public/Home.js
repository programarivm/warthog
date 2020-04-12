import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core'
import { Footer } from './Footer';
import { Link } from 'react-router-dom';
import React from 'react';
import stickyNotes from '../../../images/sticky-notes.jpg';

function Home() {
  return (
    <Grid container style={{ margin: 20, padding: 20 }}>
      <Grid item xs={7}>
        <h3>What's being said about the restaurants in your area?</h3>
        <h5>This is a real-world example SPA: a React GUI interacting with a Laravel API with the following features.</h5>
        <ul>
          <li>ACL (access control list)</li>
          <li>JWT authentication</li>
          <li>CRUD implementation</li>
          <li>REST API</li>
          <li>Redux</li>
          <li>Data-driven tests</li>
        </ul>
        <Button variant="contained" color="primary" component={Link} to={'/login'}>Find out now!</Button>
      </Grid>
      <Grid item xs={5}>
        <img src={stickyNotes} alt="Warthog logo" style={{ maxWidth: 400 }}/>
      </Grid>
      <hr />
      <Footer />
    </Grid>
  );
}

export { Home };
