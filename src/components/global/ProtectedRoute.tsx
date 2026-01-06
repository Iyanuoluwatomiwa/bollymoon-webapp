import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { toast } from 'sonner'

const ProtectedRoute = ({ children }: { children: any }) => {
  const { token } = useSelector((state: any) => state.userState)

  useEffect(() => {
    if (!token) {
      toast.warning('Kindly, login to proceed.')
    }
  }, [])

  if (!token) {
    return <Navigate to="/login" />
  }

  return children
}
export default ProtectedRoute
