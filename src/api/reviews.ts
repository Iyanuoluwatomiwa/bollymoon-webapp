import { api } from '@/utils/axiosConfig'

export const getProductReviews = async (id: string | undefined) => {
  const response = await api.get(`/v1/reviews/product/${id}`)
  return response.data
}
