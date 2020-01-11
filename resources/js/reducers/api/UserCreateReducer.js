import CrudReducer from './CrudReducer';
import UserState from '../../states/UserState';

const initialState = Object.assign({}, UserState.initial(), {
  response: [],
  loading: false
});

export default (state = initialState, action) => {
  return (new CrudReducer(initialState)).create(state, action);
};
