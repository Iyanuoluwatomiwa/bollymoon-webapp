import { Button } from '../ui/button'
import { SlidersHorizontal } from 'lucide-react'
import Filters from './Filters'
import type { ProductFilter } from '@/types/product.types'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'
import { useState } from 'react'

interface FiltersDialogProps {
  setFilters: ({
    priceRange,
    inStockOnly,
    minRating,
    searchQuery,
  }: ProductFilter) => void
  maxPrice: number
  setCurrentPage: (value: number) => void
}

export default function FiltersDialog({
  setFilters,
  maxPrice,
  setCurrentPage,
}: FiltersDialogProps) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="lg:w-auto lg:hidden rounded-full h-10"
        >
          <SlidersHorizontal className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white">
        <DialogHeader className="sr-only">
          <DialogTitle>dilters</DialogTitle>
          <DialogDescription>product filtering</DialogDescription>
        </DialogHeader>

        <Filters
          setFilters={setFilters}
          maxPrice={maxPrice}
          setCurrentPage={setCurrentPage}
          setIsOpen={setIsOpen}
        />
      </DialogContent>
    </Dialog>
  )
}
