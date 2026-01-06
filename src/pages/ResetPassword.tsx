import ResetPasswordForm from '@/components/forms/ResetPasswordForm'
import Container from '@/components/global/Container'
import PageTitle from '@/components/global/PageTitle'
import BackNavHeader from '@/components/headers/BackNavHeader'
import { useEffect } from 'react'
import { redirect, useSearchParams } from 'react-router-dom'

function ResetPassword() {
  const [searchParams] = useSearchParams()
  const token = searchParams.get('token')

  useEffect(() => {
    if (token) {
      redirect('/restricted_access')
    }
  }, [])
  return (
    <div
      className="bg-gradient-to-br
        from-secondary
        to-primary animate-linear
    "
    >
      <PageTitle title="Reset Password" />
      <BackNavHeader className="hover:text-white text-white" />
      <Container>
        <div className="flex items-center justify-center  py-10 min-h-screen w-full ">
          <div className="flex-1 max-w-xs sm:max-w-md">
            <ResetPasswordForm token={token} />
          </div>
        </div>
      </Container>
    </div>
  )
}
export default ResetPassword
