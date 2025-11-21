import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { colorsList, productSizesList } from '@/utils/data'
import type { ColorQuantity, Variant } from '@/utils/types'
import { useState } from 'react'
import VariantsAdded from './VariantsAdded'
import { Ruler } from 'lucide-react'

interface ProductVariantsProp {
  category: keyof typeof productSizesList
  variants: Variant[]
  setVariants: (value: Variant[]) => void
  onOpenSizeGuide: () => void
}

function ProductVariants({
  category,
  variants,
  setVariants,
  onOpenSizeGuide,
}: ProductVariantsProp) {
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [colorQuantities, setColorQuantities] = useState<
    Record<string, number>
  >({})

  const handleAddVariant = () => {
    const newColors: ColorQuantity[] = selectedColors.map((color) => ({
      color,
      quantity: colorQuantities[color] || 1,
    }))

    const updatedVariants = [...variants]
    const existingVariantIndex = updatedVariants.findIndex(
      (v) => v.size === selectedSize
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
        size: selectedSize,
        colors: Object.entries(colorMap).map(([color, quantity]) => ({
          color,
          quantity,
        })),
      }
    } else {
      updatedVariants.push({ size: selectedSize, colors: newColors })
    }

    setVariants(updatedVariants)
    setSelectedSize('')
    setSelectedColors([])
    setColorQuantities({})
  }

  const sizes = productSizesList[category]
  return (
    <>
      <div className=" grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-x-4 justify-between">
            <Label className="py-1">Size</Label>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="h-6 px-2 text-xs"
              disabled={!category}
              onClick={() => {
                onOpenSizeGuide()
              }}
            >
              <Ruler className="h-3 w-3 mr-1" />
              Size Guide
            </Button>
          </div>

          <Select
            value={selectedSize}
            disabled={!category}
            onValueChange={(value) => setSelectedSize(value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue
                placeholder={`${
                  category ? 'Select Size' : 'Select a category first'
                }`}
              />
            </SelectTrigger>
            <SelectContent>
              {sizes?.map(({ value, label }, index) => {
                return (
                  <SelectItem key={index} value={value}>
                    {label}
                  </SelectItem>
                )
              })}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label className="py-1">Color</Label>
          <Select
            value={selectedColors[0] || ''}
            onValueChange={(value) => setSelectedColors(Array.of(value))}
            disabled={!selectedSize}
          >
            <SelectTrigger className="w-full">
              <SelectValue
                placeholder={`${
                  selectedSize ? 'Select Color' : 'Select a size first'
                }`}
              />
            </SelectTrigger>
            <SelectContent>
              {colorsList.map(({ value, label }, index) => {
                return (
                  <SelectItem key={index} value={value}>
                    {label}
                  </SelectItem>
                )
              })}
            </SelectContent>
          </Select>
        </div>
      </div>
      {selectedColors.length !== 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {selectedColors.map((color) => (
            <div key={color} className="space-y-2">
              <Label>
                Quantity for <span className="capitalize">{color}</span>
              </Label>
              <Input
                id="color"
                type="number"
                min="1"
                value={colorQuantities[color] || ''}
                onChange={(e) =>
                  setColorQuantities({
                    ...colorQuantities,
                    [color]: Number(e.target.value),
                  })
                }
                className="px-4"
              />
            </div>
          ))}
        </div>
      )}
      <Button
        type="button"
        onClick={handleAddVariant}
        className="bg-green-500 hover:bg-green-600 text-white"
        disabled={!selectedSize || selectedColors.length === 0}
      >
        Add Size & Color
      </Button>
      <VariantsAdded variants={variants} setVariants={setVariants} />
    </>
  )
}
export default ProductVariants
