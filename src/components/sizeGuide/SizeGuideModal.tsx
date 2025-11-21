import { getSizeGuideType, getSizesForCategory } from '@/utils/format'
import { Ruler, XIcon } from 'lucide-react'
import CategorySpecificSizes from './CategorySpecificSizes'
import { Button } from '../ui/button'
import { lazy } from 'react'
import { Separator } from '../ui/separator'
import type { productSizesList } from '@/utils/data'

interface SizeGuideModalProp {
  onClose: () => void
  isSizeGuideOpen: boolean
  productCategory: keyof typeof productSizesList | null | undefined
}

const ClothingTable = lazy(() => import('@/components/sizeGuide/ClothingTable'))
const ShoesTable = lazy(() => import('@/components/sizeGuide/ShoesTable'))
const Numeric = lazy(() => import('@/components/sizeGuide/Numeric'))
const Accessories = lazy(() => import('@/components/sizeGuide/Accessories'))

function SizeGuideModal({
  onClose,
  isSizeGuideOpen,
  productCategory,
}: SizeGuideModalProp) {
  const categoryTitle =
    productCategory &&
    productCategory?.charAt(0).toUpperCase() +
      productCategory?.slice(1).replace('-', ' ')
  const sizes = productCategory && getSizesForCategory(productCategory)
  const sizeGuideType = productCategory ? getSizeGuideType(productCategory) : ''
  const sizeGuideComponents: Record<string, React.ComponentType> = {
    clothing: ClothingTable,
    shoes: ShoesTable,
    numeric: Numeric,
    accessories: Accessories,
  }
  const SizeGuideTable = sizeGuideComponents[sizeGuideType]

  return (
    <div
      className={` ${
        isSizeGuideOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
      } animation duration-150 inset-0 fixed flex items-center justify-center z-[100] bg-background/50`}
    >
      <div className="max-w-[700px] w-[90%] max-h-[85vh] overflow-y-auto bg-background p-6 border rounded-xl relative">
        <div className="flex items-center text-lg font-semibold gap-2 mb-4">
          <Ruler className="h-5 w-5" />
          Size Guide - {categoryTitle}
        </div>
        <div className="space-y-6">
          <CategorySpecificSizes sizes={sizes} categoryTitle={categoryTitle} />
          <Separator />
          <div className="text-center">
            <SizeGuideTable />
          </div>

          <div className="flex justify-end">
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
        <button
          type="button"
          className="text-muted-foreground absolute top-2 right-2 w-max hover:text-foreground p-1 cursor-pointer rounded-md"
          onClick={onClose}
        >
          <XIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
export default SizeGuideModal
