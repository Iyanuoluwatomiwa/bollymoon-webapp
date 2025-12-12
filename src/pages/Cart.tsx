import CartItems from '@/components/cart/CartItems'
import EmptyCart from '@/components/cart/EmptyCart'
import Container from '@/components/global/Container'
import PageTitle from '@/components/global/PageTitle'
import { sectionSuspense } from '@/utils/suspense'
import { lazy } from 'react'
import LazyLoad from 'react-lazyload'
import { useSelector } from 'react-redux'

const OrderSummary = lazy(() => import('@/components/cart/OrderSummary'))

function Cart() {
  const { numItemsInCart } = useSelector((state: any) => state.cartState)

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
              <LazyLoad>{sectionSuspense(<OrderSummary />)}</LazyLoad>
            </section>
          )}
        </div>
      </Container>
    </>
  )
}
export default Cart
