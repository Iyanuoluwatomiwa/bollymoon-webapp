export type UserProfile = {
  firstName: string
  lastName: string
  email: string
  uid: string
  phone?: string
  gender?: string
}

export type User = {
  isUser: boolean
  userProfile: UserProfile | null
}
