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
  image: string
  name: string
  price: number
  color: string
  size?: string
  length?: string
  quantity: number
  id: string
  category: string
  discountPrice?: number
  originalPrice: number
  stock: number
}
