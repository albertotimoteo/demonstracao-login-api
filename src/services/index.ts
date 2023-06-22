import axios, { isAxiosError } from "axios"

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "x-api-key": import.meta.env.VITE_API_KEY,
    "content-type": "application/json",
  },
})

instance.interceptors.response.use(null, (error) => {
  if (isAxiosError(error)) {
    if (error.response?.status === 401) {
      localStorage.removeItem("token")
      location.href = "/login"
    }
  }
})

export default instance
