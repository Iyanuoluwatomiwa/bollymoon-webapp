import { categoryToSizeType, productSizesList, sizeGuide } from './data'
import type { ReviewsType } from './types'

export const parseStringToArray = (
  input: string,
  separator: string = ','
): string[] => {
  return input
    .split(separator)
    .map((item) => item.trim())
    .filter((item) => item.length)
}

export const currencyFormatter = (price: number | undefined) => {
  if (price || price == 0) {
    const amount = new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumFractionDigits: 0,
    }).format(price)
    return amount
  }
}

export const padNumber = (n: number | undefined) => {
  if (n) {
    return String(n).padStart(2, '0')
  }
}

export const slugify = (name: string | undefined) => {
  if (!name) {
    return ''
  }
  return name
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
}

export const averageRating = (reviews: ReviewsType[] | undefined) => {
  if (reviews) {
    const ratingsSum = reviews.reduce((acc, current) => acc + current.rating, 0)

    const averageRating = ratingsSum / reviews.length

    return parseInt(averageRating.toFixed(1))
  }
}

export const formatCreatedAt = (timestamp: string | undefined) => {
  if (timestamp) {
    const date = new Date(timestamp)
    const formattedDate = date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
    })

    return formattedDate
  }
}

export const addSpace = (str: string) => {
  const result = str.replace(/([A-Z])/g, ' $1').trim()
  return result
}

export const getStatusColor: Record<string, { text: string; border: string }> =
  {
    pending: {
      text: 'text-muted-foreground',
      border: 'border-muted-foreground',
    },
    processing: { text: 'text-warning', border: 'border-warning' },
    shipped: { text: 'text-primary', border: 'border-primary' },
    delivered: { text: 'text-green-600', border: 'border-green-600' },
  }

export const getUrgencyLevel = (current: number) => {
  if (current == 0)
    return {
      level: 'out of stock',
      className: 'bg-destructive text-white',
      label: 'Out of Stock',
    }
  if (current <= 3)
    return {
      level: 'critical',
      className: 'bg-destructive text-white',
      label: 'Critical',
    }
  if (current <= 10)
    return {
      level: 'low',
      className: 'bg-warning text-white ',
      label: 'Low',
    }
  return {
    level: 'active',
    className: 'bg-success text-white',
    label: 'Active',
  }
}

export const convertShoeSize = (
  size: number,
  from: 'eu' | 'us' | 'uk',
  to: 'eu' | 'us' | 'uk',
  category: 'men' | 'women' | 'children'
) => {
  const sizeData = sizeGuide.shoes[category]
  const found = sizeData.find((item) => item[from] === size)
  return found ? found[to] : null
}

export const getClothingMeasurements = (
  size: string,
  category: 'men' | 'women' | 'unisex'
) => {
  return sizeGuide.clothing[category].find((item) => item.size === size)
}

export const getAvailableSizes = (category: 'men' | 'women' | 'unisex') => {
  return sizeGuide.clothing[category].map((item) => item.size)
}

export const getShoeSizeRange = (category: 'men' | 'women' | 'children') => {
  const sizes = sizeGuide.shoes[category]
  return {
    eu: {
      min: Math.min(...sizes.map((s) => s.eu)),
      max: Math.max(...sizes.map((s) => s.eu)),
    },
    us: {
      min: Math.min(...sizes.map((s) => s.us)),
      max: Math.max(...sizes.map((s) => s.us)),
    },
    uk: {
      min: Math.min(...sizes.map((s) => s.uk)),
      max: Math.max(...sizes.map((s) => s.uk)),
    },
  }
}

export const getSizesForCategory = (
  category: keyof typeof productSizesList
) => {
  return productSizesList[category]
}

export const getSizeGuideType = (
  category: string
): 'clothing' | 'shoes' | 'numeric' | 'accessories' => {
  return (
    categoryToSizeType[category as keyof typeof categoryToSizeType] ||
    'accessories'
  )
}
