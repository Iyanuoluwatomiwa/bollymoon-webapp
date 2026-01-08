import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { currencyFormatter } from '@/utils/format'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

function OrderSummary({ cartTotal }: { cartTotal: number }) {
  return (
    <Card className="sticky top-20 rounded-sm py-4 gap-2 px-0">
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Price Breakdown */}
        <div className="space-y-4 pt-4 border-t">
          <div className="flex justify-between font-medium text-sm md:text-base">
            <span>Subtotal</span>
            <span>{currencyFormatter(cartTotal)}</span>
          </div>

          <p className="flex text-xs md:text-[12px]">
            Shipping and discounts are calculated at checkout
          </p>
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
