import type { ProductReviews } from '@/types/product.types'
import { api } from '@/utils/axiosConfig'

export const getProductReviews = async (id: string | undefined) => {
  const response = await api.get(`/v1/reviews/product/${id}`)
  return response.data
}
export const createProductReviews = async (data: ProductReviews) => {
  const response = await api.post(`/v1/reviews`, data)
  return response.data
}
