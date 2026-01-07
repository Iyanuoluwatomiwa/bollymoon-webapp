import { googleSignIn } from '@/api/auth'
import { setToken } from '@/features/user/userSlice'
import { GoogleLogin } from '@react-oauth/google'
import { useDispatch } from 'react-redux'
import { toast } from 'sonner'
function GoogleSignInButton() {
  const dispatch = useDispatch()
  const handleSuccess = async (credentialResponse: any) => {
    const idToken = credentialResponse.credential

    if (!idToken) return
    const response = await googleSignIn({
      idToken,
      redirectUrl: 'https://bollymoon-frontendweb.vercel.app/',
    })
    const token = response?.data?.token
    dispatch(setToken({ token }))
    toast.success("Welcome, you've logged in successfully!")
  }

  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={() => toast.error('Google Sign In Failed')}
    />
  )
}
export default GoogleSignInButton
