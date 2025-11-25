export type PaymentMethod = 'card' | 'bank' | 'bank_transfer' | 'ussd'

export interface PaymentMethodOption {
  id: PaymentMethod
  title: string
  description: string
  icon: any
  popular?: boolean
}
