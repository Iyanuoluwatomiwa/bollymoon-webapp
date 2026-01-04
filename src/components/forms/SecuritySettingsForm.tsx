import { useState, type FormEvent } from 'react'
import FormPassword from '../form-fields/FormPassword'
import FormSubmitButton from '../form-fields/FormSubmitButton'
import { useValidateSchema } from '@/hooks/useValidateSchema'
import { changePasswordSchema } from '@/utils/schema'
import PasswordRequirements from '../auth/PasswordRequirements'
import { passwordRules } from '@/utils/format'
import { changePassword } from '@/api/auth'
import { toast } from 'sonner'

export default function SecuritySettingsForm() {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  })

  const [submitting, setSubmitting] = useState(false)
  const isFormValid =
    passwordRules.minLength(formData.newPassword) &&
    passwordRules.uppercase(formData.newPassword) &&
    passwordRules.number(formData.newPassword) &&
    passwordRules.specialChar(formData.newPassword) &&
    formData.newPassword === formData.confirmNewPassword

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }
  const clearForm = () => {
    setFormData({
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    })
  }
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    if (formData.newPassword !== formData.confirmNewPassword) {
      toast.warning('Passwords do not match')
      setSubmitting(false)
    }
    const validatedData = useValidateSchema(changePasswordSchema, {
      newPassword: formData.newPassword,
      currentPassword: formData.currentPassword,
    })
    if (!validatedData) {
      setSubmitting(false)
      return
    }
    try {
      const response = await changePassword(validatedData)
      toast.success(response?.message)
      setSubmitting(false)
      clearForm()
    } catch (error: any) {
      toast.error(error?.message)
      setSubmitting(false)
    }
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FormPassword
        name="currentPassword"
        label="Current Password"
        value={formData.currentPassword}
        handleInputChange={handleInputChange}
        placeholder="Enter Current Password"
        required
      />
      <div>
        <FormPassword
          name="newPassword"
          label="New Password"
          value={formData.newPassword}
          handleInputChange={handleInputChange}
          placeholder="Enter New Password"
          required
        />
        {formData.newPassword && (
          <PasswordRequirements password={formData.newPassword} />
        )}
      </div>

      <FormPassword
        name="confirmNewPassword"
        label="Confirm New Password"
        value={formData.confirmNewPassword}
        handleInputChange={handleInputChange}
        placeholder="Confirm New Password"
        required
      />
      <FormSubmitButton
        text="Update Password"
        texting="Updating"
        submitting={submitting}
        disabled={!isFormValid}
      />
    </form>
  )
}
