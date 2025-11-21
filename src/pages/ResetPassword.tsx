import ResetPasswordForm from '@/components/forms/ResetPasswordForm'
import { Container } from '@/components/global'
import PageTitle from '@/components/global/PageTitle'
import BackNavHeader from '@/components/headers/BackNavHeader'

function ResetPassword() {
  /*  const [loading, setLoading] = useState<boolean>(true)
  const [tokenIsValid, setTokenIsValid] = useState<boolean>(true) */

  /*  useEffect(() => {
    const resetUserPassword = async () => {
      const hashParams = new URLSearchParams(window.location.hash.substring(1))
      const accessToken = hashParams.get('access_token')
      const refreshToken = hashParams.get('refresh_token')

      if (!accessToken || !refreshToken) {
        setLoading(false)
        setTokenIsValid(false)
        return
      }
      const { error: sessionError } = await supabase.auth.setSession({
        access_token: accessToken,
        refresh_token: refreshToken,
      })

      if (sessionError) {
        setLoading(false)
        setTokenIsValid(false)
        return
      }
      setLoading(false)
      setTokenIsValid(true)
    }
    resetUserPassword()
  }, []) */

  /* if (loading) return <AuthLoading />

  if (!tokenIsValid) {
    return (
      <InvalidToken
        desc="Couldn't reset your password."
        url="/auth/forgot-password"
      />
    )
  } */
  return (
    <>
      <PageTitle title="Reset Password" />
      <BackNavHeader />
      <Container>
        <div className="flex items-center justify-center  py-10 min-h-screen w-full ">
          <div className="flex-1 max-w-xs sm:max-w-md">
            <ResetPasswordForm />
          </div>
        </div>
      </Container>
    </>
  )
}
export default ResetPassword
