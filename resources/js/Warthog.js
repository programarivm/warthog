import ability from './ability';
import abilityRules from '../../storage/ability-rules.json';
import { connect } from 'react-redux';
import PrivateApp from './components/private/App';
import PublicApp from './components/public/App';
import React, { Component } from 'react';
import Session from './Session';
import './Warthog.css';

class Warthog extends Component {
  componentDidMount() {
    if (Session.get()) {
      ability.update(abilityRules[Session.get().role]);
    }
  }

  render() {
    return (
      <div className="Warthog">
        { this.props.session.role || Session.get().role ? <PrivateApp /> : <PublicApp /> }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state.ApiAuthReducer;
};

export default connect(mapStateToProps, null)(Warthog);
