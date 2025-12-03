export type OrderItem = {
  productImage?: string
  productName?: string
  price?: number
  color?: string
  size?: string
  quantity?: number
  id?: string
  category?: string
  discountPrice?: number
  originalPrice?: number
  productId?: string
}

export type Order = {
  id: string
  orderId: string
  createdAt: number
  updatedAt: number
  orderTotal: number
  paymentMethod: string
  subtotal: number
  deliveryFee: number
  deliveryOption: string
  ShippingDetails: string
  status: string
  uid: string
  orderItems: OrderItem[]
}

export type OrderItemByUser = {
  id: string
  productId: string
  productName: string
  reviewed: boolean
  orderId: number
  productImage: string
  updatedAt: number
  category: string
  status: string
}
