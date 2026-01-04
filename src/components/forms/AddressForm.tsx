import { useState, type FormEvent } from 'react'
import FormInput from '../form-fields/FormInput'
import type { DeliveryAddress } from '@/types/orders.types'
import FormSubmitButton from '../form-fields/FormSubmitButton'
import { useValidateSchema } from '@/hooks/useValidateSchema'
import { deliveryFormSchema } from '@/utils/schema'
import type { UseMutateFunction } from '@tanstack/react-query'

interface AddressFormProps {
  details?: DeliveryAddress | null
  onSubmit: UseMutateFunction<void, Error, DeliveryAddress, unknown>
  submitting: boolean
}

function AddressForm({ details, onSubmit, submitting }: AddressFormProps) {
  const [formData, setFormData] = useState({
    phone: details?.phone ?? '',
    addressLine: details?.addressLine ?? '',
    city: details?.city ?? '',
    state: details?.state ?? '',
    country: 'UK',
    postalCode: details?.postalCode ?? '',
    notes: details?.notes ?? '',
  })
  const handleInputChange = (field: string, value: string) => {
    if (field === 'phone') {
      const newValue = value.replace(/[^0-9]/g, '')
      setFormData((prev) => ({ ...prev, [field]: newValue }))
    } else {
      setFormData((prev) => ({ ...prev, [field]: value }))
    }
  }

  const resetForm = () => {
    setFormData({
      phone: '',
      addressLine: '',
      city: '',
      state: '',
      country: 'UK',
      postalCode: '',
      notes: '',
    })
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const validatedData = useValidateSchema(deliveryFormSchema, formData)
    if (!validatedData) {
      return
    }
    onSubmit(
      { ...validatedData, notes: formData.notes },
      {
        onSuccess: () => {
          if (!details) {
            resetForm()
          }
        },
      }
    )
  }
  const disableUpdate =
    formData.phone === details?.phone &&
    formData.addressLine === details?.addressLine &&
    formData.state === details?.state &&
    formData.city === details?.city &&
    formData.postalCode === details?.postalCode &&
    (formData.notes === '' || formData.notes === details?.notes)
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-2.5 bg-white px-2 py-4 md:px-4 md:py-6 rounded-sm shadow-sm"
    >
      <div className="flex items-center gap-1 md:gap-2">
        <FormInput
          name="prefix"
          handleInputChange={handleInputChange}
          placeholder="Prefix"
          type="text"
          value="+44"
          label="Prefix"
          className="w-13 rounded-r-none disabled:text-foreground"
          disabled
        />
        <div className="flex-1">
          <FormInput
            name="phone"
            handleInputChange={handleInputChange}
            placeholder="Phone Number"
            type="text"
            value={formData.phone}
            label="Phone Number"
            className="rounded-l-none"
            maxLength={10}
            required
          />
        </div>
      </div>
      <FormInput
        name="addressLine"
        handleInputChange={handleInputChange}
        placeholder="Address"
        type="text"
        value={formData.addressLine}
        label="Address"
        required
      />
      <FormInput
        name="notes"
        handleInputChange={handleInputChange}
        placeholder="Additional Information"
        type="text"
        value={formData.notes}
        label="Additional Information"
        maxLength={50}
      />
      <FormInput
        name="state"
        handleInputChange={handleInputChange}
        placeholder="Region"
        type="text"
        value={formData.state}
        label="Region"
        required
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2.5 gap-x-4">
        <FormInput
          name="postalCode"
          handleInputChange={handleInputChange}
          placeholder="Postcode"
          type="text"
          value={formData.postalCode}
          label="Postcode"
          required
        />
        <FormInput
          name="city"
          handleInputChange={handleInputChange}
          placeholder="City"
          type="text"
          value={formData.city}
          label="City"
          required
        />
      </div>
      <div className="mt-4 md:mt-6">
        <FormSubmitButton
          submitting={submitting}
          text={details ? 'Update' : 'Save'}
          texting={details ? 'Updating...' : 'Saving...'}
          disabled={disableUpdate}
        />
      </div>
    </form>
  )
}
export default AddressForm
