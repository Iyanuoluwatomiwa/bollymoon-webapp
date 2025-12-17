import { useSelector } from 'react-redux'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { currencyFormatter } from '@/utils/format'
import type { CartItem } from '@/types/product.types'

function OrderSummary() {
  const {
    cartTotal,
    shipping,
    tax,
    orderTotal,
    cartItems,
  }: {
    cartTotal: number
    shipping: number
    tax: number
    orderTotal: number
    cartItems: CartItem[]
  } = useSelector((state: any) => state.cartState)

  return (
    <Card className="bg-gray-50 border-0 rounded-sm">
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Order Items */}
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-start">
              <div className="flex-1 space-y-1">
                <p className="font-medium text-sm">{item.name}</p>
                <div className="flex items-center gap-4">
                  {item.size?.toLowerCase() !== 'n/a' && (
                    <p className="text-xs text-muted-foreground">
                      Size: {item.size}
                    </p>
                  )}
                  {item.color?.toLowerCase() !== 'n/a' && (
                    <p className="text-xs text-muted-foreground capitalize">
                      Color: {item.color}
                    </p>
                  )}
                </div>
                <p className="text-xs text-muted-foreground">
                  Qty: {item.quantity}
                </p>
              </div>
              <p className="font-medium">
                {currencyFormatter(item.price * item.quantity)}
              </p>
            </div>
          ))}
        </div>

        {/* Price Breakdown */}
        <div className="space-y-2 pt-4 border-t">
          <div className="flex justify-between font-medium">
            <span>Subtotal</span>
            <span>{currencyFormatter(cartTotal)}</span>
          </div>
          <div className="flex justify-between font-medium">
            <span>Shipping</span>
            <span>{currencyFormatter(shipping)}</span>
          </div>

          <div className="flex justify-between font-medium">
            <span>Tax</span>
            <span>{currencyFormatter(tax)}</span>
          </div>

          <div className="flex justify-between font-semibold text-lg pt-2 border-t">
            <span>Total</span>
            <span>{currencyFormatter(orderTotal)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
export default OrderSummary
