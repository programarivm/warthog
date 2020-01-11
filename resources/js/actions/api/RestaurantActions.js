import AbstractCrudActions from './AbstractCrudActions';
import ApiCrudActionTypes from '../../constants/api/CrudActionTypes';

class RestaurantActions extends AbstractCrudActions {
  constructor() {
    super();
    this.endpoint = '/api/restaurants';
    this.actionTypes = ApiCrudActionTypes;
  }
}

export default new RestaurantActions();
