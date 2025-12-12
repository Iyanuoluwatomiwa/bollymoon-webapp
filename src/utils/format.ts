import { categoryToSizeType, productSizesList, sizeGuide } from '@/assets/data'

export const discount = (originalPrice: number, discountedPrice: number) => {
  return Math.round(((originalPrice - discountedPrice) / originalPrice) * 100)
}

export const currencyFormatter = (price: number | undefined) => {
  if (price || price == 0) {
    const amount = new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      maximumFractionDigits: 2,
    }).format(price)
    return amount
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

export const formatCreatedAt = (timestamp: string | number | undefined) => {
  if (timestamp) {
    const date = new Date(timestamp)
    const formattedDate = date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    })

    return formattedDate
  }
}

export const getStatusColor: Record<string, { bg: string; border: string }> = {
  pending: {
    bg: 'bg-yellow-600',
    border: 'border-yellow-600',
  },
  delivered: { bg: 'bg-green-600', border: 'border-green-600' },
  canceled: { bg: 'bg-red-600', border: 'border-red-600' },
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
