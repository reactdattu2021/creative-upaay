import { combineReducers } from 'redux';
import tasksReducer from './tasksReducer';
import filtersReducer from './filtersReducer';

const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer,
});

export default rootReducer;