import { useState, type FormEvent } from 'react'
import { Card, CardContent } from '../ui/card'
import { useNavigate } from 'react-router-dom'
import { resetPasswordSchema } from '@/utils/schema'
import { useValidateSchema } from '@/hooks/useValidateSchema'
import { toast } from 'sonner'
import FormPassword from '../form-fields/FormPassword'
import FormSubmitButton from '../form-fields/FormSubmitButton'
import Logo from '../global/Logo'
import AuthFormsHeading from '../headings/AuthFormsHeading'

function ResetPasswordForm() {
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  })
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }
  const [submitting, setSubmitting] = useState<boolean>(false)
  const navigate = useNavigate()
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    const validatedData = useValidateSchema(resetPasswordSchema, formData)
    if (!validatedData) {
      setSubmitting(false)
      return
    }

    /* reset password logic here */
    /* const request = { ...data, setSubmitting, navigate }
    const { resetPassword } = await import('@/utils/action')
    resetPassword(request) */
    toast.success(
      'Password reset successfully. Kindly login with your new password.'
    )
    navigate('/login')
    setSubmitting(false)
  }

  return (
    <Card className="bg-white py-0 gap-4 ">
      <div className="flex  justify-center py-4 border-b">
        <Logo />
      </div>
      <AuthFormsHeading
        title="Reset Password"
        desc="Create a new password for your account."
      />
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4 pb-4">
          <FormPassword
            name="password"
            value={formData.password}
            handleInputChange={handleInputChange}
            placeholder="Create a new password"
            required
            className="mt-4"
          />
          <FormPassword
            name="confirmPassword"
            placeholder="Confirm your password"
            value={formData.password}
            handleInputChange={handleInputChange}
            required
          />
          <FormSubmitButton
            submitting={submitting}
            text="Set new password"
            texting="Resetting"
          />
        </form>
      </CardContent>
    </Card>
  )
}
export default ResetPasswordForm
