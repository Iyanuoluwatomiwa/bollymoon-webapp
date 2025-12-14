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
            <p className="text-center text-xs/6 lg:text-sm font-medium text-white">
              By creating an account, you agree to our{' '}
              <Link
                to="/privacy-policy"
                className="text-secondary hover:text-secondary/90 font-bold"
              >
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default SignUp
