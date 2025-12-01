import { useState } from 'react'

export const useProductDialog = () => {
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false)
  const [isAddToCartOpen, setIsAddToCartOpen] = useState(false)

  return {
    isSizeGuideOpen,
    setIsSizeGuideOpen,
    isAddToCartOpen,
    setIsAddToCartOpen,
  }
}
