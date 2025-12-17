export type Register = {
  firstName: string
  lastName: string
  email: string
  password: string
  password2: string
}
export type Login = {
  email: string
  password: string
}

export type ForgotPassword = {
  email: string
}

export type ResetPassword = {
  token: string | null
  newPassword: string
  confirmNewPassword: string
}
export type ChangePassword = {
  newPassword: string
  currentPassword: string
}

export type ProfileForm = {
  firstName: string
  lastName: string
  email: string
  phone?: string
}
