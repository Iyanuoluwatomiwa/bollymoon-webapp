import type { ProductFilter } from '@/types/product.types'
import { currencyFormatter } from '@/utils/format'
import { Minus, X } from 'lucide-react'

export default function FiltersDisplay({
  filters,
  setFilters,
}: {
  filters: ProductFilter
  setFilters: ({ priceRange, inStockOnly }: ProductFilter) => void
}) {
  const cancelFilter = (field: string) => {
    setFilters({ ...filters, [field]: null })
  }
  return (
    <>
      {' '}
      {(filters.priceRange || filters.inStockOnly) && (
        <div className="flex items-start gap-2 font-medium text-sm sm:text-base sm:items-center">
          <span className="py-1">Filters:</span>

          <div className="flex items-center gap-2 flex-wrap">
            {filters.priceRange && (
              <div className="flex items-center gap-2 bg-primary/20  px-2 md:pl-4 md:pr-2 py-2 rounded-full w-max text-primary font-medium">
                <span className="text-xs flex items-center gap-1">
                  {currencyFormatter(filters.priceRange[0])}{' '}
                  <Minus className="w-4 h-4" />{' '}
                  {currencyFormatter(filters.priceRange[1])}
                </span>
                <button onClick={() => cancelFilter('priceRange')}>
                  <X className="w-4 h-4 text-secondary hover:cursor-pointer " />
                </button>
              </div>
            )}
            {filters.inStockOnly && (
              <div className="flex items-center gap-2 bg-primary/20 px-2 md:pl-4 md:pr-2 py-2 rounded-full w-max text-primary font-medium">
                <span className="text-xs flex items-center gap-1">
                  In stock
                </span>
                <button onClick={() => cancelFilter('inStockOnly')}>
                  <X className="w-4 h-4 text-secondary hover:cursor-pointer" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
