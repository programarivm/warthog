import ApiReviewActions from '../../../actions/api/ReviewActions';
import { Button, ButtonGroup, Container } from 'reactstrap';
import Can from '../../Can';
import { connect } from 'react-redux';
import Loading from '../../Loading';
import { LoremIpsum } from '../LoremIpsum';
import React from 'react';
import ReactTable from 'react-table';

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickDelete = this.handleClickDelete.bind(this);
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

  render() {
    const columns = [
      {
        Header: 'Created at',
        accessor: 'created_at',
        Cell: ({ row }) => {
          let d = new Date(row._original.created_at);
          return `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`;
        }
      },
      {
        Header: 'User',
        accessor: 'user',
        Cell: ({ row }) => (
          `${row._original.user.firstname}`
        )
      },
      {
        Header: 'Restaurant',
        accessor: 'restaurant',
        Cell: ({ row }) => (
          `${row._original.restaurant.name}`
        )
      },
      {
        Header: 'Comment',
        accessor: 'comment'
      },
      {
        Header: 'Points',
        accessor: 'points'
      }
    ];

    const roleEditorColumns = [
      ...columns,
      {
        Header: 'Actions',
        accessor: 'actions',
        Cell: ({ row }) => (
          <ButtonGroup>
            <Button outline color="primary" size="sm" onClick={ (e) => this.handleClickDelete(e,row._original.id) }>Delete</Button>
          </ButtonGroup>
        )
      }
    ];

    return (
      <Container className="m-3">
        <Loading loading={this.props.loading}>
          <Can I="delete" a="Review">
            <ReactTable
              data={this.props.data}
              columns={roleEditorColumns}
              minRows={0}
            />
          </Can>
          <Can not I="delete" a="Review">
            <ReactTable
              data={this.props.data}
              columns={columns}
              minRows={0}
            />
          </Can>
        </Loading>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return state.ApiReviewFetchAllReducer;
};

const mapDispatchToProps = dispatch => {
  return {
    delete: (id) => dispatch(ApiReviewActions.delete(id)),
    fetchAll: () => dispatch(ApiReviewActions.fetchAll())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex);
