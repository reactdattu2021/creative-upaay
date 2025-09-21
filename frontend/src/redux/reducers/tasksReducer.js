import {
  ADD_TASK,
  UPDATE_TASK,
  DELETE_TASK,
  MOVE_TASK
} from '../types/actionTypes';

// Initial tasks data
const initialTasks = [
  {
    id: 1,
    title: 'Design System Updates',
    description: 'Update the design system components and documentation',
    status: 'todo',
    category: 'Work',
    priority: 'High',
    dueDate: '2025-09-25',
    createdAt: '2025-09-20'
  },
  {
    id: 2,
    title: 'Team Meeting Preparation',
    description: 'Prepare agenda and materials for weekly team sync',
    status: 'inProgress',
    category: 'Work',
    priority: 'Medium',
    dueDate: '2025-09-22',
    createdAt: '2025-09-19'
  },
  {
    id: 3,
    title: 'Code Review',
    description: 'Review pull requests from the development team',
    status: 'done',
    category: 'Work',
    priority: 'Low',
    dueDate: '2025-09-21',
    createdAt: '2025-09-18'
  }
];

const initialState = {
  items: initialTasks,
  loading: false,
  error: null
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        items: [...state.items, {
          ...action.payload,
          id: Date.now(),
          createdAt: new Date().toISOString().split('T')[0]
        }]
      };

    case UPDATE_TASK:
      return {
        ...state,
        items: state.items.map(task =>
          task.id === action.payload.id
            ? { ...task, ...action.payload.updates }
            : task
        )
      };

    case DELETE_TASK:
      return {
        ...state,
        items: state.items.filter(task => task.id !== action.payload.id)
      };

    case MOVE_TASK:
      return {
        ...state,
        items: state.items.map(task =>
          task.id === action.payload.id
            ? { ...task, status: action.payload.newStatus }
            : task
        )
      };

    default:
      return state;
  }
};

export default tasksReducer;