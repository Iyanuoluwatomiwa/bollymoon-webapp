import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Slider } from '@/components/ui/slider'
import { currencyFormatter } from '@/utils/format'
import { useState } from 'react'
import type { ProductFilter } from '@/types/product.types'

interface AdvancedFiltersProps {
  onClose?: () => void
  searchQuery?: string
  setFilters: ({
    priceRange,
    inStockOnly,
    minRating,
    searchQuery,
  }: ProductFilter) => void
  filters: ProductFilter
  isLoading?: boolean
  maxPrice: number | undefined
  setCurrentPage: (value: number) => void
  setIsOpen?: (value: boolean) => void
}
const AdvancedFilters = ({
  setFilters,
  maxPrice,
  setCurrentPage,
  setIsOpen,
  filters,
}: AdvancedFiltersProps) => {
  const [priceRange, setPriceRange] = useState([0, maxPrice ?? 1000])
  const [inStockOnly, setInStockOnly] = useState(false)
  const [minRating, setMinRating] = useState(1)

  const priceRangeChange = (value: number[]) => {
    setPriceRange(value)
  }
  const inStockChange = (value: boolean) => {
    setInStockOnly(value)
  }
  const minRatingChange = (value: number) => {
    setMinRating(value)
  }

  const clearFilters = () => {
    setPriceRange([0, maxPrice ?? 1000])
    setInStockOnly(false)
    setMinRating(0)
    setCurrentPage(1)
  }

  const applyFilter = () => {
    setFilters({
      priceRange,
      inStockOnly,
      minRating,
    })
    setCurrentPage(1)
  }

  return (
    <div className="px-3 py-4 space-y-4">
      <div className="flex flex-row items-center justify-between border-b border-muted-foreground pb-2">
        <h2 className="text-lg font-medium">Filters</h2>
      </div>
      <div className="space-y-6">
        <div className="flex flex-col gap-6 max-w-xs">
          {/* Price Range */}
          <div className="space-y-3 ">
            <Label className="text-sm font-medium">Price Range</Label>
            <Slider
              value={priceRange}
              onValueChange={(value) => priceRangeChange(value)}
              max={maxPrice}
              step={5}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>{currencyFormatter(priceRange[0])}</span>
              <span>{currencyFormatter(priceRange[1])}</span>
            </div>
          </div>
          {/* Rating */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">Minimum Rating</Label>
            <Slider
              value={[minRating]}
              onValueChange={(value) => minRatingChange(value[0])}
              max={5}
              min={1}
              step={0.5}
              className="w-full"
            />
            <div className="text-sm text-gray-600">
              {minRating} star{minRating > 1 && 's'} {minRating < 5 && '& up'}{' '}
            </div>
          </div>
          {/* stock status */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="inStock"
              checked={inStockOnly}
              onCheckedChange={(checked) => inStockChange(checked as boolean)}
              className="border  border-primary"
            />
            <Label htmlFor="inStock" className="text-sm">
              In stock only
            </Label>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 space-x-3 pt-4 border-t border-muted-foreground">
          <Button
            /* disabled={isLoading} */ variant="outline"
            onClick={clearFilters}
            className="h-9 w-full "
          >
            Clear
          </Button>

          <Button
            /* disabled={isLoading} */
            onClick={() => {
              applyFilter()
              setIsOpen && setIsOpen(false)
            }}
            className="h-9 block w-full"
          >
            Apply
          </Button>
        </div>
      </div>
    </div>
  )
}

export default AdvancedFilters
