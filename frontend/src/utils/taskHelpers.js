export const getPriorityColor = (priority) => {
  switch (priority) {
    case 'High':
      return 'bg-red-100 text-red-800 border-red-200';
    case 'Medium':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'Low':
      return 'bg-green-100 text-green-800 border-green-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

export const getCategoryColor = (category) => {
  switch (category) {
    case 'Work':
      return 'bg-blue-100 text-blue-800';
    case 'Personal':
      return 'bg-purple-100 text-purple-800';
    case 'Urgent':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export const getStatusColor = (status) => {
  switch (status) {
    case 'todo':
      return 'bg-gray-100';
    case 'inProgress':
      return 'bg-blue-100';
    case 'done':
      return 'bg-green-100';
    default:
      return 'bg-gray-100';
  }
};

export const getStatusTitle = (status) => {
  switch (status) {
    case 'todo':
      return 'To Do';
    case 'inProgress':
      return 'In Progress';
    case 'done':
      return 'Done';
    default:
      return status;
  }
};

export const filterTasks = (tasks, filters) => {
  return tasks.filter(task => {
    const matchesCategory = filters.category === 'All' || task.category === filters.category;
    const matchesPriority = filters.priority === 'All' || task.priority === filters.priority;
    const matchesSearch = 
      task.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      task.description.toLowerCase().includes(filters.search.toLowerCase());
    
    return matchesCategory && matchesPriority && matchesSearch;
  });
};