import CartItems from '@/components/cart/CartItems'
import EmptyCart from '@/components/cart/EmptyCart'
import OrderSummary from '@/components/cart/OrderSummary'
import Container from '@/components/global/Container'
import NoResult from '@/components/global/NoResult'
import PageTitle from '@/components/global/PageTitle'
import { useCartItems } from '@/hooks/useQueries'
import type { CartItem, FetchedCartItem } from '@/types/product.types'
import { Loader2 } from 'lucide-react'
import { useSelector } from 'react-redux'

function Cart() {
  const { token }: { token: string | null } = useSelector(
    (state: any) => state.userState
  )
  const {
    numItemsInCart,
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

  const sortFetchedCartItems = fetchedCartItems
    ?.flat()
    ?.sort(
      (a, b) =>
        new Date(b?.updatedAt ?? '').getTime() -
        new Date(a?.updatedAt ?? '').getTime()
    )
    .slice(0, 3)

  const fetchedNumItemsInCart: number = data?.data?.numItemsInCart
  const fetchedCartTotal: number = data?.data?.cartTotal
  const itemsInCart = fetchedNumItemsInCart
  const items = sortFetchedCartItems
  const totalAmount = fetchedCartTotal

  return (
    <>
      <PageTitle title="Cart" />
      <Container className="py-10 relative">
        {token ? (
          isLoading ? (
            <div className="w-full h-[80vh] flex items-center justify-center">
              <Loader2 className="w-5 h-5 animate-spin" />
            </div>
          ) : (
            <>
              {' '}
              {isError ? (
                <NoResult isError={isError} errorText="cart" />
              ) : (
                <div
                  className={` ${
                    itemsInCart && 'md:grid-cols-3'
                  }  md:grid gap-x-6`}
                >
                  <section className="col-span-2">
                    {!itemsInCart ? (
                      <EmptyCart />
                    ) : (
                      <CartItems numItemsInCart={itemsInCart} items={items} />
                    )}
                  </section>
                  {!itemsInCart || (
                    <section className="mt-10 md:mt-13">
                      <OrderSummary cartTotal={totalAmount} />
                    </section>
                  )}
                </div>
              )}
            </>
          )
        ) : (
          <div
            className={` ${
              numItemsInCart && 'md:grid-cols-3'
            }  md:grid gap-x-6`}
          >
            <section className="col-span-2">
              {!numItemsInCart ? (
                <EmptyCart />
              ) : (
                <CartItems numItemsInCart={numItemsInCart} items={cartItems} />
              )}
            </section>
            {!numItemsInCart || (
              <section className="mt-10 md:mt-13">
                <OrderSummary cartTotal={cartTotal} />
              </section>
            )}
          </div>
        )}
      </Container>
    </>
  )
}
export default Cart
