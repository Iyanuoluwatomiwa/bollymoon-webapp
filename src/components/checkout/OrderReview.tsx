import { MapPin } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import OrderSummary from './OrderSummary'
import { Button } from '../ui/button'
import ShippingAddress from './ShippingAddress'
import { useDispatch } from 'react-redux'
import { handleStepChange } from '@/features/checkout/checkoutSlice'

function OrderReview() {
  const dispatch = useDispatch()
  const handleStep = (step: number) => {
    dispatch(handleStepChange({ step }))
  }

  return (
    <Card className="bg-white rounded-sm">
      <CardHeader className="px-2 md:px-6">
        <CardTitle className="flex items-center space-x-2">
          <MapPin className="w-5 h-5" />
          <span>Review Your Order</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="px-2 md:px-6">
        <div className="space-y-6">
          {/* Shipping Address */}
          <ShippingAddress />

          {/* Order Summary */}
          <OrderSummary />

          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <Button
              variant="outline"
              size="lg"
              onClick={() => handleStep(1)}
              className="sm:flex-1 bg-accent shadow-sm hover:shadow-md border-0 hover:bg-transparent hover:text-foreground h-9"
            >
              Back to Shipping
            </Button>
            <Button
              type="submit"
              size="lg"
              className="h-9 sm:flex-1 "
              onClick={() => handleStep(3)}
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
