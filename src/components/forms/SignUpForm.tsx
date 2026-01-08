import { Link, useNavigate } from 'react-router-dom'
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
import PasswordRequirements from '../auth/PasswordRequirements'
import { passwordRules } from '@/utils/format'
import { register } from '@/api/auth'
import { Check, X } from 'lucide-react'

function SignUpForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: '',
  })
  const [submitting, setSubmitting] = useState<boolean>(false)
  const navigate = useNavigate()
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }
  const isFormValid =
    passwordRules.minLength(formData.password) &&
    passwordRules.uppercase(formData.password) &&
    passwordRules.number(formData.password) &&
    passwordRules.specialChar(formData.password) &&
    formData.password === formData.password2 &&
    formData.firstName &&
    formData.lastName &&
    formData.email
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    const validatedData = useValidateSchema(signupFormSchema, formData)
    if (!validatedData) {
      setSubmitting(false)
      return
    }
    try {
      await register(validatedData)
      toast.success('Account created successfully! Please login to continue.')
      navigate('/login')
    } catch (error: any) {
      toast.error(error?.message)
      setSubmitting(false)
    }
  }
  return (
    <Card className="bg-white py-0 gap-4 ">
      <div className="flex  justify-center py-4 lg:py-6 border-b">
        <Logo size="h-11 lg:h-16" />
      </div>
      <AuthFormsHeading title="Create Account" />
      <SignInOptions />
      <CardContent className="space-y-6 px-4 mt-2">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormInput
              name="firstName"
              value={formData.firstName}
              handleInputChange={handleInputChange}
              type="text"
              placeholder="First Name"
              label="First Name"
              required
            />
            <FormInput
              name="lastName"
              value={formData.lastName}
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
          <div>
            <FormPassword
              name="password"
              label="Password"
              value={formData.password}
              handleInputChange={handleInputChange}
              placeholder="Create a password"
              required
            />
            {formData.password && (
              <PasswordRequirements password={formData.password} />
            )}
          </div>
          <div>
            <FormPassword
              name="password2"
              label="Confirm Password"
              placeholder="Confirm your password"
              value={formData.password2}
              handleInputChange={handleInputChange}
              required
            />
            {formData.password2 && (
              <li className="flex items-center gap-2 mt-2 text-xs">
                {formData.password === formData.password2 ? (
                  <Check className="w-4 h-4 text-green-600" />
                ) : (
                  <X className="w-4 h-4 text-red-500" />
                )}
                <span
                  className={
                    formData.password === formData.password2
                      ? 'text-green-600'
                      : 'text-muted-foreground'
                  }
                >
                  Password match
                </span>
              </li>
            )}
          </div>

          <div className="mt-8">
            <FormSubmitButton
              submitting={submitting}
              text="Create Account"
              texting="Creating"
              disabled={!isFormValid}
            />
          </div>
        </form>
        <div className="flex justify-between gap-2 border-t-2 py-4 text-xs lg:text-sm font-medium">
          <Link to="/login" className="hover:text-primary/80 text-primary">
            Login
          </Link>
          <Link to="/shop" className="hover:text-primary/80 text-primary">
            Return to store
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
export default SignUpForm
