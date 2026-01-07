import { useSelector } from 'react-redux'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { currencyFormatter } from '@/utils/format'
import type { CartItem, FetchedCartItem } from '@/types/product.types'
import { useCartItems, useMyOrders } from '@/hooks/useQueries'
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
  const {
    data: myOrders,
    isLoading: myOrdersLoading,
    isError: myOrdersError,
  } = useMyOrders()
  const allMyOrders = myOrders?.data

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
  const shipping = totalAmount > 30 ? 0 : 5
  const tax = 0.05 * totalAmount
  const checkFirstOrder = allMyOrders
    ? totalAmount - 0.1 * totalAmount
    : totalAmount
  const orderTotal = checkFirstOrder + tax + shipping

  return (
    <Card className="bg-gray-50 border-0 rounded-sm">
      <CardHeader className="px-2 md:px-6">
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      {isLoading || myOrdersLoading ? (
        <div className="w-full h-[25vh] flex items-center justify-center">
          <Loader2 className="w-5 h-5 animate-spin" />{' '}
        </div>
      ) : (
        <>
          {isError || myOrdersError ? (
            <p className="w-full h-[25vh] flex items-center text-xs sm:text-sm px-4 font-medium text-center">
              An error occured. Kindly check your network connection and reload
              page
            </p>
          ) : (
            <CardContent className="space-y-4 px-2 md:px-6">
              {/* Order Items */}
              <div className="space-y-4">
                {items?.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-start gap-2 sm:gap-4"
                  >
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
                    <p className="font-medium text-sm sm:text-base">
                      {currencyFormatter(item.price * item.quantity)}
                    </p>
                  </div>
                ))}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-2 pt-4 border-t">
                <div className="flex justify-between font-medium text-sm sm:text-base gap-4">
                  <span>Subtotal</span>
                  <span>{currencyFormatter(totalAmount)}</span>
                </div>
                <div className="flex justify-between font-medium text-sm sm:text-base gap-4">
                  <span>Shipping</span>
                  <div>
                    {shipping == 0 ? (
                      <span className="text-sm sm:text-base">free </span>
                    ) : (
                      <span>{currencyFormatter(shipping)}</span>
                    )}
                  </div>
                </div>

                <div className="flex justify-between font-medium text-sm sm:text-base gap-4">
                  <span>Tax</span>
                  <span>{currencyFormatter(tax)}</span>
                </div>
                {allMyOrders?.length == 0 && (
                  <div className="flex justify-between font-medium text-sm sm:text-base gap-4">
                    <span>10% discount</span>
                    <span>included</span>
                  </div>
                )}
                <div className="flex justify-between font-semibold text-base sm:text-lg pt-2 border-t">
                  <span>Total</span>
                  <span>{currencyFormatter(orderTotal)}</span>
                </div>
              </div>
            </CardContent>
          )}
        </>
      )}
    </Card>
  )
}
export default OrderSummary
