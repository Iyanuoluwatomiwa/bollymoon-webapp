import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../ui/button'
import {
  handleShippingFormInput,
  handleStepChange,
} from '@/features/checkout/checkoutSlice'
import { shippingInfoSchema, validateWithZodSchema } from '@/utils/schema'
import type { FormEvent } from 'react'
import FormInput from '../form-fields/FormInput'
import type { ShippingForm } from '@/types/checkout.types'

function ShippingInformationForm() {
  const { shippingForm }: { shippingForm: ShippingForm } = useSelector(
    (state: any) => state.checkoutState
  )
  const {
    email,
    firstname,
    lastname,
    address,
    city,
    state,
    postcode,
    phone,
    country,
  } = shippingForm
  const dispatch = useDispatch()
  const handleInputChange = (key: string, value: string | number) => {
    dispatch(handleShippingFormInput({ key, value }))
  }
  const handleStep = (step: number) => {
    dispatch(handleStepChange({ step }))
  }
  const handleShippingFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = {
      email,
      firstname,
      lastname,
      address,
      city,
      state,
      postcode,
      phone,
      country,
    }
    const validatedFields = validateWithZodSchema(shippingInfoSchema, formData)
    if (!validatedFields) {
      return
    }
    handleStep(2)
  }

  return (
    <form onSubmit={handleShippingFormSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormInput
          name="firstname"
          value={firstname}
          handleInputChange={handleInputChange}
          type="text"
          placeholder="First Name"
          required
        />
        <FormInput
          name="lastname"
          value={lastname}
          handleInputChange={handleInputChange}
          type="text"
          placeholder="Last Name"
          required
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormInput
          name="email"
          value={email}
          handleInputChange={handleInputChange}
          type="email"
          placeholder="Email address"
          required
        />
        <FormInput
          name="phone"
          value={phone}
          handleInputChange={handleInputChange}
          type="tel"
          placeholder="Phone number"
          required
        />
      </div>

      <FormInput
        name="address"
        value={address}
        handleInputChange={handleInputChange}
        type="text"
        placeholder="Shipping address"
        required
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormInput
          name="postcode"
          value={postcode}
          handleInputChange={handleInputChange}
          type="text"
          placeholder="Postal code"
          required
        />
        <FormInput
          name="city"
          value={city}
          handleInputChange={handleInputChange}
          type="text"
          placeholder="City"
          required
        />
        <FormInput
          name="state"
          value={state}
          handleInputChange={handleInputChange}
          type="text"
          placeholder="State"
          required
        />
        <FormInput
          name="country"
          value={country}
          handleInputChange={handleInputChange}
          type="text"
          placeholder="Country"
          disabled
        />
      </div>

      <Button type="submit" size="lg" className="w-full mt-4">
        Continue to Review
      </Button>
    </form>
  )
}
export default ShippingInformationForm
