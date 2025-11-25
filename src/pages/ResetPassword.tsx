import ResetPasswordForm from '@/components/forms/ResetPasswordForm'
import Container from '@/components/global/Container'
import PageTitle from '@/components/global/PageTitle'
import BackNavHeader from '@/components/headers/BackNavHeader'

function ResetPassword() {
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
