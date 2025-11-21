import SignUpForm from '@/components/forms/SignUpForm'
import { Container } from '@/components/global'
import BackNavHeader from '@/components/headers/BackNavHeader'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <>
      <BackNavHeader />
      <Container>
        <div className="flex items-center justify-center  py-10 min-h-screen w-full ">
          <div className="space-y-6 flex-1 max-w-xs sm:max-w-md">
            <SignUpForm />
            <p className="text-center text-xs/6 lg:text-sm font-medium">
              By creating an account, you agree to our{' '}
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

export default SignUp
