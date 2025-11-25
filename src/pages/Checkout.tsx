import { useSelector } from 'react-redux'
import SubPagesHeader from '@/components/headers/SubPagesHeader'
import PageTitle from '@/components/global/PageTitle'
import ShippingInformation from '@/components/checkout/ShippingInformation'
import OrderReview from '@/components/checkout/OrderReview'
import PaymentInformation from '@/components/checkout/PaymentInformation'
import Container from '@/components/global/Container'
import ProgressIndicator from '@/components/checkout/ProgressIndicator'

const Checkout = () => {
  const { step }: { step: number } = useSelector(
    (state: any) => state.checkoutState
  )
  const checkoutComponents: Record<number, React.ComponentType> = {
    1: ShippingInformation,
    2: OrderReview,
    3: PaymentInformation,
  }

  const Component = checkoutComponents[step]

  return (
    <>
      <PageTitle title="Checkout" />
      <Container className="py-10">
        <div className="space-y-6">
          <SubPagesHeader currentPage="Checkout" previousPage="cart" />

          <ProgressIndicator />
          <section className="max-w-lg mt-16 mx-auto">
            <Component />
          </section>
        </div>
      </Container>
    </>
  )
}

export default Checkout
