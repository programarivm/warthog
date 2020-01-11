import ApiRestaurantActions from '../../../actions/api/RestaurantActions';
import { Button, ButtonGroup, Form, Modal, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import { FormGroups } from './FormGroups';
import Loading from '../../Loading';
import React from 'react';
import Validation from '../../Validation';

class RestaurantEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.ApiRestaurantUpdateReducer,
      modal: {
        open: false
      }
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleClickCancel = this.handleClickCancel.bind(this);
    this.handleClickUpdate = this.handleClickUpdate.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.ApiRestaurantShowReducer.record !== this.props.ApiRestaurantShowReducer.record) {
      this.setState({
        ...this.props.ApiRestaurantShowReducer,
        modal: {
          open: true
        }
      });
    }
  }

  handleChange = e => {
    let record = {...this.state.record};
    record[e.target.id] = e.target.value;
    this.setState({record});
  }

  handleClickCancel(e) {
    e.preventDefault();
    this.setState({
      response: [],
      modal: {
        open: false
      }
    });
  }

  handleClickUpdate(e) {
    e.preventDefault();
    this.props.update(this.state.record.id, this.state.record)
      .then((res) => {
        switch (res.status) {
          case 200:
            this.props.fetchAll();
            this.setState({
              response: [],
              modal: {
                open: false
              }
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
      <Modal isOpen={this.state.modal.open}>
        <ModalBody>
          <Form className="form">
            <FormGroups {...this.state.record} handleChange={this.handleChange} />
          </Form>
          <Loading loading={this.props.loading}>
            <Validation messages={this.state.response} />
          </Loading>
        </ModalBody>
        <ModalFooter>
          <ButtonGroup>
            <Button color="primary" onClick={ (e) => this.handleClickUpdate(e) }>Update</Button>
            <Button color="secondary" onClick={ (e) => this.handleClickCancel(e) }>Cancel</Button>
          </ButtonGroup>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAll: () => dispatch(ApiRestaurantActions.fetchAll()),
    update: (id, record) => dispatch(ApiRestaurantActions.update(id, record))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantEdit);
