export type ColorQuantity = {
  color: string
  quantity: number
  id?: string
}

export type Variant = {
  id?: string
  size: string
  colors: ColorQuantity[]
  originalPrice: number
  discountPrice?: number
}

export type CartItem = {
  image: string | undefined
  name: string | undefined
  price: number
  color: string
  size?: string
  quantity: number
  id: string | undefined
  category: string | undefined
  discountPrice?: number
  originalPrice: number
  stock: number
  specId?: string | undefined
  colorId?: string | undefined
}

export type FetchedCartItem = {
  id: string
  name: string
  image: {
    id: string
    productId: string
    publicId: string
    url: string
    createdAt: string
  }
  category: string
  size: string
  quantity: number
  originalPrice: number
  discountPrice: number
  color: string
  stock: number
}

export type CartItemUpload = {
  specId: string | undefined
  colorId: string | undefined
  productId: string | undefined
  quantity: number
}

export type ProductFilter = {
  priceRange: number[] | null
  inStockOnly: boolean | null
  searchQuery?: string
  category?: string | null
}

export type ProductForm = {
  categories: {
    value: string
    label: string
  }[]
  subcategories: {
    hair: {
      label: string
      value: string
    }[]
    cosmetics: {
      label: string
      value: string
    }[]
  }
}

export type ProductUpload = {
  specs: Variant[]
  images: File[]
  subcategory: string
  name: string
  description: string
  category: string
  collection: string
}

export type ProductReviews = {
  id?: string
  rating: number
  productId: string | undefined
  name?: string
  comment: string
  createdAt?: string
}
export type ProductFetch = {
  id: string
  category: string
  subcategory: string
  name: string
  description: string
  images: { url: string; publicId: string }[]
  stock: number
  collection: string
  discountPriceMin: number
  discountPriceMax: number
  originalPriceMin: number
  originalPriceMax: number
  updatedAt: string
  createdAt: string
  specs?: Variant[]
  rating: number
  reviewsCount?: number
  reviews?: ProductReviews[]
}
