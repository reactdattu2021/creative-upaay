import {
  ADD_TASK,
  UPDATE_TASK,
  DELETE_TASK,
  MOVE_TASK
} from '../types/actionTypes';

export const addTask = (taskData) => ({
  type: ADD_TASK,
  payload: taskData
});

export const updateTask = (id, updates) => ({
  type: UPDATE_TASK,
  payload: { id, updates }
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: { id }
});

export const moveTask = (id, newStatus) => ({
  type: MOVE_TASK,
  payload: { id, newStatus }
});