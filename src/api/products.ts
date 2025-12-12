import type { ProductUpload } from '@/types/product.types'
import { api } from '@/utils/axiosConfig'

export const createProduct = async (product: ProductUpload) => {
  await api.post(`/v1/products`, product)
}
export const getProducts = async () => {
  const response = await api.get(`/v1/products`)
  return response.data
}
export const updateProduct = async ({
  productId,
  data,
}: {
  productId: string
  data: any
}) => {
  await api.put(`/v1/products/${productId}`, data)
}
export const getProduct = async (productId: string | undefined) => {
  const response = await api.get(`/v1/products/${productId}`)
  return response.data
}
export const deleteProduct = async (productId: string) => {
  await api.delete(`/v1/products/${productId}`)
}
