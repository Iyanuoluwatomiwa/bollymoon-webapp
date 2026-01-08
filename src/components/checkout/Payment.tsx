import { CreditCard } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { useDispatch } from 'react-redux'
import { handleStepChange } from '@/features/checkout/checkoutSlice'
import visaLogo from '@/assets/images/visa-logo.svg'
import mastercardLogo from '@/assets/images/mastercard-logo.svg'
import googlePayLogo from '@/assets/images/google-pay-logo.svg'
import klarnaLogo from '@/assets/images/klarna-logo.png'
import { useState } from 'react'
import { PaymentMethodCard } from './PaymentMethodCard'

type PaymentMethod = 'card' | 'google-pay' | 'klarna'
const CardLogos = () => (
  <div className="flex items-center gap-2 w-20">
    <img src={visaLogo} alt="Visa" className="h-6 w-auto" />
    <img src={mastercardLogo} alt="Mastercard" className="h-6 w-auto" />
  </div>
)

const GooglePayLogo = () => (
  <img
    src={googlePayLogo}
    alt="Google Pay"
    className="h-4 w-20 object-contain"
  />
)

const KlarnaLogo = () => (
  <img src={klarnaLogo} alt="Klarna" className="h-3 w-20 object-contain" />
)

function Payment() {
  const [selected, setSelected] = useState<PaymentMethod>('card')
  const dispatch = useDispatch()
  const handleStep = (step: number) => {
    dispatch(handleStepChange({ step }))
  }
  /* const {
      deliveryOption,
      shippingForm,
    }: { deliveryOption: string; shippingForm: DeliveryAddress } = useSelector(
      (state: any) => state.checkoutState
    )
     const {
       shipping,
       orderTotal,
     }: {
       shipping: number
       orderTotal: number
     } = useSelector((state: any) => state.cartState)
    const paymentData = {
      totalAmount: orderTotal,
      deliveryFee: shipping,
      deliveryOption,
      shippingDetailsId: shippingForm.id,
    }
     const handlePaymentSession = async () => {
      try {
        await paymentCheckout(paymentData)
      } catch (error: any) {
        toast.error(error.message)
      }
    }  */
  return (
    <Card className="rounded-sm bg-white gap-4">
      <CardHeader className="px-2 md:px-6">
        <CardTitle className="flex items-center space-x-2">
          <CreditCard className="w-5 h-5" />
          <span>Choose a Payment Method</span>
        </CardTitle>
      </CardHeader>
      <CardContent className=" px-2 md:px-6 space-y-6 md:space-y-6">
        <PaymentMethodCard
          selected={selected === 'card'}
          onSelect={() => setSelected('card')}
          icon={<CardLogos />}
          title="Credit or Debit Card"
        />

        <PaymentMethodCard
          selected={selected === 'google-pay'}
          onSelect={() => setSelected('google-pay')}
          icon={<GooglePayLogo />}
          title="Google Pay"
        />

        <PaymentMethodCard
          selected={selected === 'klarna'}
          onSelect={() => setSelected('klarna')}
          icon={<KlarnaLogo />}
          title="Klarna (Installment)"
        />
        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          <Button
            variant="outline"
            size="lg"
            onClick={() => handleStep(2)}
            className="sm:flex-1 bg-accent shadow-sm hover:shadow-md border-0 hover:bg-transparent hover:text-foreground h-9"
          >
            Back to Review
          </Button>
          <Button type="submit" size="lg" className="h-9 sm:flex-1 ">
            Pay Now
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
export default Payment
