import { addResourceToCustomer } from "@api/user";
import { userTypes } from "../constants/action-types";

export const setLoginData = data => dispatch => {
	dispatch({
		type: userTypes.SET_LOGIN_DATA,
		payload: data
	});
};

export const setUserForm = form => dispatch => {
	dispatch({
		type: userTypes.SET_USER_FORM,
		form: form
	});
};

export const setUserData = (data, token) => dispatch => {
	addResourceToCustomer(token.token);
	dispatch({
		type: userTypes.SET_USER,
		data: data,
		token: token
	});
};

export const setUserAddresses = address => dispatch => {
	dispatch({
		type: userTypes.SET_USER_ADDRESSES,
		data: address
	});
};

export const setUserLocation = data => dispatch => {
	dispatch({
		type: userTypes.USER_LOCATION,
		location: data
	});
};

export const logoutUser = () => dispatch => {
	dispatch({
		type: userTypes.REMOVE_USER
	});
};
