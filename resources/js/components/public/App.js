import CookieConsent from 'react-cookie-consent';
import CssBaseline from "@material-ui/core/CssBaseline";
import MainNav  from '@/components/public/MainNav';
import React from 'react';
import { withRouter } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    switch (this.props.location.pathname) {
      case '/logout':
        this.props.history.push('/');
        break;
      default:
        this.props.history.push(this.props.location.pathname);
        break;
    }
  }

  render() {
    return (
      <div>
        <CssBaseline />
        <MainNav />
        <CookieConsent>
          Cookies? Mmm, they are delicious! However this website does not collect personal data through third-party cookies.
        </CookieConsent>
      </div>
    );
  }
}

export default withRouter(App);
