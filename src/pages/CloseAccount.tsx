import OtpInput from '@/components/auth/OtpInput'
import Container from '@/components/global/Container'
import PageTitle from '@/components/global/PageTitle'
import BackNavHeader from '@/components/headers/BackNavHeader'
import { UserX } from 'lucide-react'

function CloseAccount() {
  return (
    <>
      <PageTitle title="Close Account" />
      <div className="space-y-2 md:space-y-4">
        <BackNavHeader />
        <Container>
          <div>
            <div className="p-2 md:p-4 bg-primary rounded-full w-max mx-auto mb-4 ">
              <UserX className="w-8 md:w-10 h-8 md:h-10 text-white" />
            </div>
            <div className="text-center space-y-1 max-w-xl mx-auto mb-6">
              <h2 className="text-base md:text-lg font-bold">
                We're sad you're going
              </h2>
              <p className="text-sm/5 md:text-base/6">
                Before you close your account, we would want you to know that
                this action will delete your data permanently. Once your account
                has been closed, all of the activity accessed through your
                account will no longer be available to you. If that's what you
                want, please proceed with entering the OTP sent to your email
                address.
              </p>
            </div>

            <OtpInput />
          </div>
        </Container>
      </div>
    </>
  )
}
export default CloseAccount
