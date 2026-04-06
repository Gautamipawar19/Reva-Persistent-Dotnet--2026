import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getTasks = () => API.get("/Tasks");
export const getTaskById = (id) => API.get(`/Tasks/${id}`);
export const createTask = (data) => API.post("/Tasks", data);
export const updateTask = (id, data) => API.put(`/Tasks/${id}`, data);
export const deleteTask = (id) => API.delete(`/Tasks/${id}`);