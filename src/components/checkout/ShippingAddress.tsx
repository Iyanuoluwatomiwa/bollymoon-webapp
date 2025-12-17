import { useSelector } from 'react-redux'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import type { DeliveryAddress } from '@/types/orders.types'
import type { UserProfile } from '@/types/user.types'

function ShippingAddress() {
  const { userProfile }: { userProfile: UserProfile } = useSelector(
    (state: any) => state.userState
  )
  const {
    shippingForm,
    deliveryOption,
  }: { shippingForm: DeliveryAddress; deliveryOption: 'standard' | 'express' } =
    useSelector((state: any) => state.checkoutState)
  const { addressLine, city, state, postalCode, country, phone } = shippingForm
  return (
    <Card className="bg-gray-50 border-0 rounded-sm gap-2">
      <CardHeader>
        <CardTitle>Shipping Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-1 text-xs md:text-sm  ">
          <p className="capitalize font-medium bg-primary px-2 pyy-0.5 md:py-1  text-white w-max mb-2">
            {deliveryOption} Delivery
          </p>
          <p className="capitalize text-sm md:text-base font-medium">
            {userProfile.firstName} {userProfile.lastName}
          </p>
          <div>
            <p>{addressLine}</p>
            <p>
              {city}, <span className="uppercase">{state}</span>
            </p>
            <p>{postalCode}</p>
            <p>{country}</p>
          </div>
          <p className="font-medium">+44 {phone}</p>
        </div>
      </CardContent>
    </Card>
  )
}
export default ShippingAddress
