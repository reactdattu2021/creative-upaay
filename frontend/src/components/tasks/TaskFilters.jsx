import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Search } from 'lucide-react';
import { setCategoryFilter, setPriorityFilter, setSearchFilter } from '../../redux/actions/filterActions';
import { FILTER_OPTIONS } from '../../utils/constants';

const TaskFilters = ({ taskCount }) => {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filters);

  return (
    <div className="space-y-3 lg:space-y-0">
      {/* Mobile: Stack filters vertically */}
      <div className="lg:hidden space-y-3">
        <div className="flex items-center space-x-2">
          <Search className="w-4 h-4 text-gray-500 flex-shrink-0" />
          <input
            type="text"
            placeholder="Search tasks..."
            value={filters.search}
            onChange={(e) => dispatch(setSearchFilter(e.target.value))}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <select
            value={filters.category}
            onChange={(e) => dispatch(setCategoryFilter(e.target.value))}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          >
            {FILTER_OPTIONS.CATEGORIES.map(category => (
              <option key={category} value={category}>
                {category === 'All' ? 'All Categories' : category}
              </option>
            ))}
          </select>
          
          <select
            value={filters.priority}
            onChange={(e) => dispatch(setPriorityFilter(e.target.value))}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          >
            {FILTER_OPTIONS.PRIORITIES.map(priority => (
              <option key={priority} value={priority}>
                {priority === 'All' ? 'All Priorities' : `${priority} Priority`}
              </option>
            ))}
          </select>
        </div>

        <div className="text-xs text-gray-600 text-center">
          {taskCount} tasks found
        </div>
      </div>

      {/* Desktop: Horizontal layout */}
      <div className="hidden lg:flex lg:flex-wrap lg:items-center lg:gap-4">
        <div className="flex items-center space-x-2">
          <Search className="w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search tasks..."
            value={filters.search}
            onChange={(e) => dispatch(setSearchFilter(e.target.value))}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
          />
        </div>
        
        <select
          value={filters.category}
          onChange={(e) => dispatch(setCategoryFilter(e.target.value))}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {FILTER_OPTIONS.CATEGORIES.map(category => (
            <option key={category} value={category}>
              {category === 'All' ? 'All Categories' : category}
            </option>
          ))}
        </select>
        
        <select
          value={filters.priority}
          onChange={(e) => dispatch(setPriorityFilter(e.target.value))}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {FILTER_OPTIONS.PRIORITIES.map(priority => (
            <option key={priority} value={priority}>
              {priority === 'All' ? 'All Priorities' : `${priority} Priority`}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default TaskFilters;