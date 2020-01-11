import AbstractCrudActions from './AbstractCrudActions';
import ApiCrudActionTypes from '../../constants/api/CrudActionTypes';

class UserActions extends AbstractCrudActions {
  constructor() {
    super();
    this.endpoint = '/api/users';
    this.actionTypes = ApiCrudActionTypes;
  }
}

export default new UserActions();
