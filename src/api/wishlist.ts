import { api } from '@/utils/axiosConfig'

export const getWishlists = async () => {
  const response = await api.get(`/v1/wishlist`)
  return response.data
}

export const addToWishlist = async (id: string | undefined) => {
  await api.post(`/v1/wishlist/${id}`)
}
export const removeFromWishlist = async (id: string | undefined) => {
  await api.delete(`/v1/wishlist/${id}`)
}
