import { useState, type FormEvent } from 'react'
import { Card, CardContent } from '../ui/card'
import { forgotPasswordSchema } from '@/utils/schema'
import { useValidateSchema } from '@/hooks/useValidateSchema'
import FormInput from '../form-fields/FormInput'
import FormSubmitButton from '../form-fields/FormSubmitButton'
import Logo from '../global/Logo'
import AuthFormsHeading from '../headings/AuthFormsHeading'
import { forgotPassword } from '@/api/auth'
import { toast } from 'sonner'

function ForgotPasswordForm() {
  const [formData, setFormData] = useState({
    email: '',
  })

  const [submitting, setSubmitting] = useState<boolean>(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    const validatedData = useValidateSchema(forgotPasswordSchema, formData)
    if (!validatedData) {
      setSubmitting(false)
      return
    }
    try {
      const response = await forgotPassword(validatedData)
      toast.success(response?.data?.message)
      setSubmitting(false)
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
