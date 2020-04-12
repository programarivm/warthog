import React from 'react';
import { Grid } from '@material-ui/core';

function Footer() {
  return (
    <Grid container style={{ margin: 20, padding: 20, listStyleType: 'none' }}>
      <Grid item xs={4}>
        <p>
          <b>Warthog</b><br/>
          Company Name Goes Here Limited,<br/>
          Registered in England and Wales,<br/>
          Company Number: 1234567890
        </p>
      </Grid>
      <Grid item xs={4}>
        <b>Legal</b><br/>
        <ul>
          <li>Terms and Conditions</li>
          <li>Privacy Policy</li>
          <li>Cookies Policy</li>
        </ul>
      </Grid>
      <Grid item xs={4}>
        <b>Social</b><br/>
        <ul>
          <li>Twitter</li>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>YouTube</li>
        </ul>
      </Grid>
    </Grid>
  );
}

export { Footer };
