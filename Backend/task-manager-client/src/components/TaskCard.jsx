export default function TaskCard({ task, onEdit, onDelete }) {
  const priorityClass =
    task.priority === "High"
      ? "badge badge-high"
      : task.priority === "Medium"
      ? "badge badge-medium"
      : "badge badge-low";

  return (
    <div className="task-card">
      <div className="task-card-header">
        <h3>{task.title}</h3>
        <span className={task.isCompleted ? "badge status-completed" : "badge status-pending"}>
          {task.isCompleted ? "Completed" : "Pending"}
        </span>
      </div>

      <p className="task-desc">{task.description || "No description added."}</p>

      <div className="task-info">
        <div className="info-row">
          <span className="info-label">Due Date</span>
          <span>{task.dueDate ? task.dueDate.split("T")[0] : "N/A"}</span>
        </div>

        <div className="info-row">
          <span className="info-label">Priority</span>
          <span className={priorityClass}>{task.priority}</span>
        </div>
      </div>

      <div className="task-card-buttons">
        <button className="primary-btn" onClick={() => onEdit(task)}>
          {task.isCompleted ? "Mark Pending" : "Mark Complete"}
        </button>
        <button className="delete-btn" onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}