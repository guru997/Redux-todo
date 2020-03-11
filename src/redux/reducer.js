import { ADD_TASK, DELETE_TASK, EDIT_TASK } from "./type";

import { combineReducers } from "redux";

const taskReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      state = state.concat(action.payload);
      break;
    //console.log(state);
    case DELETE_TASK:
      state = state.slice();
      state.splice(action.payload, 1);
      break;
    case EDIT_TASK:
      state = state.splice(state.length, action.id, action.value);
      return { ...state, state };
  }
  return state;
};

export default combineReducers({
  tasks: taskReducer
});
