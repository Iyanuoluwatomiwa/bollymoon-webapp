import { MapPin } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import OrderSummary from './OrderSummary'
import { Button } from '../ui/button'
import ShippingAddress from './ShippingAddress'
import { useDispatch } from 'react-redux'
import { handleStepChange } from '@/features/checkout/checkoutSlice'
import { useSelector } from 'react-redux'
import type { DeliveryAddress } from '@/types/orders.types'
import { paymentCheckout } from '@/api/payment'
import { toast } from 'sonner'

function OrderReview() {
  const dispatch = useDispatch()
  const handleStep = (step: number) => {
    dispatch(handleStepChange({ step }))
  }
  const {
    deliveryOption,
    shippingForm,
  }: { deliveryOption: string; shippingForm: DeliveryAddress } = useSelector(
    (state: any) => state.checkoutState
  )
  const {
    shipping,
    orderTotal,
  }: {
    shipping: number
    orderTotal: number
  } = useSelector((state: any) => state.cartState)

  const paymentData = {
    totalAmount: orderTotal,
    deliveryFee: shipping,
    deliveryOption,
    shippingDetailsId: shippingForm.id,
  }
  const handlePaymentSession = async () => {
    try {
      await paymentCheckout(paymentData)
    } catch (error: any) {
      toast.error(error.message)
    }
  }

  return (
    <Card className="bg-white rounded-sm">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <MapPin className="w-5 h-5" />
          <span>Review Your Order</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Shipping Address */}
          <ShippingAddress />

          {/* Order Summary */}
          <OrderSummary />

          <div className="flex space-x-3 mt-8">
            <Button
              variant="outline"
              size="lg"
              onClick={() => handleStep(1)}
              className="flex-1 bg-transparent shadow-xs hover:shadow-sm border-0 hover:bg-transparent hover:text-foreground h-9"
            >
              Back to Shipping
            </Button>
            <Button
              type="submit"
              size="lg"
              className="flex-1 h-9"
              onClick={handlePaymentSession}
            >
              Proceed to Payment
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
export default OrderReview
