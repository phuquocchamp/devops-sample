import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchUsers = async () => {
  const response = await api.get("/users");
  return response.data;
};

interface User {
  fullName: string;
  age: number;
  address: string;
}

export const createUser = async (user: User) => {
  const response = await api.post("/users", user);
  return response.data;
};

export default api;
