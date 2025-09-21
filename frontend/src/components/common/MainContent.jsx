import React from "react";
import { useSelector } from "react-redux";
import { Plus, Filter, Bell, User } from "lucide-react";
import TaskFilters from "../tasks/TaskFilters";
import TaskColumn from "../tasks/TaskColumn";
import TaskCard from "../tasks/TaskCard";
import { filterTasks } from "../../utils/taskHelpers";

const MainContent = ({ allTasks, currentView, filters, onAddTask }) => {
  // Filter tasks based on current filters
  const filteredTasks = filterTasks(allTasks, filters);

  // Further filter by current view
  const getViewTasks = () => {
    if (currentView === "all") return filteredTasks;
    return filteredTasks.filter((task) => task.status === currentView);
  };

  const viewTasks = getViewTasks();

  const getViewTitle = () => {
    switch (currentView) {
      case "all":
        return "Mobile App";
      case "todo":
        return "To Do Tasks";
      case "inProgress":
        return "In Progress Tasks";
      case "done":
        return "Completed Tasks";
      default:
        return "Tasks";
    }
  };

  const getTasksByStatus = (status) => {
    return viewTasks.filter((task) => task.status === status);
  };

  return (
    <div className="flex-1 bg-gray-50 overflow-y-auto">
      {/* Desktop Header - Hidden on mobile */}
      <div className="hidden lg:block bg-white border-b border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900">{getViewTitle()}</h2>
          <div className="flex items-center text-sm text-gray-600 p-3">
            
            <Filter className="w-4 h-4 mr-1" />
            {viewTasks.length} tasks found
            <div className="hidden lg:flex items-center space-x-2">
            <Bell className="w-5 h-5 text-gray-500 hover:text-gray-700 cursor-pointer ml-2" />
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
          </div>
          </div>
          
          
        </div>

        {/* Filters */}
        <TaskFilters taskCount={viewTasks.length} />
      </div>

      {/* Mobile Filters - Only visible on small screens */}
      <div className="lg:hidden bg-white border-b border-gray-200 p-4">
        <TaskFilters taskCount={viewTasks.length} />
      </div>

      {/* Content */}
      <div className="p-4 lg:p-6">
        {currentView === "all" ? (
          // Kanban Board View - Single column on mobile, 3 columns on desktop
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
            {["todo", "inProgress", "done"].map((status) => (
              <TaskColumn
                key={status}
                status={status}
                tasks={getTasksByStatus(status)}
                onAddTask={onAddTask}
              />
            ))}
          </div>
        ) : (
          // Grid View - 1 column on mobile, responsive on larger screens
          <div className="max-w-6xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {viewTasks.map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
            </div>

            {viewTasks.length === 0 && (
              <div className="text-center py-8 lg:py-16 text-gray-500">
                <div className="text-4xl lg:text-6xl mb-4">📝</div>
                <h3 className="text-lg lg:text-xl font-semibold mb-2">
                  No tasks found
                </h3>
                <p className="mb-4 text-sm lg:text-base px-4">
                  {currentView === "all"
                    ? "Create your first task to get started!"
                    : `No tasks in ${getViewTitle().toLowerCase()}`}
                </p>
                <button
                  onClick={() => onAddTask("todo")}
                  className="px-4 py-2 lg:px-6 lg:py-3 bg-gray-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm lg:text-base"
                >
                  <Plus className="w-4 h-4 mr-2 inline" />
                  Add New Task
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MainContent;
