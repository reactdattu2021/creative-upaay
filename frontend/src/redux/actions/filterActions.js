import {
  SET_CATEGORY_FILTER,
  SET_PRIORITY_FILTER,
  SET_SEARCH_FILTER,
  CLEAR_FILTERS
} from '../types/actionTypes';

export const setCategoryFilter = (category) => ({
  type: SET_CATEGORY_FILTER,
  payload: category
});

export const setPriorityFilter = (priority) => ({
  type: SET_PRIORITY_FILTER,
  payload: priority
});

export const setSearchFilter = (search) => ({
  type: SET_SEARCH_FILTER,
  payload: search
});

export const clearFilters = () => ({
  type: CLEAR_FILTERS
});