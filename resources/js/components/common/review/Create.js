import ApiReviewActions from '../../../actions/api/ReviewActions';
import {
  Button, ButtonGroup, Form, FormGroup, Input, Label, Modal, ModalBody
} from 'reactstrap';
import { connect } from 'react-redux';
import { Range } from 'react-range';
import React from 'react';
import ReviewActions from '../../../actions/ReviewActions';
import ReviewState from '../../../states/ReviewState';
import Validation from '../../Validation';

const initialState = Object.assign({}, ReviewState.initial(), {
  response: [],
  modal: {
    open: false
  }
});

class ReviewCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleClickCancel = this.handleClickCancel.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.ReviewReducer.restaurants !== this.props.ReviewReducer.restaurants) {
      this.setState({
        ...this.props.ReviewReducer,
        modal: {
          open: true
        }
      });
    }
  }

  handleChange = e => {
    let record = {...this.state.record};
    switch (e.target.id) {
      case 'restaurant':
        record.restaurant.id = e.target.value;
        break;
      default:
        record[e.target.id] = e.target.value;
        break;
    }
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
      <Modal isOpen={this.state.modal.open}>
        <ModalBody>
          <Validation messages={this.state.response} />
          <Form className="form" onSubmit={ (e) => this.handleSubmitForm(e) }>
            <FormGroup>
              <Label for="restaurant">Select a restaurant:</Label>
              <Input
                type="select"
                name="restaurant"
                id="restaurant"
                value={this.state.record.restaurant.id}
                onChange={this.handleChange}>
                { this.state.restaurants.map( (item, i) => <option key={i} value={item.id}>{item.name}</option> ) }
              </Input>
            </FormGroup>
            <FormGroup>
              <Label>Slide the square sincerely:</Label>
              <Range
                step={1}
                min={0}
                max={10}
                values={this.state.record.points}
                onChange={values => {
                  let newState = Object.assign({}, this.state);
                  newState.record.points = values;
                  this.setState(newState);
                }}
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: '6px',
                      width: '100%',
                      backgroundColor: '#ccc'
                    }}
                  >
                    {children}
                  </div>
                )}
                renderThumb={({ props }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: '25px',
                      width: '25px',
                      backgroundColor: '#999'
                    }}
                  />
                )}
              />
            </FormGroup>
            <FormGroup>
              <Label>Tell us about your opinion:</Label>
              <Input
                type="textarea"
                name="comment"
                id="comment"
                placeholder="In my opinion..."
                value={this.state.record.comment}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <ButtonGroup>
                <Button color="primary">Submit</Button>
                <Button color="secondary" onClick={ (e) => this.handleClickCancel(e) }>Cancel</Button>
              </ButtonGroup>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    create: (record) => dispatch(ApiReviewActions.create(record)),
    fetchAll: () => dispatch(ApiReviewActions.fetchAll())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewCreate);
