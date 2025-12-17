import { handleApiError } from '@/lib/apiError'
import { api } from '@/utils/axiosConfig'

export const getWishlists = async () => {
  try {
    const response = await api.get(`/v1/wishlist`)
    return response?.data
  } catch (error) {
    handleApiError(error)
  }
}

export const addToWishlist = async (id: string | undefined) => {
  try {
    const response = await api.post(`/v1/wishlist/${id}`)
    return response?.data
  } catch (error) {
    handleApiError(error)
  }
}
export const removeFromWishlist = async (id: string | undefined) => {
  try {
    const response = await api.delete(`/v1/wishlist/${id}`)
    return response?.data
  } catch (error) {
    handleApiError(error)
  }
}
