import ApiAuthActions from '../../actions/api/AuthActions';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import React from 'react';

class SignOut extends React.Component {
  componentDidMount() {
    this.props.logout();
  }

  render() {
    return (
      <Container className="mt-5 mb-5">
        <p>Signing out...</p>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(ApiAuthActions.logout())
  };
};

export default connect(null, mapDispatchToProps)(SignOut);
