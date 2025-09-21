import {
  SET_CATEGORY_FILTER,
  SET_PRIORITY_FILTER,
  SET_SEARCH_FILTER,
  CLEAR_FILTERS
} from '../types/actionTypes';

const initialState = {
  category: 'All',
  priority: 'All',
  search: ''
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY_FILTER:
      return {
        ...state,
        category: action.payload
      };

    case SET_PRIORITY_FILTER:
      return {
        ...state,
        priority: action.payload
      };

    case SET_SEARCH_FILTER:
      return {
        ...state,
        search: action.payload
      };

    case CLEAR_FILTERS:
      return initialState;

    default:
      return state;
  }
};

export default filtersReducer;