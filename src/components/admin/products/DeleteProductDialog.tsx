import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { useDeleteProduct } from '@/hooks/useQueries'
import type { Product } from '@/types/product.types'
import { Trash2 } from 'lucide-react'
import { useState } from 'react'

interface DeleteProductProp {
  product: Product
}

function DeleteProductDialog({ product }: DeleteProductProp) {
  const [isDeleteProductDialogOpen, setIsDeleteProductDialogOpen] =
    useState(false)
  const { mutate: deleteProduct, isPending: deleting } = useDeleteProduct()
  const handleDeleteProduct = (productId: string) => {
    deleteProduct(productId, {
      onSuccess: () => {
        setIsDeleteProductDialogOpen(false)
      },
    })
  }
  return (
    <AlertDialog
      open={isDeleteProductDialogOpen}
      onOpenChange={setIsDeleteProductDialogOpen}
    >
      <Tooltip>
        <TooltipTrigger asChild>
          <AlertDialogTrigger asChild>
            <Trash2 className="h-4 w-4 cursor-pointer" />
          </AlertDialogTrigger>
        </TooltipTrigger>
        <TooltipContent side="top" sideOffset={-4}>
          Delete
        </TooltipContent>
      </Tooltip>
      <AlertDialogContent className="rounded-sm">
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Product</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete "{product.name}
            "? This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="h-9 border-0 shadow-xs hover:shadow-sm text-foreground hover:text-foreground">
            Cancel
          </AlertDialogCancel>
          <Button
            className="h-9"
            onClick={() => handleDeleteProduct(product.id)}
          >
            {deleting ? 'Deleting...' : 'Delete'}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
export default DeleteProductDialog
