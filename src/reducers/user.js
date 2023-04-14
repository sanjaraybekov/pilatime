import { userTypes } from "../constants/action-types";
import { myReducerPersist } from "../store/managerLocalStorage";

const initialState = {
	user: {},
	tokenData: {},
	form: {},
	location: {}
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case userTypes.SET_USER_FORM:
			return {
				...state,
				form: action.form
			};
		case userTypes.SET_USER:
			return {
				...state,
				user: action.data,
				tokenData: action.token
			};
		case userTypes.SET_USER_ADDRESSES:
			const address = state.user.addresses.filter(
				a => a.id !== action.data.id
			);
			return {
				...state,
				user: {
					...state.user,
					addresses: [action.data, ...address]
				}
			};
		case userTypes.USER_LOCATION:
			return {
				...state,
				location: action.location
			};
		case userTypes.REMOVE_USER:
			return initialState;
		default:
			return state;
	}
};

export default myReducerPersist({ key: "user" }, userReducer);
