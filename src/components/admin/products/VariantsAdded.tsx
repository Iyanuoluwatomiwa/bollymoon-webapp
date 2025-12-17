import { Button } from '@/components/ui/button'
import type { Variant } from '@/types/product.types'
import { currencyFormatter } from '@/utils/format'
import { Minus, Plus, Trash2 } from 'lucide-react'

interface VariantAddedProp {
  variants: Variant[]
  setVariants: (value: Variant[]) => void
}

function VariantsAdded({ variants, setVariants }: VariantAddedProp) {
  const handleDeleteVariant = (size: string, color: string) => {
    const updated = variants
      .map((variant) => {
        if (variant.size !== size) return variant
        return {
          ...variant,
          colors: variant.colors.filter((c) => c.color !== color),
        }
      })
      .filter((variant) => variant.colors.length > 0)
    setVariants(updated)
  }
  const handleEditVariant = (size: string, color: string, quantity: number) => {
    const updated = variants.map((variant) => {
      if (variant.size == size) {
        return {
          ...variant,
          colors: variant.colors.map((c) =>
            c.color === color ? { ...c, quantity } : c
          ),
        }
      }
      return variant
    })
    setVariants(updated)
  }

  return (
    <div>
      <ul className="flex flex-col gap-4">
        {variants.map(({ size, colors, originalPrice, discountPrice }) => {
          return colors.map(({ color, quantity }) => {
            return (
              <li
                key={color}
                className="grid grid-cols-2 gap-4 place-items-start border-b last:border-b-0 pb-4 "
              >
                <div>
                  <h3 className="capitalize text-base/5">
                    {size.toLowerCase() !== 'n/a' && size}
                  </h3>
                  <span className={` relative capitalize text-sm font-medium`}>
                    {color.toLowerCase() !== 'n/a' && color}
                  </span>
                  <div className="flex items-center flex-wrap gap-x-2 ">
                    <span className="text-xs sm:text-[14px] font-semibold text-foreground">
                      {discountPrice !== originalPrice
                        ? currencyFormatter(discountPrice)
                        : currencyFormatter(originalPrice)}
                    </span>
                    {discountPrice !== originalPrice && (
                      <span className="text-[10px] sm:text-[12px] text-muted-foreground line-through font-medium italic">
                        {currencyFormatter(originalPrice)}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-between gap-4 w-full">
                  <div className="flex items-center w-max">
                    <Button
                      variant="ghost"
                      type="button"
                      size="sm"
                      onClick={() => {
                        handleEditVariant(size, color, quantity - 1)
                      }}
                      disabled={quantity == 1}
                      className="h-8 w-8 p-0 rounded-sm rounded-r-none cursor-pointer disabled:bg-gray-500 bg-primary hover:bg-primary/80 hover:text-white text-white"
                    >
                      <span className="sr-only">decrease quantity by 1</span>
                      <Minus className="w-3 h-3" />
                    </Button>
                    <div className="h-8 w-16 flex items-center justify-center border-x text-sm font-medium">
                      {quantity}
                    </div>
                    <Button
                      variant="default"
                      size="sm"
                      type="button"
                      onClick={() => {
                        handleEditVariant(size, color, quantity + 1)
                      }}
                      className="h-8 w-8 p-0 rounded-sm rounded-l-none cursor-pointer disabled:bg-muted-foreground bg-primary text-white"
                    >
                      <Plus className="w-3 h-3" />
                      <span className="sr-only">increase quantity by 1</span>
                    </Button>
                  </div>
                  <Button
                    variant="default"
                    size="sm"
                    type="button"
                    onClick={() => {
                      handleDeleteVariant(size, color)
                    }}
                    className="h-8 w-8 p-0 rounded-sm cursor-pointer bg-destructive hover:bg-destructive/80 text-white"
                  >
                    <Trash2 className="w-3 h-3" />
                    <span className="sr-only">delete variant</span>
                  </Button>
                </div>
              </li>
            )
          })
        })}
      </ul>
    </div>
  )
}
export default VariantsAdded
