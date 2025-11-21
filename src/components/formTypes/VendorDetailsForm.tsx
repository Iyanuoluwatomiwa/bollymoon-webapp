import { FormInput, FormSelect } from '@/components/form'
import { states } from '@/utils/data'

function VendorDetailsForm({ form }: { form: any }) {
  return (
    <>
      <FormInput
        form={form}
        label="First Name"
        placeholder="First Name"
        type="text"
        name="firstname"
      />
      <FormInput
        form={form}
        label="Last Name"
        placeholder="Last Name"
        type="text"
        name="lastname"
      />
      <FormInput
        form={form}
        label="Business Name"
        placeholder="Business Name"
        type="text"
        name="businessname"
      />
      <FormInput
        form={form}
        label="Phone Number"
        placeholder="Phone Number"
        type="tel"
        name="phone"
      />
      <FormInput
        form={form}
        label="City"
        placeholder="City of business"
        type="text"
        name="city"
      />
      <FormSelect
        form={form}
        name="state"
        label="State"
        placeholder="Select the state of your business"
        options={states}
      />
    </>
  )
}
export default VendorDetailsForm
