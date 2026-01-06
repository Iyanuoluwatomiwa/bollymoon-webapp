import { useEffect } from 'react'
import { redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { toast } from 'sonner'

const ProtectedRoute = ({ children }: { children: any }) => {
  const { token } = useSelector((state: any) => state.userState)

  useEffect(() => {
    if (!token) {
      redirect('/login')
      toast.warning('Kindly, login to proceed.')
    }
  }, [])

  return children
}
export default ProtectedRoute
