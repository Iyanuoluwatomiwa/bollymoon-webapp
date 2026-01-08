import { useSelector } from 'react-redux'
import PageTitle from '@/components/global/PageTitle'
import ShippingInformation from '@/components/checkout/ShippingInformation'
import OrderReview from '@/components/checkout/OrderReview'
import Container from '@/components/global/Container'
import ProgressIndicator from '@/components/checkout/ProgressIndicator'
import BreadcrumbHeader from '@/components/headers/BreadcrumbHeader'
import Payment from '@/components/checkout/Payment'

const Checkout = () => {
  const { step }: { step: number } = useSelector(
    (state: any) => state.checkoutState
  )
  const checkoutComponents: Record<number, React.ComponentType> = {
    1: ShippingInformation,
    2: OrderReview,
    3: Payment,
  }

  const Component = checkoutComponents[step]

  return (
    <>
      <PageTitle title="Checkout" />
      <Container className="py-10">
        <div className="space-y-6">
          <BreadcrumbHeader currentPage="Checkout" previousPage="cart" />

          <ProgressIndicator />
          <section className="max-w-xl mt-16 mx-auto">
            <Component />
          </section>
        </div>
      </Container>
    </>
  )
}

export default Checkout
