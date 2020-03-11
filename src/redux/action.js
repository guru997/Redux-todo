import { ADD_TASK, DELETE_TASK, EDIT_TASK } from "./type";

export function addtask(task) {
  return {
    type: ADD_TASK,
    payload: task
  };
}

export function deletetask(id) {
  return {
    type: DELETE_TASK,
    payload: id
  };
}

export function edittask(id, value) {
  return {
    type: EDIT_TASK,
    id,
    value
  };
}
