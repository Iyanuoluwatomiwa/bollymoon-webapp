import { Button } from '@/components/ui/button'
import { useState } from 'react'
import FormInput from '@/components/form-fields/FormInput'
import type { ColorQuantity, Variant } from '@/types/product.types'
import VariantsAdded from './VariantsAdded'

interface ProductVariantsProp {
  variants: Variant[]
  setVariants: (value: Variant[]) => void
}

function ProductVariants({ variants, setVariants }: ProductVariantsProp) {
  const [size, setSize] = useState('')
  const [price, setPrice] = useState('')
  const [discountPrice, setDiscountPrice] = useState('')
  const [colors, setColors] = useState<string[]>([''])
  const [colorQuantities, setColorQuantities] = useState<
    Record<string, number>
  >({})
  const [showVariantForm, setShowVariantForm] = useState(false)

  const handleAddVariant = () => {
    const newColors: ColorQuantity[] = colors.map((color) => ({
      color,
      quantity: colorQuantities[color] || 1,
    }))

    const updatedVariants = [...variants]
    const existingVariantIndex = updatedVariants.findIndex(
      (v) => v.size === size
    )

    if (existingVariantIndex !== -1) {
      const existingVariant = updatedVariants[existingVariantIndex]
      const colorMap: Record<string, number> = {}
      existingVariant.colors.forEach(({ color, quantity }) => {
        colorMap[color] = quantity
      })

      newColors.forEach(({ color, quantity }) => {
        if (colorMap[color]) {
          colorMap[color] += quantity
        } else {
          colorMap[color] = quantity
        }
      })

      updatedVariants[existingVariantIndex] = {
        size: size,
        originalPrice: Number(price),
        discountPrice: Number(discountPrice),
        colors: Object.entries(colorMap).map(([color, quantity]) => ({
          color,
          quantity,
        })),
      }
    } else {
      updatedVariants.push({
        size: size,
        originalPrice: Number(price),
        discountPrice: Number(discountPrice),
        colors: newColors,
      })
    }

    setVariants(updatedVariants)
    setSize('')
    setPrice('')
    setDiscountPrice('')
    setColors([''])
    setColorQuantities({})
    setShowVariantForm(false)
  }
  const handleInputChange = (type: string, value: string) => {
    if (type == 'size') {
      setSize(value)
    }
    if (type == 'price') {
      const newValue = value.replace(/[^0-9]/g, '')
      setPrice(newValue)
    }
    if (type == 'discountPrice') {
      const newValue = value.replace(/[^0-9]/g, '')
      setDiscountPrice(newValue)
    }
    if (type == 'color') {
      setColors(Array.of(value))
    }
    if (type == 'colorQuantity') {
      setColorQuantities({
        ...colorQuantities,
        [colors[0]]: Number(value),
      })
    }
  }
  return (
    <div className="space-y-1 md:space-y-2">
      <span className="font-medium text-xs md:text-sm block">
        Product Variants
      </span>
      <div className="border space-y-2 md:space-y-4 rounded-sm p-4 text-xs md:text-sm">
        {variants.length === 0 ? (
          <p className="text-center">No product variant added yet.</p>
        ) : (
          <VariantsAdded variants={variants} setVariants={setVariants} />
        )}
        {!showVariantForm && (
          <div className="mx-auto w-max">
            <button
              onClick={() => setShowVariantForm(true)}
              className="bg-secondary hover:bg-secondary/90 text-white h-9 px-4 text-xs md:text-sm rounded-sm font-medium cursor-pointer"
            >
              Enter new variant
            </button>
          </div>
        )}
      </div>

      {showVariantForm && (
        <div className="border p-2 md:p-4 rounded-sm space-y-2.5 space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-2 sm:gap-x-4 gap-y-2">
            <div className="col-span-2 sm:col-span-1">
              <FormInput
                name="size"
                label="Size"
                labelSize="text-muted-foreground"
                value={size}
                handleInputChange={handleInputChange}
                type="text"
                placeholder="Enter 'N/A', if size is not applicable"
              />
            </div>

            <FormInput
              name="price"
              label="Price"
              labelSize="text-muted-foreground"
              value={price}
              handleInputChange={handleInputChange}
              type="text"
              placeholder="00"
            />
            <FormInput
              name="discountPrice"
              label="Discount price"
              labelSize="text-muted-foreground"
              value={discountPrice}
              handleInputChange={handleInputChange}
              type="text"
              placeholder="00"
            />
          </div>
          <div className="grid grid-cols-2 gap-x-2 sm:gap-x-4">
            <FormInput
              name="color"
              label="Color"
              labelSize="text-muted-foreground"
              value={colors[0] || ''}
              handleInputChange={handleInputChange}
              type="text"
              placeholder="No color? Enter 'N/A'"
            />
            <div className="">
              {colors.map((color) => (
                <div key={color} className="space-y-2">
                  <FormInput
                    name="colorQuantity"
                    label="Quantity"
                    labelSize="text-muted-foreground"
                    value={colorQuantities[color] || 1}
                    handleInputChange={handleInputChange}
                    type="number"
                    min="1"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-end gap-2 md:gap-4 mt-4">
            <Button
              type="button"
              size="lg"
              onClick={() => setShowVariantForm(false)}
              className="bg-transparent text-foreground hover:bg-transparent hover:shadow-sm h-9"
            >
              Cancel
            </Button>
            <Button
              type="button"
              size="lg"
              onClick={handleAddVariant}
              className="bg-secondary hover:bg-secondary/90 text-white h-9 px-10"
              disabled={!size.trim() || !colors[0].trim() || !price}
            >
              Add
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
export default ProductVariants
