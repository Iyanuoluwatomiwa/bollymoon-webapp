import type { RatingsAndReviews } from './ratings_reviews.types'

export type ColorQuantity = { color: string; quantity: number }

export type Variant = {
  size: string
  colors: ColorQuantity[]
  originalPrice: number
  discountPrice?: number
}

export type Product = {
  id: string
  category: string
  subcategory?: string
  name: string
  description: string
  images: string[]
  stock: number
  rating: number
  reviews: number
  ratingsReviews: RatingsAndReviews[] | null
  specs?: Variant[] | undefined
  collection: string
  discountPrice?: {
    min: number
    max: number
  }
  originalPrice: {
    min: number
    max: number
  }
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
}

export type ProductFilter = {
  priceRange: number[] | null
  minRating: number | null
  inStockOnly: boolean | null
  searchQuery?: string
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
  id: string
  rating: number
  productId: string
  name: string
  comment: string
  createdAt: string
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
  averageRating?: number
  totalReviews?: number
  reviews?: ProductReviews[]
}
