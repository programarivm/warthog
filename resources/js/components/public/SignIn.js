import ApiAuthActions from '../../actions/api/AuthActions';
import {
  Button, Card, CardBody, CardFooter, CardHeader, Col, Container, Form, FormGroup, Input, Row
} from 'reactstrap';
import { connect } from 'react-redux';
import Loading from '../Loading';
import React from 'react';
import Validation from '../Validation';
import './SignIn.css';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(e) {
    this.props.login({
      email: e.target.email.value,
      password: e.target.password.value
    });
    e.preventDefault();
  }

  render() {
    return (
      <Container className="SignIn mt-5">
        <Row>
          <Col lg="3"></Col>
          <Col lg="6">
            <Card>
              <CardHeader className="bg-white">
                <h5 className="text-center">Log in to your account</h5>
              </CardHeader>
              <CardBody className="d-flex justify-content-center">
                <Form className="form" onSubmit={ (e) => this.handleLogin(e) }>
                  <Loading loading={this.props.loading}>
                    <Validation show={true} messages={this.props.response} />
                  </Loading>
                  <FormGroup>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email address"
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      required
                    />
                  </FormGroup>
                  <Button color="primary" block>Log in</Button>
                </Form>
              </CardBody>
              <CardFooter className="text-muted">
                <p>How to use the demo:</p>
                <ul>
                  <li>john@gmail.com as a basic user</li>
                  <li>alice@gmail.com as an editor user</li>
                  <li>bob@gmail.com as an admin user</li>
                </ul>
                <p>The password for all roles is password</p>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3"></Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return state.ApiAuthReducer;
};

const mapDispatchToProps = dispatch => {
  return {
    login: (credentials) => dispatch(ApiAuthActions.login(credentials))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
