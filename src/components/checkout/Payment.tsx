import { CreditCard, Shield } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { useDispatch } from 'react-redux'
import { handleStepChange } from '@/features/checkout/checkoutSlice'
import visaLogo from '@/assets/images/visa-logo.svg'
import mastercardLogo from '@/assets/images/mastercard-logo.svg'
import amexLogo from '@/assets/images/amex-logo.svg'
import klarnaLogo from '@/assets/images/klarna-logo.png'
import googlePayLogo from '@/assets/images/google-pay-logo.svg'

import { PaymentMethodCard } from './PaymentMethodCard'
import type { DeliveryAddress } from '@/types/orders.types'
import { useSelector } from 'react-redux'
import { paymentCheckout } from '@/api/payment'
import { toast } from 'sonner'

const CardLogos = () => (
  <div className="flex items-center gap-2">
    <img src={visaLogo} alt="Visa" className="h-6 w-auto" />
    <img src={mastercardLogo} alt="Mastercard" className="h-6 w-auto" />
    <img src={amexLogo} alt="America Express" className="h-6 w-auto" />
  </div>
)

const GooglePayLogo = () => (
  <img
    src={googlePayLogo}
    alt="Klarna"
    className="h-4.5 w-auto object-contain"
  />
)

const KlarnaLogo = () => (
  <img src={klarnaLogo} alt="Klarna" className="h-3 w-auto object-contain" />
)

function Payment() {
  const dispatch = useDispatch()
  const handleStep = (step: number) => {
    dispatch(handleStepChange({ step }))
  }
  const {
    deliveryOption,
    shippingForm,
    totalAmount,
  }: {
    deliveryOption: string
    shippingForm: DeliveryAddress
    totalAmount: number
  } = useSelector((state: any) => state.checkoutState)

  const deliveryFee = deliveryOption == 'standard' ? 5 : 14
  const paymentData = {
    totalAmount,
    deliveryFee,
    deliveryOption,
    shippingDetailsId: shippingForm.id,
  }
  const handlePaymentSession = async () => {
    try {
      const response = await paymentCheckout(paymentData)
      const data = response?.data
      if (data) {
        window.location.href = data.url
      }
    } catch (error: any) {
      toast.error(error.message)
    }
  }
  return (
    <Card className="rounded-sm bg-white gap-4">
      <CardHeader className="px-2 md:px-6">
        <CardTitle className="flex items-center space-x-2">
          <CreditCard className="w-5 h-5" />
          <span>We accept</span>
        </CardTitle>
      </CardHeader>
      <CardContent className=" px-2 md:px-6 space-y-6 md:space-y-6">
        <PaymentMethodCard icon={<CardLogos />} title="Credit or Debit Card" />
        <PaymentMethodCard icon={<GooglePayLogo />} title="Google Pay" />

        <PaymentMethodCard icon={<KlarnaLogo />} title="Buy now, pay later" />
        <p className="text-xs text-gray-600 mt-2">
          Payment options may vary based on your location.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          <Button
            variant="outline"
            size="lg"
            onClick={() => handleStep(2)}
            className="sm:flex-1 bg-accent shadow-sm hover:shadow-md border-0 hover:bg-transparent hover:text-foreground h-9"
          >
            Back to Review
          </Button>
          <Button
            type="submit"
            size="lg"
            className="h-9 sm:flex-1 "
            onClick={handlePaymentSession}
          >
            Pay Now
          </Button>
        </div>
        <p className="text-xs text-gray-600 flex items-center gap-1 justify-center">
          <Shield className="w-3 h-3" />{' '}
          <span>Secure payment powered by Stripe.</span>
        </p>
      </CardContent>
    </Card>
  )
}
export default Payment
