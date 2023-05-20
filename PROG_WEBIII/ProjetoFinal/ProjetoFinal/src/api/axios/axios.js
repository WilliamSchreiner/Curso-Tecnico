import axios from "axios";

export const api = axios.create({
  baseURL: "https://randomuser.me/api/",
});

export const server = axios.create({
  baseURL: "https://localhost:3000/",
});
