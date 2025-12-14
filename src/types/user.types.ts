export type UserProfile = {
  id: string
  firstName: string
  lastName: string
  email: string
  role: {
    name: string
  }
  phone?: string
}

export type User = {
  userProfile: UserProfile | null
  token: string | null
}
