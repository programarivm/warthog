import ReviewActionTypes from '../constants/ReviewActionTypes';

const headers = {
	'Accept': 'application/json',
	'Content-Type': 'application/json'
};

const messages = {
	error: 'Whoops! Sorry there was an error, please try again later.'
};

class ReviewActions {
	click() {
		return dispatch => {
			return fetch(process.env.MIX_APP_URL + '/api/restaurants', {
				method: 'GET',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				}
			})
			.then((res) => {
				switch (res.status) {
					case 200:
						res.json().then((data) => {
							dispatch({
								type: ReviewActionTypes.CLICK_OK,
								restaurants: data
							});
						});
						break;
					default:
						dispatch({
							type: ReviewActionTypes.CLICK_ERROR,
							messages: [messages.error]
						});
						break;
				}
				return res;
			});
		}
	}
}

export default new ReviewActions();
