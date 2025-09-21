import React from 'react';
import { Plus } from 'lucide-react';
import TaskCard from './TaskCard';
import { getStatusColor, getStatusTitle } from '../../utils/taskHelpers';

const TaskColumn = ({ status, tasks, onAddTask }) => {
  return (
    <div className={`${getStatusColor(status)} rounded-lg p-4`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <h3 className="text-lg font-semibold text-gray-900">
            {getStatusTitle(status)}
          </h3>
          <span className="bg-white text-gray-600 text-sm px-2 py-1 rounded-full">
            {tasks.length}
          </span>
        </div>
        <button
          onClick={() => onAddTask(status)}
          className="p-1 hover:bg-white hover:bg-opacity-50 rounded-md transition-colors"
        >
          <Plus className="w-4 h-4 text-gray-600" />
        </button>
      </div>
      
      <div className="space-y-3">
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
        
        {tasks.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <div className="text-4xl mb-2">📝</div>
            <p>No tasks in {getStatusTitle(status)}</p>
            <button
              onClick={() => onAddTask(status)}
              className="mt-2 text-blue-600 hover:text-blue-800 text-sm"
            >
              Add a task
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskColumn;