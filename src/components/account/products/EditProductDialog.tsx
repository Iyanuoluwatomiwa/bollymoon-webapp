import { ProductForm } from '@/components/formTypes'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { useProductDialog } from '@/hooks/useProductDialog'
import { updateProductAction } from '@/utils/action'
import { sizeGuideSuspense } from '@/utils/suspense'
import type { Product } from '@/utils/types'
import { Edit } from 'lucide-react'
import { lazy } from 'react'
import { toast } from 'sonner'

interface EditProductDialogProp {
  setSelectedProduct: (value: Product | null) => void
  product: Product
  selectedProduct: Product | null
}
const SizeGuideModal = lazy(
  () => import('@/components/sizeGuide/SizeGuideModal')
)
function EditProductDialog({
  setSelectedProduct,
  product,
  selectedProduct,
}: EditProductDialogProp) {
  const {
    isEditProductFormOpen,
    isSizeGuideOpen,
    setIsEditProductFormOpen,
    setIsSizeGuideOpen,
    selectedCategory,
    setSelectedCategory,
  } = useProductDialog()
  const { mutate: updateProduct, isPending: updating } = updateProductAction()

  const handleEditProduct = (product: Product) => {
    updateProduct(
      {
        id: selectedProduct?.id,
        payload: product,
      },
      {
        onSuccess: () => {
          setIsEditProductFormOpen(false)
          setSelectedProduct(null)
          toast.success('Product updated successfully!')
        },
        onError: () => {
          toast.error('Error updating product. Try again.')
          return
        },
      }
    )
  }
  const handleEditClick = (product: Product) => {
    setSelectedProduct(product)
    setIsEditProductFormOpen(true)
  }
  return (
    <>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className=" w-6 h-6"
            onClick={() => handleEditClick(product)}
          >
            <Edit className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="top" sideOffset={-4}>
          Edit
        </TooltipContent>
      </Tooltip>
      <div
        className={`${
          isEditProductFormOpen
            ? 'scale-100 opacity-100'
            : 'scale-50 opacity-0 invisible'
        }
      } animation duration-150 inset-0 fixed flex items-center justify-center z-40 bg-background/50`}
      >
        <div className="max-w-[600px] w-[80%] max-h-[80vh] overflow-y-auto space-y-6 bg-background p-6 border rounded-xl relative md:translate-x-[23.5px] ">
          <div className="flex flex-col gap-2 text-center sm:text-left">
            <h1 className="text-lg leading-none font-semibold">Edit Product</h1>
            <p className="text-muted-foreground text-sm">
              Update the product information.
            </p>
          </div>
          {selectedProduct && (
            <ProductForm
              product={selectedProduct}
              onSubmit={handleEditProduct}
              onCancel={() => {
                setIsEditProductFormOpen(false)
                setSelectedProduct(null)
              }}
              onSubmitting={updating}
              onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
              isSizeGuideOpen={isSizeGuideOpen}
              setSelectedCategory={setSelectedCategory}
            />
          )}
        </div>
      </div>
      <div className="items-start">
        {sizeGuideSuspense(
          <>
            {isSizeGuideOpen && (
              <SizeGuideModal
                onClose={() => setIsSizeGuideOpen(false)}
                isSizeGuideOpen={isSizeGuideOpen}
                productCategory={selectedCategory}
              />
            )}
          </>
        )}
      </div>
    </>
  )
}
export default EditProductDialog
