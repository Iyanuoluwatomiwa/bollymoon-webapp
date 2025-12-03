import type { RatingsAndReviews } from './ratings_reviews.types'

type Specs = {
  size: string
  colors: { color: string; quantity: number }[]
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
  specs?: Specs[] | undefined
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
