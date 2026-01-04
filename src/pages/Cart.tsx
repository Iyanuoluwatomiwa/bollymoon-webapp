import CartItems from '@/components/cart/CartItems'
import EmptyCart from '@/components/cart/EmptyCart'
import OrderSummary from '@/components/cart/OrderSummary'
import Container from '@/components/global/Container'
import PageTitle from '@/components/global/PageTitle'
import { useSelector } from 'react-redux'

function Cart() {
  const { numItemsInCart } = useSelector((state: any) => state.cartState)
  /*  const { token }: { token: string | null } = useSelector(
      (state: any) => state.userState
    )
  const { data, isLoading, isError } = useCartItems()
    const fetchedCartItems = data?.data?.map(
      ({ numItemsInCart, cartItems }: { product: ProductFetch }) => product
    ) */

  return (
    <>
      <PageTitle title="Cart" />
      <Container className="py-10 relative">
        <div
          className={` ${numItemsInCart && 'md:grid-cols-3'}  md:grid gap-x-6`}
        >
          <section className="col-span-2">
            {!numItemsInCart ? <EmptyCart /> : <CartItems />}
          </section>
          {!numItemsInCart || (
            <section className="mt-10 md:mt-13">
              <OrderSummary />
            </section>
          )}
        </div>
      </Container>
    </>
  )
}
export default Cart
