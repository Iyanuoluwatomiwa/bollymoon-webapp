import { handleApiError } from '@/lib/apiError'
import type { ProductUpload } from '@/types/product.types'
import { api } from '@/utils/axiosConfig'

export const createProduct = async (product: ProductUpload) => {
  await api.post(`/v1/products`, product)
}

export const getAllProducts = async () => {
  try {
    const response = await api.get(`/v1/products`)
    return response?.data
  } catch (error) {
    handleApiError(error)
  }
}

export const getProducts = async ({
  search,
  category,
  minPrice,
  maxPrice,
  currentPage,
  stock,
}: {
  search?: string
  category?: string | null
  minPrice?: number | null
  maxPrice?: number | null
  currentPage?: number
  stock?: boolean | null
}) => {
  console.log(search)

  try {
    const response = await api.get(
      `/v1/products?category=${category && category}&search=${
        search && search
      }&minPrice=${minPrice && minPrice}&maxPrice=${
        maxPrice && maxPrice
      }&stock=${stock && stock}&page=${currentPage}`
    )
    return response?.data
  } catch (error) {
    handleApiError(error)
  }
}
/*  */

export const getCollectionProducts = async (collection: string | undefined) => {
  try {
    const response = await api.get(`/v1/products?collection=${collection}`)
    return response?.data
  } catch (error) {
    handleApiError(error)
  }
}
export const updateProduct = async ({
  productId,
  data,
}: {
  productId: string | undefined
  data: any
}) => {
  try {
    const response = await api.put(`/v1/products/${productId}`, data)
    return response?.data
  } catch (error) {
    handleApiError(error)
  }
}
export const getProduct = async (productId: string | undefined) => {
  try {
    const response = await api.get(`/v1/products/${productId}`)
    return response?.data
  } catch (error) {
    handleApiError(error)
  }
}
export const deleteProduct = async (productId: string) => {
  try {
    const response = await api.delete(`/v1/products/${productId}`)
    return response?.data
  } catch (error) {
    handleApiError(error)
  }
}
