import { setUserProfile } from '@/features/user/userSlice'
import { useValidateSchema } from '@/hooks/useValidateSchema'
import type { UserProfile } from '@/types/user.types'
import { ProfileFormSchema } from '@/utils/schema'
import { useState, type FormEvent } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { toast } from 'sonner'
import FormInput from '../form-fields/FormInput'
import FormSubmitButton from '../form-fields/FormSubmitButton'
import { updateProfile } from '@/api/auth'

export default function ProfileSettingsForm() {
  const { userProfile }: { userProfile: UserProfile | null } = useSelector(
    (state: any) => state.userState
  )

  const [formData, setFormData] = useState({
    firstName: userProfile?.firstName,
    lastName: userProfile?.lastName,
    email: userProfile?.email,
  })
  const [submitting, setSubmitting] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }
  const isFormActive =
    formData?.firstName === userProfile?.firstName &&
    formData?.lastName === userProfile?.lastName &&
    userProfile?.email === formData.email

  const dispatch = useDispatch()
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    const validatedData = useValidateSchema(ProfileFormSchema, formData)
    if (!validatedData) {
      setSubmitting(false)
      return
    }
    try {
      const response = await updateProfile(validatedData)
      dispatch(
        setUserProfile({
          userProfile: response?.data,
        })
      )
      toast.success('Updated successfully!')
      setSubmitting(false)
    } catch (error: any) {
      toast.error(error?.message)
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormInput
          name="firstName"
          label="First Name"
          value={formData.firstName}
          handleInputChange={handleInputChange}
          placeholder="First Name"
          type="text"
          required
        />
        <FormInput
          name="lastName"
          label="Last Name"
          value={formData.lastName}
          handleInputChange={handleInputChange}
          placeholder="Last Name"
          type="text"
          required
        />
      </div>

      <FormInput
        name="email"
        label="Email"
        value={formData.email}
        handleInputChange={handleInputChange}
        placeholder="Email address"
        type="email"
        required
        disabled={true}
      />
      <FormSubmitButton
        text="Update Profile"
        texting="Updating"
        submitting={submitting}
        disabled={isFormActive}
      />
    </form>
  )
}
