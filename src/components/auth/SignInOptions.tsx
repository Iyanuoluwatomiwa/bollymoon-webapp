import { Separator } from '../ui/separator'
import GoogleSignInButton from './GoogleSignInButton'

function SignInOptions() {
  return (
    <div className="space-y-4">
      <div className=" flex flex-row items-center justify-center gap-4 px-6">
        <GoogleSignInButton />
      </div>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <Separator className="w-full" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-card px-2 text-muted-foreground">
            Or continue with email
          </span>
        </div>
      </div>
    </div>
  )
}
export default SignInOptions
