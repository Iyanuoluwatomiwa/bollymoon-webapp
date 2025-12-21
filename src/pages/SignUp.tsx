import SignUpForm from '@/components/forms/SignUpForm'
import Container from '@/components/global/Container'
import PageTitle from '@/components/global/PageTitle'
import BackNavHeader from '@/components/headers/BackNavHeader'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div
      className="bg-gradient-to-br
    from-secondary
    to-primary animate-linear
"
    >
      <PageTitle title="Create account" />
      <BackNavHeader className="hover:text-white text-white" />
      <Container>
        <div className="flex items-center justify-center  py-10 min-h-screen w-full ">
          <div className="space-y-6 flex-1 max-w-xs sm:max-w-md">
            <SignUpForm />
            <p className=" text-center text-white text-xs/6 sm:text-sm/6 lg:text-base/7 font-medium tracking-wider leading-wider">
              By creating an account, you agree to our{' '}
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

export default SignUp
