export type UserProfile = {
  id: string
  firstName: string
  lastName: string
  email: string
  role: any
  phone?: string
}

export type User = {
  userProfile: UserProfile | null
  token: string | null
}
