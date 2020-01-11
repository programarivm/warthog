import ApiAuthActionTypes from '../../constants/api/AuthActionTypes';

class AuthActions {
	constructor() {
		this.endpoint = '/api/auth';
		this.actionTypes = ApiAuthActionTypes;
	}

	login(credentials) {
		return dispatch => {
			return fetch(process.env.MIX_APP_URL + this.endpoint + '/login', {
				method: 'POST',
				credentials: 'include',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(credentials)
			}).then((res) => {
				switch (res.status) {
					case 204:
						dispatch({ type: this.actionTypes.LOGIN_204 });
						break;
					case 401:
						dispatch({ type: this.actionTypes.LOGIN_401 });
						break;
					default:
						dispatch({ type: this.actionTypes.LOGIN_ERROR });
						break;
				}
				return res;
			});
		}
	}

	logout() {
		return dispatch => {
			return fetch(process.env.MIX_APP_URL + this.endpoint + '/logout', {
				method: 'POST',
				credentials: 'include',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				}
			}).then((res) => {
				switch (res.status) {
					case 204:
						dispatch({ type: this.actionTypes.LOGOUT_204 });
						break;
					case 401:
						dispatch({ type: this.actionTypes.LOGOUT_401 });
						break;
					default:
						dispatch({ type: this.actionTypes.LOGOUT_ERROR });
						break;
				}
				return res;
			});
		}
	}
}

export default new AuthActions();
