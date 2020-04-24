import React from 'react';
import { Grid, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import EmojiFoodBeverage from '@material-ui/icons/EmojiFoodBeverageTwoTone';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LockIcon from '@material-ui/icons/LockTwoTone';
import SubjectIcon from '@material-ui/icons/SubjectTwoTone';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

function Footer() {
  return (
    <Grid container style={{ marginTop: 90, padding: 25, backgroundColor: '#e8e8e8' }}>
      <Grid item xs={4}>
        <p>
          <b>Warthog</b><br/>
          Company Name Goes Here Limited,<br/>
          Registered in England and Wales,<br/>
          Company Number: 1234567890
        </p>
      </Grid>
      <Grid item xs={4}>
        <List component="nav" aria-label="legal">
          <ListItem button>
            <ListItemIcon>
              <SubjectIcon />
            </ListItemIcon>
            <ListItemText primary="Terms and Conditions" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <LockIcon />
            </ListItemIcon>
            <ListItemText primary="Privacy Policy" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <EmojiFoodBeverage />
            </ListItemIcon>
            <ListItemText primary="Cookies Policy" />
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={4}>
        <List component="nav" aria-label="social">
          <ListItem button>
            <ListItemIcon>
              <TwitterIcon />
            </ListItemIcon>
            <ListItemText primary="Twitter" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <FacebookIcon />
            </ListItemIcon>
            <ListItemText primary="Facebook" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InstagramIcon />
            </ListItemIcon>
            <ListItemText primary="Instagram" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <YouTubeIcon />
            </ListItemIcon>
            <ListItemText primary="YouTube" />
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
}

export { Footer };
