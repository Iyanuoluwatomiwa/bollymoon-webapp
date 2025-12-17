import { handleApiError } from '@/lib/apiError'
import type { PaymentData } from '@/types/payment.types'
import { api } from '@/utils/axiosConfig'

export const paymentCheckout = async (data: PaymentData) => {
  try {
    const response = await api.post(
      `/v1/payments/create-checkout-session`,
      data
    )
    return response?.data
  } catch (error) {
    handleApiError(error)
  }
}
