import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Slider } from '@/components/ui/slider'
import { currencyFormatter } from '@/utils/format'
import { useState } from 'react'

interface FiltersProps {
  searchQuery?: string
  setFilters: (priceRange: number[] | null, inStockOnly: boolean | null) => void
  maxPrice: number
  setIsOpen?: (value: boolean) => void
  disabled?: boolean
  subcategory: string
  subcategories: { label: string; value: string }[]
  setSubcategory: (value: string) => void
}
const Filters = ({
  setFilters,
  maxPrice,
  setIsOpen,
  disabled,
  subcategories,
  setSubcategory,
  subcategory,
}: FiltersProps) => {
  const [priceRange, setPriceRange] = useState([0, maxPrice])
  const [inStockOnly, setInStockOnly] = useState(false)
  const priceRangeChange = (value: number[]) => {
    setPriceRange(value)
  }
  const inStockChange = (value: boolean) => {
    setInStockOnly(value)
  }

  const clearFilters = () => {
    setPriceRange([0, maxPrice])
    setInStockOnly(false)
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
              setFilters(priceRange, inStockOnly)
              clearFilters()
              setIsOpen && setIsOpen(false)
            }}
            className="h-9 block w-full"
            disabled={disabled}
          >
            Apply
          </Button>
        </div>
      </div>
      <div className="mt-6 space-y-4">
        <>
          {subcategories?.map(({ label, value }) => {
            return (
              <div key={label} className="space-y-2">
                <h2 className="text-lg font-medium">Tags</h2>
                <ul>
                  <li
                    className={`px-4 py-2 ${
                      subcategory == value
                        ? 'bg-primary text-white'
                        : 'bg-muted'
                    } rounded-sm`}
                    onClick={() =>
                      value == subcategory
                        ? setSubcategory('')
                        : setSubcategory(value)
                    }
                  >
                    {label}
                  </li>
                </ul>
              </div>
            )
          })}
        </>
      </div>
    </div>
  )
}

export default Filters
