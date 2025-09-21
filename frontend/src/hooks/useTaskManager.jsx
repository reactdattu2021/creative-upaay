import { useSelector, useDispatch } from 'react-redux';
import { addTask, updateTask, deleteTask, moveTask } from '../redux/actions/taskActions';

export const useTaskManager = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.items);
  const loading = useSelector(state => state.tasks.loading);
  const error = useSelector(state => state.tasks.error);

  const handleAddTask = (taskData) => {
    dispatch(addTask(taskData));
  };

  const handleUpdateTask = (id, updates) => {
    dispatch(updateTask(id, updates));
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleMoveTask = (id, newStatus) => {
    dispatch(moveTask(id, newStatus));
  };

  return {
    tasks,
    loading,
    error,
    addTask: handleAddTask,
    updateTask: handleUpdateTask,
    deleteTask: handleDeleteTask,
    moveTask: handleMoveTask
  };
};