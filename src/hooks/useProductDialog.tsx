import type { productSizesList } from '@/assets/data'
import { useState } from 'react'

export const useProductDialog = () => {
  const [isAddProductFormOpen, setIsAddProductFormOpen] = useState(false)
  const [isEditProductFormOpen, setIsEditProductFormOpen] = useState(false)
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<
    keyof typeof productSizesList | null
  >(null)
  const [isAddToCartOpen, setIsAddToCartOpen] = useState(false)
  const [isVariantSelectionOpen, setIsVariantSelectionOpen] = useState(false)

  return {
    isAddProductFormOpen,
    isSizeGuideOpen,
    setIsAddProductFormOpen,
    setIsSizeGuideOpen,
    selectedCategory,
    setSelectedCategory,
    isEditProductFormOpen,
    setIsEditProductFormOpen,
    isAddToCartOpen,
    setIsAddToCartOpen,
    isVariantSelectionOpen,
    setIsVariantSelectionOpen,
  }
}
