import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ChevronDown, Tag, Calendar, Clock } from 'lucide-react';
import { updateTask, deleteTask, moveTask } from '../../redux/actions/taskActions';
import { getPriorityColor, getCategoryColor } from '../../utils/taskHelpers';

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMove = (newStatus) => {
    dispatch(moveTask(task.id, newStatus));
    setShowDropdown(false);
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
    setShowDropdown(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-3 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold text-gray-900 text-sm">{task.title}</h3>
        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="text-gray-400 hover:text-gray-600 p-1"
          >
            <ChevronDown className="w-4 h-4" />
          </button>
          {showDropdown && (
            <div className="absolute right-0 mt-1 w-32 bg-white border border-gray-200 rounded-md shadow-lg z-10">
              <button
                onClick={() => handleMove('todo')}
                className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-50"
              >
                To Do
              </button>
              <button
                onClick={() => handleMove('inProgress')}
                className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-50"
              >
                In Progress
              </button>
              <button
                onClick={() => handleMove('done')}
                className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-50"
              >
                Done
              </button>
              <hr className="my-1" />
              <button
                onClick={handleDelete}
                className="block w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
      
      <p className="text-gray-600 text-xs mb-3 line-clamp-2">{task.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-3">
        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(task.priority)}`}>
          <Tag className="w-3 h-3 mr-1" />
          {task.priority}
        </span>
        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(task.category)}`}>
          {task.category}
        </span>
      </div>
      
      <div className="flex items-center justify-between text-xs text-gray-500">
        <div className="flex items-center">
          <Calendar className="w-3 h-3 mr-1" />
          {task.dueDate}
        </div>
        <div className="flex items-center">
          <Clock className="w-3 h-3 mr-1" />
          {task.createdAt}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;