import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { currencyFormatter } from '@/utils/format'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

function OrderSummary({ cartTotal }: { cartTotal: number }) {
  const tax = (0.05 * cartTotal)
  const orderTotal = cartTotal + tax

  return (
    <Card className="sticky top-20 rounded-sm py-4 px-0">
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Price Breakdown */}
        <div className="space-y-2 pt-4 border-t">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>{currencyFormatter(cartTotal)}</span>
          </div>

          {/* <div className="flex justify-between">
            <span>Shipping</span>
            <span>{currencyFormatter(shipping)}</span>
          </div> */}

          <div className="flex justify-between">
            <span>Tax</span>
            <span>{currencyFormatter(tax)}</span>
          </div>

          <div className="flex justify-between font-semibold text-lg pt-2 border-t">
            <span>Total</span>
            <span>{currencyFormatter(orderTotal)}</span>
          </div>
        </div>

        {/* Checkout Button */}
        <Link to="/checkout" className="block">
          <Button className="w-full " size="lg">
            Proceed to Checkout
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
export default OrderSummary
