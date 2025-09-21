import { createStore } from 'redux';
import rootReducer from './reducers';

// Load state from localStorage
const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('creative-upaay-dashboard-state');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (error) {
    console.warn('Error loading from localStorage:', error);
    return undefined;
  }
};

// Save state to localStorage
const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('creative-upaay-dashboard-state', serializedState);
  } catch (error) {
    console.warn('Error saving to localStorage:', error);
  }
};

// Create store with persisted state
const store = createStore(
  rootReducer,
  loadFromLocalStorage()
);

// Subscribe to store changes and save to localStorage
store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export default store;