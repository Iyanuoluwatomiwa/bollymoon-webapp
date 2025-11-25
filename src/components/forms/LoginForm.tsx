import { loginFormSchema } from '@/utils/schema'
import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { Card, CardContent } from '../ui/card'
import { useValidateSchema } from '@/hooks/useValidateSchema'
import FormInput from '../form-fields/FormInput'
import FormPassword from '../form-fields/FormPassword'
import FormSubmitButton from '../form-fields/FormSubmitButton'
import Logo from '../global/Logo'
import AuthFormsHeading from '../headings/AuthFormsHeading'
import SignInOptions from '../auth/SignInOptions'

function LoginForm() {
  /* const dispatch = useDispatch() */
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [submitting, setSubmitting] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    const validatedData = useValidateSchema(loginFormSchema, formData)
    if (!validatedData) {
      return
    }
    /* login logic here */
    /* const { login } = await import('@/utils/action')
    const props = { ...data, setSubmitting }
    const user = await login(props)
    dispatch(
      setUser({
        user,
      })
    ) */
    toast.success("Welcome, you've logged in successfully!")

    return setSubmitting(false)
  }
  return (
    <Card className="bg-white py-0 gap-4 w-full">
      <div className="flex  justify-center py-4 border-b">
        <Logo />
      </div>
      <AuthFormsHeading title="Login" />
      <SignInOptions text="Continue with Google" />
      <CardContent className="space-y-6 px-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormInput
            name="email"
            label="Email"
            value={formData.email}
            handleInputChange={handleInputChange}
            type="email"
            placeholder="Enter your email address"
            required
          />
          <FormPassword
            name="password"
            label="Password"
            value={formData.password}
            handleInputChange={handleInputChange}
            placeholder="Enter your password"
            required
          />
          <FormSubmitButton
            submitting={submitting}
            text="Login"
            texting="Logging in"
          />
        </form>
        <div className="flex justify-between gap-2 border-t-2 py-4 text-xs lg:text-sm font-medium">
          <Link
            to="/forgot-password"
            className="text-primary/80 hover:text-primary "
          >
            Forgot your password?
          </Link>
          <Link to="/sign-up" className="text-primary/80 hover:text-primary  ">
            Create account
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
export default LoginForm
