import { ProductForm } from '@/components/formTypes'

import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { useProductDialog } from '@/hooks/useProductDialog'
import { addProductAction } from '@/utils/action'
import { sizeGuideSuspense } from '@/utils/suspense'
import type { Product } from '@/utils/types'
import type { User } from '@supabase/supabase-js'
import { Plus } from 'lucide-react'
import { lazy } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'sonner'

const SizeGuideModal = lazy(
  () => import('@/components/sizeGuide/SizeGuideModal')
)
function AddProductDialog() {
  const { user }: { user: User } = useSelector((state: any) => state.userState)
  const {
    isAddProductFormOpen,
    isSizeGuideOpen,
    setIsAddProductFormOpen,
    setIsSizeGuideOpen,
    selectedCategory,
    setSelectedCategory,
  } = useProductDialog()

  const { mutate: addProduct, isPending: adding } = addProductAction()
  const handleAddProduct = async (product: Product) => {
    addProduct(
      { product, uid: user?.id },
      {
        onSuccess: () => {
          setIsAddProductFormOpen(false)
          toast.success('Product added successfully!')
        },
        onError: () => {
          toast.error('Error adding product. Try again.')
          return
        },
      }
    )
  }
  return (
    <>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            size="sm"
            variant="outline"
            className="font-medium h-12"
            onClick={() => setIsAddProductFormOpen(true)}
          >
            <Plus className=" h-6 w-6" />
            <span className="hidden sm:inline">Add Product</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent className="sm:sr-only" side="top" sideOffset={-2}>
          Add Product
        </TooltipContent>
      </Tooltip>

      <div
        className={` ${
          isAddProductFormOpen
            ? 'scale-100 opacity-100'
            : 'scale-50 opacity-0 invisible'
        }
      } animation duration-150 inset-0 fixed flex items-center justify-center z-40 bg-background/50`}
      >
        <div className="max-w-[600px] w-[80%] max-h-[80vh] overflow-y-auto space-y-6 bg-background p-6 border rounded-xl relative md:translate-x-[23.5px] ">
          <div className="flex flex-col gap-2 text-center sm:text-left">
            <h1 className="text-lg leading-none font-semibold">
              Add New Product
            </h1>
            <p className="text-muted-foreground text-sm">
              Add a new item to your inventory
            </p>
          </div>
          <ProductForm
            onSubmit={handleAddProduct}
            onCancel={() => setIsAddProductFormOpen(false)}
            onSubmitting={adding}
            onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
            isSizeGuideOpen={isSizeGuideOpen}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
      </div>
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
    </>
  )
}
export default AddProductDialog
