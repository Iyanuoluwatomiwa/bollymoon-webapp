import { useState, type FormEvent } from 'react'
import { AuthFormsHeading } from '../headings'
import { Card, CardContent } from '../ui/card'
import { forgotPasswordSchema } from '@/utils/schema'
import { Logo } from '../global'
import { toast } from 'sonner'
import { useValidateSchema } from '@/hooks/useValidateSchema'
import FormInput from '../form-fields/FormInput'
import FormSubmitButton from '../form-fields/FormSubmitButton'

function ForgotPasswordForm() {
  const [formData, setFormData] = useState({
    email: '',
  })

  const [submitting, setSubmitting] = useState<boolean>(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    const validatedData = useValidateSchema(forgotPasswordSchema, formData)
    if (!validatedData) {
      return
    }
    /* forgot password logic here */
    /* const request = { ...data, setSubmitting, navigate }
    const { forgotPassword } = await import('@/utils/action')
    forgotPassword(request) */

    toast.success('Password reset link has been sent to your email address')
    setSubmitting(false)
  }

  return (
    <Card className="bg-white py-0 gap-4 ">
      <div className="flex  justify-center py-4 border-b">
        <Logo />
      </div>
      <AuthFormsHeading
        title="Forgot Password"
        desc="Enter your email address to receive a password reset link."
      />
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4 pb-4">
          <FormInput
            name="email"
            value={formData.email}
            handleInputChange={handleInputChange}
            type="email"
            placeholder="Enter your email address"
            required
            className="mt-4"
          />
          <FormSubmitButton
            submitting={submitting}
            text="Send"
            texting="Sending"
          />
        </form>
      </CardContent>
    </Card>
  )
}
export default ForgotPasswordForm
