import { Link } from 'react-router-dom'
import { Card, CardContent } from '../ui/card'
import { signupFormSchema } from '@/utils/schema'
import { useState, type FormEvent } from 'react'
import { useValidateSchema } from '@/hooks/useValidateSchema'
import { toast } from 'sonner'
import FormInput from '../form-fields/FormInput'
import FormPassword from '../form-fields/FormPassword'
import FormSubmitButton from '../form-fields/FormSubmitButton'
import Logo from '../global/Logo'
import AuthFormsHeading from '../headings/AuthFormsHeading'
import SignInOptions from '../auth/SignInOptions'

function SignUpForm() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [submitting, setSubmitting] = useState<boolean>(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    const validatedData = useValidateSchema(signupFormSchema, formData)
    if (!validatedData) {
      return
    }
    /* sign up logic here */
    /* const request = { ...data, setSubmitting, navigate }
    const { signUp } = await import('@/utils/action')
    signUp(request) */
    toast.success('Account created successfully!')

    return setSubmitting(false)
  }
  return (
    <Card className="bg-white py-0 gap-4 ">
      <div className="flex  justify-center py-4 border-b">
        <Logo />
      </div>
      <AuthFormsHeading title="Create Account" />
      <SignInOptions text="Sign up with Google" />
      <CardContent className="space-y-6 px-4 mt-2">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormInput
              name="firstname"
              value={formData.firstname}
              handleInputChange={handleInputChange}
              type="text"
              placeholder="First Name"
              label="First Name"
              required
            />
            <FormInput
              name="lastname"
              value={formData.lastname}
              handleInputChange={handleInputChange}
              type="text"
              placeholder="Last Name"
              label="Last Name"
              required
            />
          </div>
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
            placeholder="Create a password"
            required
          />
          <FormPassword
            name="confirmPassword"
            label="Confirm Password"
            placeholder="Confirm your password"
            value={formData.password}
            handleInputChange={handleInputChange}
            required
          />
          <FormSubmitButton
            submitting={submitting}
            text="Create Account"
            texting="Creating"
          />
        </form>
        <div className="flex justify-between gap-2 border-t-2 py-4 text-xs lg:text-sm font-medium">
          <Link to="/login" className="text-primary/80 hover:text-primary ">
            Login
          </Link>
          <Link to="/shop" className="text-primary/80 hover:text-primary">
            Return to store
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
export default SignUpForm
