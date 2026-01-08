import { GoogleLogin } from '@react-oauth/google'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

import { googleSignIn } from '@/api/auth'
import { setToken } from '@/features/user/userSlice'

function GoogleSignInButton() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSuccess = async (credentialResponse: any) => {
    try {
      const idToken = credentialResponse?.credential
      if (!idToken) {
        toast.error('Google authentication failed')
        return
      }
      const response = await googleSignIn({
        idToken,
      })
      const token = response?.data?.data?.token

      dispatch(setToken({ token }))
      toast.success("Welcome, you've logged in successfully!")
      navigate('/')
    } catch (error: any) {
      toast.error(error?.message)
    }
  }

  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={() => toast.error('Google Sign In failed')}
      useOneTap
    />
  )
}

export default GoogleSignInButton
