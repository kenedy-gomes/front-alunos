import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080",
});

export const createSession = async (email, password) => {
  return api.post("/alunos/login", { email, password });
};
