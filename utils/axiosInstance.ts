import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://api-fresh-harvest.code-commando.com/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

// Optionally, add interceptors for additional functionality
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error.response?.data || error.message);
  }
);

export default axiosInstance;
