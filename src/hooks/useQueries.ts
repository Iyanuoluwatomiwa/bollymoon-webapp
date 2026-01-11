import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getCollectionProducts,
  getProduct,
  getProducts,
  updateProduct,
} from '@/api/products'
import type {
  CartItemUpload,
  ProductFetch,
  ProductReviews,
  ProductUpload,
} from '@/types/product.types'
import {
  getAllOrders,
  getMyOrders,
  getOrderById,
  updateOrder,
} from '@/api/orders'
import {
  deleteDeliveryAddress,
  getAllDeliveryAddresses,
  saveDeliveryAddress,
  updateDeliveryAddress,
} from '@/api/address'
import type { DeliveryAddress } from '@/types/orders.types'
import {
  addBulkWishlist,
  addToWishlist,
  getWishlists,
  removeFromWishlist,
} from '@/api/wishlist'
import { toast } from 'sonner'
import {
  addBulkCartItems,
  addToCart,
  getCartItems,
  removeFromCart,
  updateCart,
} from '@/api/cart'
import { createProductReviews, getProductReviews } from '@/api/reviews'

export const useAllProducts = ({
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
  const getAllProducts = async () => {
    const products = await getProducts({
      search,
      category,
      minPrice,
      maxPrice,
      currentPage,
      stock,
    })
    return products
  }
  const queryData = useQuery({
    queryKey: [
      'products',
      search,
      category,
      minPrice,
      maxPrice,
      currentPage,
      stock,
    ],
    queryFn: getAllProducts,
  })

  return queryData
}

export const useAllProductsByAdmin = () => {
  const getAllProductsByAdmin = async () => {
    const allProducts = await getAllProducts()
    return allProducts
  }
  const queryData = useQuery({
    queryKey: ['products'],
    queryFn: getAllProductsByAdmin,
  })

  return queryData
}

export const useProductsMaxPrice = () => {
  const getAllProductsMaxPrice = async () => {
    const data = await getAllProducts()
    const products: ProductFetch[] = data?.data
    const maxPrice = products?.reduce(
      (max, product) =>
        product.originalPriceMax > max ? product.originalPriceMax : max,
      products[0].originalPriceMax
    )
    return maxPrice
  }
  const queryData = useQuery({
    queryKey: ['products'],
    queryFn: getAllProductsMaxPrice,
  })

  return queryData
}

export const useCollectionProducts = (collection: string | undefined) => {
  const getProducts = async () => {
    const products = await getCollectionProducts(collection)
    return products
  }
  const queryData = useQuery({
    queryKey: ['products', collection],
    queryFn: getProducts,
  })

  return queryData
}
export const useSingleProduct = (productId: string | undefined) => {
  const getSingleProduct = async () => {
    const singleProduct = await getProduct(productId)

    return singleProduct
  }
  const queryData = useQuery({
    queryKey: ['single-product', productId],
    queryFn: getSingleProduct,
  })

  return queryData
}

export const useCreateProduct = () => {
  const createProductAction = async (data: ProductUpload) => {
    try {
      await createProduct(data)
      toast.success('Product added successfully!')
    } catch (error: any) {
      toast.error(error?.message)
    }
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
    try {
      const response: any = await deleteProduct(productId)
      toast.success(response?.message)
    } catch (error: any) {
      toast.error(error?.message)
    }
  }
  const queryClient = useQueryClient()
  const deleteProductFunction = useMutation({
    mutationFn: deleteProductAction,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] })
      queryClient.invalidateQueries({ queryKey: ['single-product'] })
      queryClient.invalidateQueries({ queryKey: ['reviews'] })
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
    try {
      const response: any = await updateProduct({ productId, data })
      toast.success(response?.message)
    } catch (error: any) {
      toast.error(error?.message)
    }
  }
  const queryClient = useQueryClient()
  const updateProductFunction = useMutation({
    mutationFn: updateProductAction,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] })
      queryClient.invalidateQueries({ queryKey: ['single-product'] })
      queryClient.invalidateQueries({ queryKey: ['reviews'] })
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
    queryKey: ['order-details', orderId],
    queryFn: singleOrder,
  })

  return queryData
}

