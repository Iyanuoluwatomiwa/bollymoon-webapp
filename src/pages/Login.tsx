import LoginForm from '@/components/forms/LoginForm'
import { Container } from '@/components/global'
import PageTitle from '@/components/global/PageTitle'
import BackNavHeader from '@/components/headers/BackNavHeader'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
      <PageTitle title="Login" />
      <BackNavHeader />
      <Container>
        <div className="flex items-center justify-center  py-10 min-h-screen w-full ">
          <div className="space-y-6 flex-1 max-w-xs sm:max-w-md">
            <LoginForm />
            <p className=" text-center text-xs lg:text-sm font-medium">
              By logging in, you acknowledge our{' '}
              <Link
                to="/privacy-policy"
                className="text-primary/80 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </Container>
    </>
  )
}
export default Login
