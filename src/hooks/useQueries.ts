import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from '@/api/products'
import type { ProductUpload } from '@/types/product.types'

export const useAllProducts = () => {
  const getAllProducts = async () => {
    const allProducts = await getProducts()
    return allProducts
  }
  const queryData = useQuery({
    queryKey: ['products'],
    queryFn: getAllProducts,
  })

  return queryData
}
export const useSingleProduct = (productId: string | undefined) => {
  const getSingleProduct = async () => {
    const singleProduct = await getProduct(productId)
    return singleProduct
  }
  const queryData = useQuery({
    queryKey: ['single-product'],
    queryFn: getSingleProduct,
  })

  return queryData
}

export const useCreateProduct = () => {
  const createProductAction = async (data: ProductUpload) => {
    await createProduct(data)
  }
  const queryClient = useQueryClient()
  const createProductFunction = useMutation({
    mutationFn: createProductAction,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] })
    },
  })

  return createProductFunction
}

export const useDeleteProduct = () => {
  const deleteProductAction = async (productId: string) => {
    await deleteProduct(productId)
  }
  const queryClient = useQueryClient()
  const deleteProductFunction = useMutation({
    mutationFn: deleteProductAction,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] })
      queryClient.invalidateQueries({ queryKey: ['single-product'] })
    },
  })

  return deleteProductFunction
}

// Update a Product
export const useUpdateProduct = () => {
  const updateProductAction = async ({
    productId,
    data,
  }: {
    productId: string
    data: any
  }) => {
    await updateProduct({ productId, data })
  }
  const queryClient = useQueryClient()
  const updateProductFunction = useMutation({
    mutationFn: updateProductAction,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] })
      queryClient.invalidateQueries({ queryKey: ['single-product'] })
    },
  })

  return updateProductFunction
}
