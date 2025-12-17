import type { User } from '@/types/user.types'
import { createSlice } from '@reduxjs/toolkit'

const defaultState: User = {
  userProfile: null,
  token: null,
}

const getUserFromSessionStorage: () => User = () => {
  const user = sessionStorage.getItem('user')
  return user ? JSON.parse(user) : defaultState
}

const userSlice = createSlice({
  name: 'user',
  initialState: getUserFromSessionStorage(),
  reducers: {
    setUserProfile: (state, action) => {
      const { userProfile } = action.payload
      state.userProfile = userProfile
      sessionStorage.setItem('user', JSON.stringify(state))
    },
    setToken: (state, action) => {
      const { token } = action.payload
      state.token = token
      sessionStorage.setItem('user', JSON.stringify(state))
    },
    clearUser: (state) => {
      state.userProfile = null
      state.token = null
      sessionStorage.setItem('user', JSON.stringify(defaultState))
    },
  },
})

export const { setUserProfile, setToken, clearUser } = userSlice.actions

export default userSlice.reducer
