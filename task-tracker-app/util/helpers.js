// utils/helpers.js
export const filterTasks = (tasks, filter) => {
    if (filter === 'completed') return tasks.filter(task => task.completed);
    if (filter === 'pending') return tasks.filter(task => !task.completed);
    return tasks;
  };
  