import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-title">Task Manager</div>

      <div className="navbar-links">
        <Link
          to="/"
          className={location.pathname === "/" ? "nav-link active-link" : "nav-link"}
        >
          Add Task
        </Link>

        <Link
          to="/tasks"
          className={location.pathname === "/tasks" ? "nav-link active-link" : "nav-link"}
        >
          View Tasks
        </Link>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
}