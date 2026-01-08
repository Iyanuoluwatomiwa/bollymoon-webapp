import type {
  ChangePassword,
  Login,
  ProfileForm,
  Register,
  ResetPassword,
} from '@/types/auth.types'
import { api } from '@/utils/axiosConfig'
import { type ForgotPassword } from '../types/auth.types'
import { handleApiError } from '@/lib/apiError'

export const register = async (data: Register) => {
  try {
    const response = await api.post(`/v1/users/register`, data)
    return response?.data
  } catch (error) {
    handleApiError(error)
  }
}

export const login = async (data: Login) => {
  try {
    const response = await api.post(`/v1/users/login`, data)
    return response?.data
  } catch (error) {
    handleApiError(error)
  }
}
export const profile = async () => {
  try {
    const response = await api.get(`/v1/users/profile`)
    return response?.data
  } catch (error) {
    handleApiError(error)
  }
}
//
export const forgotPassword = async (data: ForgotPassword) => {
  try {
    const response = await api.post(`/v1/users/forgot-password`, data)
    return response?.data
  } catch (error) {
    handleApiError(error)
  }
}

export const resetPassword = async (data: ResetPassword) => {
  try {
    const response = await api.post(`/v1/users/reset-password`, data)
    return response?.data
  } catch (error) {
    handleApiError(error)
  }
}

export const changePassword = async (data: ChangePassword) => {
  try {
    const response = await api.put(`/v1/users/change-password`, data)
    return response?.data
  } catch (error) {
    handleApiError(error)
  }
}
export const updateProfile = async (data: ProfileForm) => {
  try {
    const response = await api.put(`/v1/users/update-profile`, data)
    return response?.data
  } catch (error) {
    handleApiError(error)
  }
}
export const googleSignIn = async (data: { idToken: string | undefined }) => {
  try {
    const response = await api.post(`/v1/users/google-auth`, data)
    return response
  } catch (error) {
    handleApiError(error)
  }
}
export const deactivateAccount = async () => {
  try {
    const response = await api.post(`/v1/users/me`)
    return response
  } catch (error) {
    handleApiError(error)
  }
}
