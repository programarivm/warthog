import { connect } from 'react-redux';
import PrivateApp from './components/private/App';
import PublicApp from './components/public/App';
import React, { Component } from 'react';
import './Warthog.css';

class Warthog extends Component {
  render() {
    return (
      <div className="Warthog">
        { this.props.session.role ? <PrivateApp /> : <PublicApp /> }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state.ApiAuthReducer;
};

export default connect(mapStateToProps, null)(Warthog);
