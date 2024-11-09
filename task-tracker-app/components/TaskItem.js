// components/TaskItem.js
export default function TaskItem({ task, toggleComplete, deleteTask }) {
    return (
      <div className="flex justify-between items-center p-2 border-b">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleComplete(task.id)}
          />
          <span className={task.completed ? 'line-through' : ''}>{task.title}</span>
        </div>
        <div>
          <span className={`p-1 ${task.priority === 'High' ? 'bg-red-500' : task.priority === 'Medium' ? 'bg-yellow-500' : 'bg-green-500'} text-white rounded`}>
            {task.priority}
          </span>
          <button onClick={() => deleteTask(task.id)} className="ml-2 text-red-600">Delete</button>
        </div>
      </div>
    );
  }
  