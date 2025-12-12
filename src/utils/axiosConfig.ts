import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 60000, // 60 seconds
  timeoutErrorMessage:
    'The request timed out. Kindly try again or refresh your page',
})

api.interceptors.request.use((config) => {
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI4MWU1ZDUyMi01MDA1LTQ4ODktOWYyYy0wNjg0NzJlYTZhNDIiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3NjUzOTMxNzUsImV4cCI6MTc2Nzk4NTE3NX0.fyPYgkzuLFP_Jfp5R6JQPAHdjsv7QbH5yrsG-zV0i70'
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})
