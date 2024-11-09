// components/TaskList.js
import TaskItem from './TaskItem';

export default function TaskList({ tasks, toggleComplete, deleteTask }) {
  return (
    <div>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
          />
        ))
      ) : (
        <p className="text-center text-gray-500">No tasks added yet!</p>
      )}
    </div>
  );
}
