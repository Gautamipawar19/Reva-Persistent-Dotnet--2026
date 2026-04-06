import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TaskList from "../components/TaskList";
import { getTasks, deleteTask, updateTask } from "../api/taskApi";

export default function TaskListPage() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");
  const navigate = useNavigate();

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

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      fetchTasks();
    } catch (error) {
      console.error("DELETE task error:", error);
      alert("Failed to delete task.");
    }
  };

  const handleEdit = async (task) => {
    const updatedTask = {
      ...task,
      isCompleted: !task.isCompleted,
    };

    try {
      await updateTask(task.id, updatedTask);
      fetchTasks();
    } catch (error) {
      console.error("UPDATE task error:", error);
      alert("Failed to update task.");
    }
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "Completed") return task.isCompleted;
    if (filter === "Pending") return !task.isCompleted;
    return true;
  });

  return (
    <div className="container">
      <div className="page-header">
        <h1 className="page-title">All Tasks</h1>
        <button className="primary-btn" onClick={() => navigate("/")}>
          + Add New Task
        </button>
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

      <TaskList tasks={filteredTasks} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}