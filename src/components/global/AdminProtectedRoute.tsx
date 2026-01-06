import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import type { UserProfile } from '@/types/user.types'

const AdminProtectedRoute = ({ children }: { children: any }) => {
  const {
    userProfile,
    token,
  }: { userProfile: UserProfile | null; token: string | null } = useSelector(
    (state: any) => state.userState
  )

  if (!token) {
    return <Navigate to="/restricted_access" />
  }
  if (userProfile && userProfile.role !== 'admin') {
    return <Navigate to="/restricted_access" />
  }

  return children
}
export default AdminProtectedRoute
