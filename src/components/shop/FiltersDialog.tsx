import { Button } from '../ui/button'
import { SlidersHorizontal } from 'lucide-react'
import Filters from './Filters'
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
  setFilters: (priceRange: number[] | null, inStockOnly: boolean | null) => void
  maxPrice: number
  disabled: boolean
}

export default function FiltersDialog({
  setFilters,
  maxPrice,
  disabled,
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
          setIsOpen={setIsOpen}
          disabled={disabled}
        />
      </DialogContent>
    </Dialog>
  )
}
