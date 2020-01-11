import ApiRestaurantActions from '../../../actions/api/RestaurantActions';
import { Button, ButtonGroup, Form, FormGroup, Jumbotron } from 'reactstrap';
import { connect } from 'react-redux';
import { FormGroups } from './FormGroups';
import Loading from '../../Loading';
import React from 'react';
import RestaurantState from '../../../states/RestaurantState';
import Validation from '../../Validation';

const initialState = Object.assign({}, RestaurantState.initial(), { response: [] });

class RestaurantCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleClickCancel = this.handleClickCancel.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handleChange = e => {
    let record = {...this.state.record};
    record[e.target.id] = e.target.value;
    this.setState({record});
  }

  handleClickCancel(e) {
    this.setState({
      ...initialState,
      response: []
    });
    e.preventDefault();
  }

  handleSubmitForm(e) {
    e.preventDefault();
    this.props.create(this.state.record)
      .then((res) => {
        switch (res.status) {
          case 201:
            this.props.fetchAll();
            this.setState({
              ...initialState,
              response: []
            });
            break;
          case 422:
            this.setState({ response: res.errors });
            break;
        }
      });
  }

  render() {
    return (
      <Jumbotron className="mt-3">
        <Form className="form" onSubmit={ (e) => this.handleSubmitForm(e) }>
          <FormGroups {...this.state.record} handleChange={this.handleChange} />
          <FormGroup>
            <ButtonGroup>
              <Button color="primary">Add restaurant</Button>
              <Button color="secondary" onClick={ (e) => this.handleClickCancel(e) }>Cancel</Button>
            </ButtonGroup>
          </FormGroup>
        </Form>
        <Loading loading={this.props.loading}>
          <Validation messages={this.state.response} />
        </Loading>
      </Jumbotron>
    );
  }
}

const mapStateToProps = state => {
  return state.ApiRestaurantCreateReducer;
};

const mapDispatchToProps = dispatch => {
  return {
    create: (record) => dispatch(ApiRestaurantActions.create(record)),
    fetchAll: () => dispatch(ApiRestaurantActions.fetchAll())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantCreate);
