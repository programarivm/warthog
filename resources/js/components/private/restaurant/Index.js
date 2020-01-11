import ApiRestaurantActions from '../../../actions/api/RestaurantActions';
import { Button, ButtonGroup, Container } from 'reactstrap';
import { connect } from 'react-redux';
import Loading from '../../Loading';
import React from 'react';
import ReactTable from 'react-table'
import RestaurantEdit from './Edit';

class RestaurantIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickDelete = this.handleClickDelete.bind(this);
    this.handleClickEdit = this.handleClickEdit.bind(this);
  }

  componentDidMount() {
    this.props.fetchAll();
  }

  handleClickDelete(e,id) {
    if (confirm('Are you sure to delete this item?')) {
      this.props.delete(id)
        .then(() => {
          this.props.fetchAll();
        });
    }
    e.preventDefault();
  }

  handleClickEdit(e,id) {
    this.props.show(id);
    e.preventDefault();
  }

  render() {
    const columns = [
      {
        Header: 'Created at',
        accessor: 'created_at'
      },
      {
        Header: 'Name',
        accessor: 'name'
      },
      {
        Header: 'Description',
        accessor: 'description'
      },
      {
        Header: 'Address',
        accessor: 'address'
      },
      {
        Header: 'Coordinates',
        accessor: 'coordinates',
        Cell: ({ row }) => (
          `${row._original.lat}, ${row._original.lon}`
        )
      },
      {
        Header: 'Actions',
        Cell: ({ row }) => (
          <ButtonGroup>
            <Button outline color="primary" size="sm" onClick={ (e) => this.handleClickEdit(e,row._original.id) }>Edit</Button>
            <Button outline color="primary" size="sm" onClick={ (e) => this.handleClickDelete(e,row._original.id) }>Delete</Button>
          </ButtonGroup>
        )
      }
    ];

    return (
      <Container className="m-3">
        <Loading loading={this.props.ApiRestaurantFetchAllReducer.loading}>
          <ReactTable
            data={this.props.ApiRestaurantFetchAllReducer.data}
            columns={columns}
            minRows={0}
          />
        </Loading>
        <RestaurantEdit />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    delete: (id) => dispatch(ApiRestaurantActions.delete(id)),
    fetchAll: () => dispatch(ApiRestaurantActions.fetchAll()),
    show: (id) => dispatch(ApiRestaurantActions.show(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantIndex);
