import { anyTypes } from "../constants/action-types";

export const refreshStore = (current) => (dispatch) => {
	dispatch({
		type: anyTypes.REFRESH_STORE,
		current,
	});
};