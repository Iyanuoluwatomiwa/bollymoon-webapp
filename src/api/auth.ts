import type {
  ChangePassword,
  Login,
  ProfileForm,
  Register,
  ResetPassword,
} from '@/types/auth.types'
import { api } from '@/utils/axiosConfig'
import { type ForgotPassword } from '../types/auth.types'

export const register = async (data: Register) => {
  const response = await api.post(`/v1/users/register`, data)

  return response
}

export const login = async (data: Login) => {
  const response = await api.post(`/v1/users/login`, data)
  return response
}
export const profile = async () => {
  const response = await api.get(`/v1/users/profile`)
  return response
}
export const forgotPassword = async (data: ForgotPassword) => {
  const response: {
    message: string
    success: boolean
    timestamp: string
  } = await api.post(`/v1/users/forgot-password`, data)
  return response
}

export const resetPassword = async (data: ResetPassword) => {
  const response: {
    message: string
    success: boolean
    timestamp: string
  } = await api.post(`/v1/users/reset-password`, data)
  return response
}

export const changePassword = async (data: ChangePassword) => {
  const response: {
    message: string
    success: boolean
    timestamp: string
  } = await api.put(`/v1/users/change-password`, data)
  return response
}
export const updateProfile = async (data: ProfileForm) => {
  const response = await api.put(`/v1/users/update-profile`, data)
  return response
}
