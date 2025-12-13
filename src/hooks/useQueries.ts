import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from '@/api/products'
import type { ProductUpload } from '@/types/product.types'
import {
  getAllOrders,
  getMyOrders,
  getOrderById,
  updateOrder,
} from '@/api/orders'

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

export const useUpdateProduct = () => {
  const updateProductAction = async ({
    productId,
    data,
  }: {
    productId: string | undefined
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

export const useAllOrders = () => {
  const allOrders = async () => {
    const allOrders = await getAllOrders()
    return allOrders
  }
  const queryData = useQuery({
    queryKey: ['orders'],
    queryFn: allOrders,
  })

  return queryData
}

export const useMyOrders = () => {
  const allMyOrders = async () => {
    const allMyOrders = await getMyOrders()
    return allMyOrders
  }
  const queryData = useQuery({
    queryKey: ['user-orders'],
    queryFn: allMyOrders,
  })

  return queryData
}

export const useSingleOrder = (orderId: string | undefined) => {
  const singleOrder = async () => {
    const singleOrder = await getOrderById(orderId)
    return singleOrder
  }
  const queryData = useQuery({
    queryKey: ['order-details'],
    queryFn: singleOrder,
  })

  return queryData
}

export const useUpdateOrder = () => {
  const updateOrderAction = async ({
    orderId,
    status,
  }: {
    orderId: string | undefined
    status: {
      status: 'processing' | 'delivered' | 'canceled'
    }
  }) => {
    await updateOrder({ orderId, status })
  }
  const queryClient = useQueryClient()
  const updateOrderFunction = useMutation({
    mutationFn: updateOrderAction,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['orders'] })
      queryClient.invalidateQueries({ queryKey: ['user-orders'] })
      queryClient.invalidateQueries({ queryKey: ['order-details'] })
    },
  })

  return updateOrderFunction
}
