import { actionTypes } from "./actionTypes";

// Contains all the actions that will be passed to dispatch

// Count is just for future use, we can easily delete objects using this simple ID
// Count is simply increased with each new user
var count = 1;

//Logic To add friend, the return is the information that is passed to dispatch
// It must be an object with at a MINIMUIM a  type value
export const addFriend = (firstname, lastname) => {
  let user = {
    id: count,
    firstname: firstname,
    lastname: lastname
  };
  count++;
  return {
    type: actionTypes.ADD_FRIEND,
    payload: user
  };
};

//Simple Actions to Handle Errors
export const error = message => {
  return {
    type: actionTypes.ERROR,
    payload: message
  };
};

export const loadDummyData = () => {
  return {
    type: actionTypes.LOAD_DATA
  };
};

export const clearFriendsList = () => {
  return {
    type: actionTypes.CLEAR_FRIENDS_LIST
  };
};
