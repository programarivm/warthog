import ApiUserActions from '../../../actions/api/UserActions';
import { Button, ButtonGroup, Container } from 'reactstrap';
import Can from '../../Can';
import { connect } from 'react-redux';
import Loading from '../../Loading';
import React from 'react';
import ReactTable from 'react-table';
import UserEdit from './Edit';

class UserIndex extends React.Component {
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
        Header: 'First name',
        accessor: 'firstname'
      },
      {
        Header: 'Surname',
        accessor: 'surname'
      },
      {
        Header: 'Date of birth',
        accessor: 'date_of_birth'
      },
      {
        Header: 'Phone number',
        accessor: 'phone_number'
      },
      {
        Header: 'Email',
        accessor: 'email'
      }
    ];

    const roleAdminColumns = [
      ...columns,
      {
        Header: 'Actions',
        accessor: 'actions',
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
        <Loading loading={this.props.ApiUserFetchAllReducer.loading}>
          <div>
            <Can I="store" a="User">
              <ReactTable
                data={this.props.ApiUserFetchAllReducer.data}
                columns={roleAdminColumns}
                minRows={0}
              />
            </Can>
            <Can not I="store" a="User">
              <ReactTable
                data={this.props.ApiUserFetchAllReducer.data}
                columns={columns}
                minRows={0}
              />
            </Can>
          </div>
        </Loading>
        <UserEdit />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    delete: (id) => dispatch(ApiUserActions.delete(id)),
    fetchAll: () => dispatch(ApiUserActions.fetchAll()),
    show: (id) => dispatch(ApiUserActions.show(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserIndex);
