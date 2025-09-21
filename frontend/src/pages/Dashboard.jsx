import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Menu, X } from 'lucide-react';
import Sidebar from '../components/common/Sidebar';
import MainContent from '../components/common/MainContent';
import MobileHeader from '../components/common/MobileHeader';
import AddTaskModal from '../components/tasks/AddTaskModal';
import { addTask } from '../redux/actions/taskActions';

const Dashboard = () => {
  const dispatch = useDispatch();
  const allTasks = useSelector(state => state.tasks.items);
  const filters = useSelector(state => state.filters);
  
  const [showModal, setShowModal] = useState(false);
  const [modalDefaultStatus, setModalDefaultStatus] = useState('todo');
  const [currentView, setCurrentView] = useState('all');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openModalForStatus = (status) => {
    setModalDefaultStatus(status);
    setShowModal(true);
  };

  const handleAddTask = (taskData) => {
    dispatch(addTask(taskData));
  };

  const handleViewChange = (view) => {
    setCurrentView(view);
    setSidebarOpen(false); // Close sidebar on mobile after selection
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar - Hidden on mobile, overlay on mobile when open */}
      <div className={`
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:w-1/4
        fixed left-0 top-0 h-full w-80 bg-white z-50
        transform transition-transform duration-300 ease-in-out
        lg:transform-none
      `}>
        <Sidebar
          allTasks={allTasks}
          currentView={currentView}
          setCurrentView={handleViewChange}
          onAddTask={openModalForStatus}
          onCloseSidebar={() => setSidebarOpen(false)}
        />
      </div>

      {/* Main Content - Full width on mobile, 75% on desktop */}
      <div className="flex-1 flex flex-col lg:w-3/4">
        {/* Mobile Header - Only visible on small screens */}
        <MobileHeader 
          currentView={currentView}
          onMenuClick={() => setSidebarOpen(true)}
          onAddTask={() => openModalForStatus('todo')}
        />

        {/* Main Content */}
        <MainContent
          allTasks={allTasks}
          currentView={currentView}
          filters={filters}
          onAddTask={openModalForStatus}
        />
      </div>

      {/* Add Task Modal */}
      <AddTaskModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onAdd={handleAddTask}
        defaultStatus={modalDefaultStatus}
      />
    </div>
  );
};

export default Dashboard;