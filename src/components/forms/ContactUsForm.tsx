import { useState, type FormEvent } from 'react'
import FormInput from '../form-fields/FormInput'
import FormTextArea from '../form-fields/FormTextArea'
import FormSubmitButton from '../form-fields/FormSubmitButton'
import { useValidateSchema } from '@/hooks/useValidateSchema'
import { contactSchema } from '@/utils/schema'
import { contact } from '@/api/contact'
import { toast } from 'sonner'

function ContactUsForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }
  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      message: '',
    })
  }
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    const validatedData = useValidateSchema(contactSchema, formData)
    if (!validatedData) {
      setSubmitting(false)
      return
    }
    try {
      await contact(validatedData)
      toast.success(
        "Message sent successfully! We'll get back to you within 24 hours."
      )
      resetForm()
      setSubmitting(false)
    } catch (error: any) {
      toast.error(error?.message)
      setSubmitting(false)
    }
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FormInput
        name="name"
        label="Name"
        type="text"
        placeholder="Enter your full name"
        handleInputChange={handleInputChange}
        value={formData.name}
      />
      <FormInput
        name="email"
        label="Email"
        type="email"
        placeholder="Enter your email address"
        handleInputChange={handleInputChange}
        value={formData.email}
      />
      <FormTextArea
        name="message"
        label="Message"
        placeholder="Enter your message"
        handleInputChange={handleInputChange}
        value={formData.message}
        rows={8}
        className="min-h-32"
      />
      <FormSubmitButton
        submitting={submitting}
        text="Send Message"
        texting="Sending..."
      />
    </form>
  )
}
export default ContactUsForm
