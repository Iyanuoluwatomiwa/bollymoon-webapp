import type { DeliveryAddress } from '@/types/orders.types'
import { Checkbox } from '../ui/checkbox'
import { useDispatch } from 'react-redux'
import { handleShippingInformation } from '@/features/checkout/checkoutSlice'
import { useSelector } from 'react-redux'

export default function ShippingAddressCard({
  addressLine,
  city,
  state,
  country,
  postalCode,
  phone,
  id,
}: DeliveryAddress) {
  const { shippingForm }: { shippingForm: DeliveryAddress } = useSelector(
    (state: any) => state.checkoutState
  )
  const dispatch = useDispatch()
  const addShippingInformation = () => {
    dispatch(
      handleShippingInformation({
        shippingForm: {
          addressLine,
          city,
          state,
          country,
          postalCode,
          phone,
          id,
        },
      })
    )
  }

  return (
    <div
      className={`p-2 md:p-4 rounded-sm shadow-sm  text-xs md:text-sm flex gap-4 justify-between h-full ${
        id == shippingForm.id ? 'bg-gray-50' : 'bg-white'
      } `}
    >
      <div className="space-y-0.5 flex-1">
        <p className="line-clamp-2">{addressLine}</p>
        <p>
          {city}, <span className="uppercase">{state}</span>
        </p>
        <p>{postalCode}</p>
        <p>{country}</p>
        <p>+44 {phone}</p>
      </div>

      <Checkbox
        checked={id == shippingForm.id}
        onClick={addShippingInformation}
        className="w-4 h-4 md:w-5 md:h-5 cursor-pointer"
      />
    </div>
  )
}
