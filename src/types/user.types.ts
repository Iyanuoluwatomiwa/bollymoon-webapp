export type UserProfile = {
  id: string
  firstName: string
  lastName: string
  email: string
  role: string
  phone?: string
}

export type User = {
  userProfile: UserProfile | null
  token: string | null
}
