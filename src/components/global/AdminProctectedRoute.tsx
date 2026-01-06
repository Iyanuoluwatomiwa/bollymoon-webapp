import { useEffect } from 'react'
import { redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import type { UserProfile } from '@/types/user.types'

const AdminProtectedRoute = ({ children }: { children: any }) => {
  const {
    userProfile,
    token,
  }: { userProfile: UserProfile | null; token: string | null } = useSelector(
    (state: any) => state.userState
  )

  useEffect(() => {
    if (!token) {
      redirect('/restricted_access')
    }
    if (userProfile && userProfile.role !== 'admin') {
      redirect('/restricted_access')
    }
  }, [])

  return children
}
export default AdminProtectedRoute
