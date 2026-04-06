import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TaskForm from "../components/TaskForm";
import { createTask } from "../api/taskApi";

export default function AddTaskPage() {
  const [editingTask] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    try {
      await createTask(formData);
      alert("Task added successfully");
      navigate("/tasks");
    } catch (error) {
      console.error("SAVE task error:", error);
      alert("Failed to save task.");
    }
  };

  return (
    <div className="container">
      <h1 className="page-title">Add New Task</h1>
      <TaskForm
        onSubmit={handleSubmit}
        editingTask={editingTask}
        onCancel={() => {}}
      />
    </div>
  );
}