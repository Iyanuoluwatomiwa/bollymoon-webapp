import { useSelector } from 'react-redux'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { currencyFormatter } from '@/utils/format'
import type { CartItem, FetchedCartItem } from '@/types/product.types'
import { useCartItems } from '@/hooks/useQueries'
import { Loader2 } from 'lucide-react'

function OrderSummary() {
  const { token }: { token: string | null } = useSelector(
    (state: any) => state.userState
  )
  const {
    cartItems,
    cartTotal,
  }: { numItemsInCart: number; cartItems: CartItem[]; cartTotal: number } =
    useSelector((state: any) => state.cartState)
  const { data, isLoading, isError } = useCartItems()
  const fetchedCartItems: CartItem[] = data?.data?.cartItems.map(
    (item: FetchedCartItem) => {
      return {
        ...item,
        image: item.image.url,
        id: item.image.productId,
        price: item.discountPrice ? item.discountPrice : item.originalPrice,
      }
    }
  )
  const fetchedCartTotal: number = data?.data?.cartTotal
  const items = token ? fetchedCartItems : cartItems
  const totalAmount = token ? fetchedCartTotal : cartTotal
  const shipping = 5
  const tax = 0.05 * totalAmount
  const orderTotal = totalAmount + tax + shipping

  return (
    <Card className="bg-gray-50 border-0 rounded-sm">
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      {isLoading ? (
        <div className="w-full h-[25vh] flex items-center justify-center">
          <Loader2 className="w-5 h-5 animate-spin" />{' '}
        </div>
      ) : (
        <>
          <CardContent className="space-y-4">
            {/* Order Items */}
            <div className="space-y-4">
              {items?.map((item) => (
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
                <span>{currencyFormatter(totalAmount)}</span>
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

          {isError && (
            <p className="w-full h-[25vh] flex items-center text-xs sm:text-sm px-4 font-medium">
              An error occured. Kindly check your network connection and reload
              page
            </p>
          )}
        </>
      )}
    </Card>
  )
}
export default OrderSummary
