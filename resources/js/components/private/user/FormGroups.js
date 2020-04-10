import { FormGroup, TextField } from '@material-ui/core';
import React from 'react';

class FormGroups extends React.Component {
  render() {
    return (
      <div>
        <FormGroup>
          <TextField
            required
            fullWidth
            id="firstname"
            label="First name"
            name="firstname"
            margin="normal"
            value={this.props.firstname}
            onChange={this.props.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <TextField
            required
            fullWidth
            id="surname"
            label="Surname"
            name="surname"
            margin="normal"
            value={this.props.surname}
            onChange={this.props.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <TextField
            required
            fullWidth
            id="date_of_birth"
            label="Date of birth"
            name="date_of_birth"
            type="date"
            margin="normal"
            value={this.props.date_of_birth}
            onChange={this.props.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <TextField
            required
            fullWidth
            id="phone_number"
            label="Phone number"
            name="phone_number"
            margin="normal"
            value={this.props.phone_number}
            onChange={this.props.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <TextField
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            margin="normal"
            value={this.props.email}
            onChange={this.props.handleChange}
          />
        </FormGroup>
      </div>
    );
  }
}

export { FormGroups };
