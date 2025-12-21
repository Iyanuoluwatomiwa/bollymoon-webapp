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
            <p className=" text-center text-white text-xs/6 sm:text-sm/6 lg:text-base/7 font-medium tracking-wider leading-wider">
              By logging in, you acknowledge our{' '}
              <Link
                to="/privacy-policy"
                className="hover:underline text-accent-foreground font-bold"
              >
                Privacy Policy
              </Link>{' '}
              and{' '}
              <Link
                to="/terms-conditions"
                className="hover:underline text-accent-foreground font-bold"
              >
                Terms & Conditions
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
