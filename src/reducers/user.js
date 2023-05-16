import { userTypes } from "../constants/action-types";
import { myReducerPersist } from "../store/managerLocalStorage";

const initialState = {
  user: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userTypes.SET_USER:
      return {
        ...state,
        user: action.data,
      };
    case userTypes.REMOVE_USER:
      return initialState;
    default:
      return state;
  }
};

export default myReducerPersist({ key: "pila-user" }, userReducer);
