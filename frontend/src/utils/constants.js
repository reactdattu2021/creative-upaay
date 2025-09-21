export const TASK_STATUSES = {
  TODO: 'todo',
  IN_PROGRESS: 'inProgress',
  DONE: 'done'
};

export const TASK_CATEGORIES = {
  WORK: 'Work',
  PERSONAL: 'Personal',
  URGENT: 'Urgent'
};

export const TASK_PRIORITIES = {
  HIGH: 'High',
  MEDIUM: 'Medium',
  LOW: 'Low'
};

export const FILTER_OPTIONS = {
  CATEGORIES: ['All', ...Object.values(TASK_CATEGORIES)],
  PRIORITIES: ['All', ...Object.values(TASK_PRIORITIES)]
};