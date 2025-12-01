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

export default function ProfileSettingsForm() {
  const { userProfile }: { userProfile: UserProfile } = useSelector(
    (state: any) => state.userState
  )
  const [formData, setFormData] = useState({
    firstName: userProfile.firstName,
    lastName: userProfile.lastName,
    email: userProfile.email,
    gender: '',
    phone: '',
  })
  const [submitting, setSubmitting] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    if (field === 'phone') {
      const newValue = value.replace(/[^0-9]/g, '')
      setFormData((prev) => ({ ...prev, [field]: newValue }))
    } else {
      setFormData((prev) => ({ ...prev, [field]: value }))
    }
  }
  const dispatch = useDispatch()
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    const validatedData = useValidateSchema(ProfileFormSchema, formData)
    if (!validatedData) {
      setSubmitting(false)
      return
    }

    dispatch(
      setUserProfile({
        userProfile: formData,
      })
    )
    setSubmitting(false)
    toast.success('Updated successfully!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormInput
          name="firstname"
          label="First Name"
          value={userProfile.firstName}
          handleInputChange={handleInputChange}
          placeholder="First Name"
          type="text"
          required
        />
        <FormInput
          name="lastname"
          label="Last Name"
          value={userProfile.lastName}
          handleInputChange={handleInputChange}
          placeholder="Last Name"
          type="text"
          required
        />
      </div>

      <FormInput
        name="email"
        label="Email"
        value={userProfile.email}
        handleInputChange={handleInputChange}
        placeholder="Last Name"
        type="email"
        required
        disabled={true}
      />
      <FormInput
        name="phone"
        label="Phone Number"
        value={formData.phone}
        handleInputChange={handleInputChange}
        placeholder="Phone Number"
        type="text"
        maxLength={11}
        required
      />
      <FormSubmitButton
        text="Update Profile"
        texting="Updating"
        submitting={submitting}
      />
    </form>
  )
}
