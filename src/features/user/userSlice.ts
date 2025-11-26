import type { User } from '@/types/user.types'
import { createSlice } from '@reduxjs/toolkit'

const defaultState: User = {
  isUser: false,
  userProfile: null,
}

const getUserFromLocalStorage: () => User = () => {
  const user = sessionStorage.getItem('user')
  return user ? JSON.parse(user) : defaultState
}

const userSlice = createSlice({
  name: 'user',
  initialState: getUserFromLocalStorage(),
  reducers: {
    setUserProfile: (state, action) => {
      const { userProfile } = action.payload
      state.userProfile = userProfile
      sessionStorage.setItem('user', JSON.stringify(state))
    },
    setIsUser: (state, action) => {
      const { isUser } = action.payload
      state.isUser = isUser
      sessionStorage.setItem('user', JSON.stringify(state))
    },
    clearUser: (state) => {
      state.userProfile = null
      state.isUser = false
      sessionStorage.setItem('user', JSON.stringify(defaultState))
    },
  },
})

export const { setUserProfile, setIsUser, clearUser } = userSlice.actions

export default userSlice.reducer
