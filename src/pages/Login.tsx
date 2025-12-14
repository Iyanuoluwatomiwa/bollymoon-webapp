import LoginForm from '@/components/forms/LoginForm'
import Container from '@/components/global/Container'
import PageTitle from '@/components/global/PageTitle'
import BackNavHeader from '@/components/headers/BackNavHeader'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div
      className="bg-gradient-to-br
    from-secondary
    to-primary animate-linear
"
    >
      <PageTitle title="Login" />
      <BackNavHeader className="hover:text-white text-white" />
      <Container>
        <div className="flex items-center justify-center  py-10 min-h-screen w-full ">
          <div className="space-y-6 flex-1 max-w-xs sm:max-w-md">
            <LoginForm />
            <p className=" text-center text-white text-xs lg:text-sm font-medium">
              By logging in, you acknowledge our{' '}
              <Link
                to="/privacy-policy"
                className="text-secondary hover:text-secondary/90 font-bold"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}
export default Login