export const useUpdateOrder = () => {
  const updateOrderAction = async ({
    id,
    status,
    orderId,
  }: {
    id: string | undefined
    status: string
    orderId: string | undefined
  }) => {
    try {
      await updateOrder({ id, status })
      toast.success(
        `Order Updated - Order ${orderId} status has been changed to ${status}`
      )
    } catch (error: any) {
      toast.error(error?.message)
    }
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
    try {
      const response = await updateDeliveryAddress({ id, details })
      toast.success(response?.message)
    } catch (error: any) {
      toast.error(error.message)
    }
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
  const deleteDeliveryAddressAction = async (id: string | undefined) => {
    try {
      const response = await deleteDeliveryAddress(id)
      toast.success(response?.message)
    } catch (error: any) {
      toast.error(error.message)
    }
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
    try {
      const response = await saveDeliveryAddress(data)
      toast.success(response?.message)
    } catch (error: any) {
      toast.error(error?.message)
      return
    }
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
  const addToWishlistAction = async ({
    name,
    id,
  }: {
    id: string | undefined
    name: string | undefined
  }) => {
    try {
      await addToWishlist(id)
      toast.success(`${name} has been  added to your wishlist`)
    } catch (error: any) {
      toast.error(`Error adding ${name} to your wishlist. Please try again.`)
    }
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
export const useAddBulkWishlist = () => {
  const addBulkWishlistAction = async (ids: string[]) => {
    try {
      await addBulkWishlist(ids)
    } catch (error: any) {}
  }
  const queryClient = useQueryClient()
  const addToWishlistFunction = useMutation({
    mutationFn: addBulkWishlistAction,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['wishlists'] })
    },
  })

  return addToWishlistFunction
}

export const useRemoveFromWishlist = () => {
  const removeFromWishlistAction = async ({
    id,
    name,
  }: {
    id: string | undefined
    name: string | undefined
  }) => {
    try {
      await removeFromWishlist(id)
      toast.success(`${name} has been  removed from your wishlist`)
    } catch (error) {
      toast.error(
        `Error removing ${name} from yyour wishlist. Please try again.`
      )
    }
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

export const useCartItems = () => {
  const cartItems = async () => {
    const cartItems = await getCartItems()
    return cartItems
  }
  const queryData = useQuery({
    queryKey: ['cart'],
    queryFn: cartItems,
  })
  return queryData
}

export const useAddToCart = () => {
  const addToCartAction = async ({
    data,
    name,
  }: {
    data: CartItemUpload
    name?: string | undefined
  }) => {
    try {
      await addToCart(data)
      toast.success(`${name} has been added to your cart`)
    } catch (error: any) {
      toast.error(error?.message)
      return
    }
  }
  const queryClient = useQueryClient()
  const addToCartFunction = useMutation({
    mutationFn: addToCartAction,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] })
    },
  })

  return addToCartFunction
}
export const useAddBulkCartItems = () => {
  const addBulkCartItemsAction = async (data: CartItemUpload[]) => {
    try {
      await addBulkCartItems(data)
    } catch (error: any) {}
  }
  const queryClient = useQueryClient()
  const addToCartFunction = useMutation({
    mutationFn: addBulkCartItemsAction,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] })
    },
  })

  return addToCartFunction
}

export const useUpdateCart = () => {
  const updateCartAction = async (data: CartItemUpload) => {
    try {
      await updateCart(data)
      toast.success('Cart updated')
    } catch (error: any) {
      toast.error(error?.message)
    }
  }
  const queryClient = useQueryClient()
  const updateCartFunction = useMutation({
    mutationFn: updateCartAction,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] })
    },
  })

  return updateCartFunction
}

export const useRemoveFromCart = () => {
  const removeFromCartAction = async ({
    data,
    name,
  }: {
    data: CartItemUpload
    name: string | undefined
  }) => {
    try {
      await removeFromCart(data)
      toast.success(`${name} has been  removed from your cart`)
    } catch (error: any) {
      toast.error(error?.message)
    }
  }
  const queryClient = useQueryClient()
  const removeFromCartFunction = useMutation({
    mutationFn: removeFromCartAction,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] })
    },
  })

  return removeFromCartFunction
}

export const useProductReviews = (productId: string | undefined) => {
  const getAllProductReviews = async () => {
    const productReviews = await getProductReviews(productId)
    return productReviews
  }
  const queryData = useQuery({
    queryKey: ['reviews', productId],
    queryFn: getAllProductReviews,
  })
  return queryData
}

export const useCreateProductReviews = () => {
  const createProductReviewsAction = async (data: ProductReviews) => {
    try {
      await createProductReviews(data)
      toast.success('Review submitted successfully!')
    } catch (error: any) {
      toast.error(error?.message)
    }
  }
  const queryClient = useQueryClient()
  const createProductReviewsFunction = useMutation({
    mutationFn: createProductReviewsAction,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reviews'] })
    },
  })
  return createProductReviewsFunction
}
