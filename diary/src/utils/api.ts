import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
  // timeout: 1000,
  headers: { Origin: "http://localhost:3000" },
  // headers: { "X-Custom-Header": "foobar" },
});

api.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (response) {
    return response;
  },

  function (error) {
    return Promise.reject(error);
  }
);

export default api;
