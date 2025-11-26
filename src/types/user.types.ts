export type UserProfile = {
  firstName: string
  lastName: string
  email: string
}

export type User = {
  isUser: boolean
  userProfile: UserProfile | null
}
