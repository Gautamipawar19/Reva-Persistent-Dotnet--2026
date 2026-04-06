import { useEffect, useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../api/taskApi";

export default function HomePage() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [filter, setFilter] = useState("All");

  const fetchTasks = async () => {
    try {
      const response = await getTasks();
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleSubmit = async (formData) => {
    try {
      if (editingTask) {
        await updateTask(editingTask.id, formData);
        setEditingTask(null);
      } else {
        await createTask(formData);
      }
      fetchTasks();
    } catch (error) {
      console.error("SAVE task error:", error);
      alert("Failed to save task.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      fetchTasks();
    } catch (error) {
      console.error("DELETE task error:", error);
      alert("Failed to delete task.");
    }
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "Completed") return task.isCompleted;
    if (filter === "Pending") return !task.isCompleted;
    return true;
  });

  return (
    <div className="container">
      <h1 className="page-title">Task Manager Application</h1>

      <div className="top-section">
        <TaskForm
          onSubmit={handleSubmit}
          editingTask={editingTask}
          onCancel={() => setEditingTask(null)}
        />
      </div>

      <div className="filter-bar">
        <button
          className={`filter-btn ${filter === "All" ? "active" : ""}`}
          onClick={() => setFilter("All")}
        >
          All Tasks
        </button>
        <button
          className={`filter-btn ${filter === "Completed" ? "active" : ""}`}
          onClick={() => setFilter("Completed")}
        >
          Completed
        </button>
        <button
          className={`filter-btn ${filter === "Pending" ? "active" : ""}`}
          onClick={() => setFilter("Pending")}
        >
          Pending
        </button>
      </div>

      <TaskList
        tasks={filteredTasks}
        onEdit={setEditingTask}
        onDelete={handleDelete}
      />
    </div>
  );
}