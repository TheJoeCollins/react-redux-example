import { actionTypes } from "./actionTypes";
import friendsData from "../../../src/friendData.json";

console.log(friendsData);
// should always start with declaring the inital state of the reducer
const initialState = {
  friends: [],
  error: null
};

// This is the reducer and the name given is important for when you combine reducers
// It takes a state and an action which are the actions you give to dispatch
export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_FRIEND:
      return {
        ...state,
        friends: [...state.friends, action.payload],
        error: null
      };

    case actionTypes.LOAD_DATA:
      return {
        ...state,
        friends: [...friendsData.friends]
      };
    case actionTypes.CLEAR_FRIENDS_LIST:
      return {
        ...state,
        friends: []
      };
    case actionTypes.ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
