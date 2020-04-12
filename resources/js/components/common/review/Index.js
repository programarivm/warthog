import ApiReviewActions from '../../../actions/api/ReviewActions';
import { Grid, IconButton, Paper, Table, TableBody, TableCell,
  TableContainer, TableFooter, TableHead, TablePagination, TableRow } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Can from '../../Can';
import { connect } from 'react-redux';
import Loading from '../../Loading';
import { LoremIpsum } from '../LoremIpsum';
import React from 'react';

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      rowsPerPage: 25
    };
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

  handleChangePage = (e, newPage) => {
    this.setState({ page: newPage });
  };

  tablePaginationActions(props) {
    const theme = useTheme();

    const classes = useStyles1();

    const { count, page, rowsPerPage, onChangePage } = props;

    const handleFirstPageButtonClick = (event) => {
      onChangePage(event, 0);
    };

    const handleBackButtonClick = (event) => {
      onChangePage(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
      onChangePage(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
      onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
      <div className={classes.root}>
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="first page"
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="last page"
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </div>
    );
  }

  render() {
    return (
      <Grid container>
        <Loading loading={this.props.loading}>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell>User</TableCell>
                    <TableCell>Restaurant</TableCell>
                    <TableCell>Comment</TableCell>
                    <TableCell align="right">Points</TableCell>
                    <Can I="delete" a="Review">
                      <TableCell></TableCell>
                    </Can>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.props.data ? this.props.data.slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage).map((row, i) => {
                    let d = new Date(row.created_at);
                    return <TableRow key={i}>
                      <TableCell align="right">{d.getDate()}/{d.getMonth()+1}/{d.getFullYear()}</TableCell>
                      <TableCell>{row.user ? row.user.firstname : null}</TableCell>
                      <TableCell>{row.restaurant ? row.restaurant.name : null}</TableCell>
                      <TableCell>{row.comment}</TableCell>
                      <TableCell align="right">{row.points}</TableCell>
                      <Can I="delete" a="Review">
                        <TableCell align="right">
                          <IconButton
                            aria-label="delete"
                            color="secondary"
                            onClick={ (e) => this.handleClickDelete(e, row.id) }
                          >
                            <DeleteIcon />
                          </IconButton>
                        </TableCell>
                      </Can>
                    </TableRow>
                  }) : null }
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TablePagination
                      rowsPerPageOptions={[]}
                      rowsPerPage={this.state.rowsPerPage}
                      count={this.props.data ? this.props.data.length : 0}
                      page={this.state.page}
                      onChangePage={this.handleChangePage}
                      ActionsComponent={this.tablePaginationActions}
                    />
                  </TableRow>
                </TableFooter>
              </Table>
            </TableContainer>
        </Loading>
      </Grid>
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
