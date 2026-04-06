import { useEffect, useState } from "react";

export default function TaskForm({ onSubmit, editingTask, onCancel }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "Medium",
    isCompleted: false,
  });

  useEffect(() => {
    if (editingTask) {
      setFormData({
        title: editingTask.title || "",
        description: editingTask.description || "",
        dueDate: editingTask.dueDate ? editingTask.dueDate.split("T")[0] : "",
        priority: editingTask.priority || "Medium",
        isCompleted: editingTask.isCompleted || false,
      });
    } else {
      setFormData({
        title: "",
        description: "",
        dueDate: "",
        priority: "Medium",
        isCompleted: false,
      });
    }
  }, [editingTask]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="task-form-container">
      <h2>{editingTask ? "Update Task" : "Add New Task"}</h2>

      <form onSubmit={handleSubmit} className="task-form">
        <input
          type="text"
          name="title"
          placeholder="Enter task title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Enter task description"
          value={formData.description}
          onChange={handleChange}
        />

        <input
          type="date"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
        />

        <select
          name="priority"
          value={formData.priority}
          onChange={handleChange}
        >
          <option value="Low">Low Priority</option>
          <option value="Medium">Medium Priority</option>
          <option value="High">High Priority</option>
        </select>

        {editingTask && (
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="isCompleted"
              checked={formData.isCompleted}
              onChange={handleChange}
            />
            Mark as Completed
          </label>
        )}

        <div className="form-buttons">
          <button type="submit" className="primary-btn">
            {editingTask ? "Update Task" : "Add Task"}
          </button>

          {editingTask && (
            <button type="button" className="secondary-btn" onClick={onCancel}>
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}