import ResetPasswordForm from '@/components/forms/ResetPasswordForm'
import Container from '@/components/global/Container'
import PageTitle from '@/components/global/PageTitle'
import BackNavHeader from '@/components/headers/BackNavHeader'

function ResetPassword() {
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
            <ResetPasswordForm />
          </div>
        </div>
      </Container>
    </div>
  )
}
export default ResetPassword
