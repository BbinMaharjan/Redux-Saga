import { SET_USER } from "../../utilities/constants/actionTypes";

const initialState = {
  userList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      const { user } = action;
      return { ...state, userList: user };
    default:
      return state;
  }
};
