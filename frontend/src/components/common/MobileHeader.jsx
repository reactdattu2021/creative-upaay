import React from 'react';
import { Menu, Plus, Bell, User } from 'lucide-react';

const MobileHeader = ({ currentView, onMenuClick, onAddTask }) => {
  const getViewTitle = () => {
    switch (currentView) {
      case 'all': return 'All Tasks';
      case 'todo': return 'To Do';
      case 'inProgress': return 'In Progress';
      case 'done': return 'Done';
      default: return 'Tasks';
    }
  };

  return (
    <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <button
          onClick={onMenuClick}
          className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md"
        >
          <Menu className="w-5 h-5" />
        </button>
        <div>
          <h1 className="text-lg font-bold text-gray-900">Mobile App</h1>
          <p className="text-xs text-gray-500">{getViewTitle()}</p>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <button
          onClick={onAddTask}
          className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          <Plus className="w-4 h-4" />
        </button>
        <Bell className="w-5 h-5 text-gray-500" />
        <div className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center">
          <User className="w-4 h-4 text-white" />
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;