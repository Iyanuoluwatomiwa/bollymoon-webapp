import {
  changePassword,
  forgotPassword,
  login,
  profile,
  register,
  resetPassword,
  updateProfile,
} from '@/api/auth'
import type {
  ChangePassword,
  ForgotPassword,
  Login,
  ProfileForm,
  Register,
  ResetPassword,
} from '@/types/auth.types'
import { toast } from 'sonner'

export const handleCreateAccount = async (data: Register) => {
  try {
    const response = await register(data)
    return response?.data?.token
  } catch (error) {
    toast.error('Account creation failed. Try again or contact support')
    return null
  }
}

export const handleLogin = async (data: Login) => {
  try {
    const response = await login(data)
    return response?.data?.token
  } catch (error) {
    toast.error('Invalid email or password. Please try again.')
    return null
  }
}
export const getProfile = async () => {
  try {
    const response = await profile()
    return response?.data
  } catch (error) {
    return null
  }
}

export const handleForgotPassword = async (data: ForgotPassword) => {
  const { message, success }: { message: string; success: boolean } =
    await forgotPassword(data)
  if (success) {
    toast.success('Password reset link has been sent to your email address')
  } else {
    toast.error(message)
  }
}

export const handleResetPassword = async (data: ResetPassword) => {
  const { message, success }: { message: string; success: boolean } =
    await resetPassword(data)
  if (!success) {
    toast.error(message)
  }
  return success
}
export const handleChangePassword = async (data: ChangePassword) => {
  const { message, success }: { message: string; success: boolean } =
    await changePassword(data)

  if (success) {
    toast.success('Password Updated successfully!')
  } else {
    toast.error(message)
  }
}

export const handleUpdateProfile = async (data: ProfileForm) => {
  try {
    const response = await updateProfile(data)
    return response?.data?.token
  } catch (error) {
    toast.error('Update failed. Please try again.')
    return null
  }
}
