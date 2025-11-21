import ForgotPasswordForm from '@/components/forms/ForgotPasswordForm'
import { Container } from '@/components/global'
import PageTitle from '@/components/global/PageTitle'
import BackNavHeader from '@/components/headers/BackNavHeader'

function ForgotPassword() {
  return (
    <>
      <PageTitle title="Forgot password" />
      <BackNavHeader />
      <Container>
        <div className="flex items-center justify-center  py-10 min-h-screen w-full ">
          <div className="flex-1 max-w-xs sm:max-w-md">
            <ForgotPasswordForm />
          </div>
        </div>
      </Container>
    </>
  )
}
export default ForgotPassword
