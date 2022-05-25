import { SET_USER } from "../../utilities/constants/actionTypes";

const initialState = {
  user: [],
};

export default function UserReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      const { user } = action;
      return { ...state, user };
    default:
      return state;
  }
}
