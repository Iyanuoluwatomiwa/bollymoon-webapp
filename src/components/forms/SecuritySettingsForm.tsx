import { useState, type FormEvent } from 'react'
import FormPassword from '../form-fields/FormPassword'
import FormSubmitButton from '../form-fields/FormSubmitButton'
import { useValidateSchema } from '@/hooks/useValidateSchema'
import { PasswordFormSchema } from '@/utils/schema'
import { toast } from 'sonner'

export default function SecuritySettingsForm() {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  })
  const [submitting, setSubmitting] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    if (formData.newPassword !== formData.confirmNewPassword) {
      toast.error('New Passwords do not match')
      setSubmitting(false)
      return
    }
    const validatedData = useValidateSchema(PasswordFormSchema, {
      password: formData.newPassword,
    })
    if (!validatedData) {
      setSubmitting(false)
      return
    }

    setSubmitting(false)
    toast.success('Password Updated successfully!')
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
      <FormPassword
        name="newPassword"
        label="New Password"
        value={formData.newPassword}
        handleInputChange={handleInputChange}
        placeholder="Enter New Password"
        required
      />
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
      />
    </form>
  )
}
