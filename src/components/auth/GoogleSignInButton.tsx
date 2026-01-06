import { googleSignIn } from '@/api/auth'
import { GoogleLogin } from '@react-oauth/google'
import { toast } from 'sonner'
function GoogleSignInButton() {
  const handleSuccess = async (credentialResponse: any) => {
    const idToken = credentialResponse.credential

    if (!idToken) return

    await googleSignIn({ idToken })
  }

  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={() => toast.error('Google Sign In Failed')}
    />
  )
}
export default GoogleSignInButton
