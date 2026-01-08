import { MapPin } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import OrderSummary from './OrderSummary'
import ShippingAddress from './ShippingAddress'

function OrderReview() {
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
        </div>
      </CardContent>
    </Card>
  )
}
export default OrderReview
