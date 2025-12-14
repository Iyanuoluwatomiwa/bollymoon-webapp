import ForgotPasswordForm from '@/components/forms/ForgotPasswordForm'
import Container from '@/components/global/Container'
import PageTitle from '@/components/global/PageTitle'
import BackNavHeader from '@/components/headers/BackNavHeader'

function ForgotPassword() {
  return (
    <div
      className="bg-gradient-to-br
        from-secondary
        to-primary animate-linear
    "
    >
      <PageTitle title="Forgot password" />
      <BackNavHeader className="hover:text-white text-white" />
      <Container>
        <div className="flex items-center justify-center  py-10 min-h-screen w-full ">
          <div className="flex-1 max-w-xs sm:max-w-md">
            <ForgotPasswordForm />
          </div>
        </div>
      </Container>
    </div>
  )
}
export default ForgotPassword
