import React from 'react';
import { Plus, Bell, User, Home, List, Clock3, CheckSquare, X } from 'lucide-react';

const Sidebar = ({ allTasks, currentView, setCurrentView, onAddTask, onCloseSidebar }) => {
  const todoCount = allTasks.filter(task => task.status === 'todo').length;
  const inProgressCount = allTasks.filter(task => task.status === 'inProgress').length;
  const doneCount = allTasks.filter(task => task.status === 'done').length;

  const navigationItems = [
    {
      id: 'all',
      label: 'All Tasks',
      icon: Home,
      count: allTasks.length,
      color: 'text-gray-600'
    },
    {
      id: 'todo',
      label: 'To Do',
      icon: List,
      count: todoCount,
      color: 'text-gray-600'
    },
    {
      id: 'inProgress',
      label: 'In Progress',
      icon: Clock3,
      count: inProgressCount,
      color: 'text-blue-600'
    },
    {
      id: 'done',
      label: 'Done',
      icon: CheckSquare,
      count: doneCount,
      color: 'text-green-600'
    }
  ];

  return (
    <div className="w-full bg-white border-r border-gray-200 h-screen overflow-y-auto">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold text-gray-900">Project.M</h1>
          <div className="flex items-center space-x-2">
            {/* Close button for mobile */}
            <button
              onClick={onCloseSidebar}
              className="lg:hidden p-1 text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
            {/* Desktop icons */}
            
          </div>
        </div>
        
        {/* Quick Add Button */}
        <button
          onClick={() => onAddTask('todo')}
          className="w-full flex items-center justify-center px-4 py-2 bg-blue-100 text-white rounded-md hover:bg-blue-400 transition-colors"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add New Task
        </button>
      </div>

      {/* Navigation */}
      <div className="p-4">
        <nav className="space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentView(item.id)}
                className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                  currentView === item.id
                    ? 'bg-blue-50 text-blue-700 border border-blue-200'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center">
                  <Icon className={`w-5 h-5 mr-3 ${currentView === item.id ? 'text-blue-600' : item.color}`} />
                  <span className="font-medium">{item.label}</span>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  currentView === item.id 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {item.count}
                </span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Stats */}
      <div className="p-4 border-t border-gray-200 mt-4">
        <h3 className="text-sm font-medium text-gray-900 mb-3">Quick Stats</h3>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Total Tasks</span>
            <span className="font-medium">{allTasks.length}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Completed</span>
            <span className="font-medium text-green-600">{doneCount}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">In Progress</span>
            <span className="font-medium text-blue-600">{inProgressCount}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Pending</span>
            <span className="font-medium text-gray-600">{todoCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;