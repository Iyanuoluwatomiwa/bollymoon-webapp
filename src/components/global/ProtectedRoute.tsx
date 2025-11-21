import { RedirectPathContext } from '@/components/redirectPath/redirectPathProvider'
import { useContext, useEffect } from 'react'
import { redirect, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoute = ({ children }: { children: any }) => {
  const { user, userRole } = useSelector((state: any) => state.userState)
  const pathname = useLocation().pathname
  const { setPathname } = useContext(RedirectPathContext)

  useEffect(() => {
    if (!user) {
      setPathname(pathname)
      redirect('/auth/login')
    }
    if (!userRole) {
      redirect('/auth/complete-registration')
    }
  }, [])

  return children
}
export default ProtectedRoute
