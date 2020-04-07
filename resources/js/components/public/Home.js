import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import { Footer } from './Footer';
import { Link } from 'react-router-dom';
import React from 'react';
import './Home.css';

function Home() {
  return (
    <Grid container style={{ margin: 20, padding: 20 }}>
      <Grid item xs={8}>
        <h1>Welcome to Warthog</h1>
        <h5>This is a real-world example SPA: a React GUI interacting with a Laravel API.</h5>
        <hr/>
        <p>Features:</p>
        <ul>
          <li>ACL (access control list)</li>
          <li>JWT authentication</li>
          <li>CRUD implementation</li>
          <li>REST API</li>
          <li>Redux</li>
          <li>Data-driven tests</li>
        </ul>
        <Button variant="contained" color="primary" component={Link} to={'/login'}>Interact now!</Button>
      </Grid>
      <Grid item xs={4}>
        <p>TODO: Display image</p>
      </Grid>
      <Footer />
    </Grid>
  );
}

export { Home };
