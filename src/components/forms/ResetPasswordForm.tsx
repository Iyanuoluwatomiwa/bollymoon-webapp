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
import PasswordRequirements from '../auth/PasswordRequirements'
import { passwordRules } from '@/utils/format'
import { resetPassword } from '@/api/auth'

function ResetPasswordForm({ token }: { token: string | null }) {
  const [formData, setFormData] = useState({
    newPassword: '',
    confirmNewPassword: '',
  })
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }
  const [submitting, setSubmitting] = useState<boolean>(false)
  const navigate = useNavigate()
  const isFormValid =
    passwordRules.minLength(formData.newPassword) &&
    passwordRules.uppercase(formData.newPassword) &&
    passwordRules.number(formData.newPassword) &&
    passwordRules.specialChar(formData.newPassword) &&
    formData.newPassword === formData.confirmNewPassword

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    const validatedData = useValidateSchema(resetPasswordSchema, formData)
    if (!validatedData) {
      setSubmitting(false)
      return
    }
    const data = {
      ...validatedData,
      token,
    }
    try {
      await resetPassword(data)
      toast.success(
        'Password reset successfully. Kindly login with your new password.'
      )
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
      <AuthFormsHeading
        title="Reset Password"
        desc="Create a new password for your account."
      />
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4 pb-4">
          <div>
            <FormPassword
              name="newPassword"
              value={formData.newPassword}
              handleInputChange={handleInputChange}
              placeholder="Create a new password"
              required
              className="mt-4"
            />
            {formData.newPassword && (
              <PasswordRequirements password={formData.newPassword} />
            )}
          </div>

          <FormPassword
            name="confirmNewPassword"
            placeholder="Confirm your password"
            value={formData.confirmNewPassword}
            handleInputChange={handleInputChange}
            required
          />
          <FormSubmitButton
            submitting={submitting}
            text="Set new password"
            texting="Resetting"
            disabled={!isFormValid}
          />
        </form>
      </CardContent>
    </Card>
  )
}
export default ResetPasswordForm
