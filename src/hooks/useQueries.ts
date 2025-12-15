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
import { getAllDeliveryAddresses, saveDeliveryAddress } from '@/api/address'
import type { DeliveryAddress } from '@/types/orders.types'
import { addToWishlist, getWishlists, removeFromWishlist } from '@/api/wishlist'

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

export const useAllDeliveryAddresses = () => {
  const allAddresses = async () => {
    const allAddresses = await getAllDeliveryAddresses()
    return allAddresses
  }
  const queryData = useQuery({
    queryKey: ['addresses'],
    queryFn: allAddresses,
  })
  return queryData
}

export const useUpdateDeliveryAddress = () => {
  const updateDeliveryAddressAction = async ({
    id,
    details,
  }: {
    id: string | undefined
    details: DeliveryAddress
  }) => {
    await updateDeliveryAddressAction({ id, details })
  }
  const queryClient = useQueryClient()
  const updateDeliveryAddressFunction = useMutation({
    mutationFn: updateDeliveryAddressAction,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['addresses'] })
    },
  })

  return updateDeliveryAddressFunction
}

export const useDeleteDeliveryAddress = () => {
  const deleteDeliveryAddressAction = async (id: string) => {
    await deleteProduct(id)
  }
  const queryClient = useQueryClient()
  const deleteDeliveryAddressFunction = useMutation({
    mutationFn: deleteDeliveryAddressAction,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['addresses'] })
    },
  })

  return deleteDeliveryAddressFunction
}

export const useSaveDeliveryAddress = () => {
  const saveDeliveryAddressAction = async (data: DeliveryAddress) => {
    await saveDeliveryAddress(data)
  }
  const queryClient = useQueryClient()
  const saveDeliveryAddressFunction = useMutation({
    mutationFn: saveDeliveryAddressAction,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['addresses'] })
    },
  })

  return saveDeliveryAddressFunction
}

export const useWishlists = () => {
  const wishlists = async () => {
    const wishlists = await getWishlists()
    return wishlists
  }
  const queryData = useQuery({
    queryKey: ['wishlists'],
    queryFn: wishlists,
  })
  return queryData
}

export const useAddToWishlist = () => {
  const addToWishlistAction = async (id: string | undefined) => {
    await addToWishlist(id)
  }
  const queryClient = useQueryClient()
  const addToWishlistFunction = useMutation({
    mutationFn: addToWishlistAction,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['wishlists'] })
    },
  })

  return addToWishlistFunction
}

export const useRemoveFromWishlist = () => {
  const removeFromWishlistAction = async (id: string | undefined) => {
    await removeFromWishlist(id)
  }
  const queryClient = useQueryClient()
  const removeFromWishlistFunction = useMutation({
    mutationFn: removeFromWishlistAction,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['wishlists'] })
    },
  })

  return removeFromWishlistFunction
}
