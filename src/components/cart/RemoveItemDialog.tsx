import { useState } from 'react'
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../ui/alert-dialog'
import { Heart, Trash, X } from 'lucide-react'

function RemoveItemDialog({
  removeFromCart,
  inWishlist,
  handleWishlistToggle,
}: {
  removeFromCart: () => void
  inWishlist: boolean
  handleWishlistToggle: () => void
}) {
  const [open, isOpen] = useState(false)
  const handleRemoveItem = () => {
    removeFromCart()
    isOpen(false)
  }
  const wishlistToggle = () => {
    handleWishlistToggle()
    isOpen(false)
  }
  return (
    <AlertDialog open={open} onOpenChange={isOpen}>
      <AlertDialogTrigger asChild>
        <button className="text-primary font-medium text-sm cursor-pointer h-8 px-2">
          Remove
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent className="py-2 px-4">
        <AlertDialogHeader className="flex flex-row items-center justify-between gap-2">
          <AlertDialogTitle>Remove from cart</AlertDialogTitle>
          <AlertDialogCancel className="border-0 shadow-none w-max h-4 w-3 ">
            <X />
          </AlertDialogCancel>
          <AlertDialogDescription className="sr-only">
            Remove item from cart
          </AlertDialogDescription>
        </AlertDialogHeader>
        Do you really want to remove this item from cart?
        <AlertDialogFooter className="flex flex-col gap-2 md:mt-2">
          {!inWishlist && (
            <button
              className="flex items-center gap-4 border border-primary text-primary rounded-sm px-3 py-2 text-sm font-medium cursor-pointer group"
              onClick={wishlistToggle}
            >
              <Heart className="w-5 h-5 group-hover:fill-primary" />{' '}
              <span className="flex-1 text-center">Save for later</span>
            </button>
          )}
          <button
            className="flex items-center gap-4 border border-primary text-white rounded-sm px-3 py-2 text-sm font-medium bg-primary cursor-pointer group"
            onClick={handleRemoveItem}
          >
            <Trash className="w-5 h-5 group-hover:fill-white" />{' '}
            <span className="flex-1 text-center">Remove Item</span>
          </button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
export default RemoveItemDialog
