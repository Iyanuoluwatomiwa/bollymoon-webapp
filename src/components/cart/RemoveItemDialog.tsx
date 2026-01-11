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
import { Heart, Loader2, Trash, X } from 'lucide-react'
import { useSelector } from 'react-redux'
import {
  useAddToWishlist,
  useSingleProduct,
  useWishlists,
} from '@/hooks/useQueries'
import type { ProductFetch } from '@/types/product.types'
import { useDispatch } from 'react-redux'
import { toggleWishlistItem } from '@/features/wishlist/wishlistSlice'

function RemoveItemDialog({
  removeFromCart,
  isRemoving,
  productId,
}: {
  removeFromCart: () => void
  isRemoving: boolean
  productId: string | undefined
}) {
  const [open, isOpen] = useState(false)
  const { token }: { token: string | null } = useSelector(
    (state: any) => state.userState
  )
  const dispatch = useDispatch()
  const { data, isLoading, isError } = useWishlists()
  const fetchedWishlists: ProductFetch[] = data?.data?.map(
    ({ product }: { product: ProductFetch }) => product
  )
  const {
    data: singleProduct,
    isLoading: productLoading,
    isError: productError,
  } = useSingleProduct(productId)
  const product = singleProduct?.data
  //for unauth users
  const { wishlistItems }: { wishlistItems: ProductFetch[] } = useSelector(
    (state: any) => state.wishlistState
  )
  const inWishlistAuth = fetchedWishlists?.some((item) => item.id === productId)
  const inWishlistUnAuth = wishlistItems.some((item) => item.id === productId)
  const inWishlist = token ? inWishlistAuth : inWishlistUnAuth
  const { mutate: addItem, isPending } = useAddToWishlist()
  const handleAddItem = async () => {
    addItem({ id: productId, name: product?.name })
  }
  const handleWishlistToggle = () => {
    if (token) {
      handleAddItem
    } else {
      dispatch(toggleWishlistItem({ product }))
      isOpen(false)
    }
  }
  const handleRemoveItem = () => {
    removeFromCart()
    isOpen(false)
  }
  const wishlistToggle = () => {
    handleWishlistToggle()
  }
  return (
    <AlertDialog open={open} onOpenChange={isOpen}>
      <AlertDialogTrigger asChild>
        <button className="text-primary font-medium text-sm cursor-pointer h-8 w-16 flex items-center justif-center">
          {isRemoving ? <Loader2 className="w-4 h-4" /> : 'Remove'}
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
        <>
          {isLoading || productLoading ? (
            <div className="w-full h-full min-h-[25vh] flex items-center justify-center ">
              <Loader2 className="w-5 h-5 animate-spin" />
            </div>
          ) : (
            <>
              Do you really want to remove this item from cart?
              <AlertDialogFooter className="flex flex-col gap-2 md:mt-2">
                {!inWishlist && (
                  <button
                    className="flex items-center gap-4 border border-primary text-primary rounded-sm px-3 py-2 text-sm font-medium cursor-pointer group"
                    onClick={wishlistToggle}
                    disabled={isPending}
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
              {(isError || productError) && (
                <p className="w-full h-full min-h-[25vh] flex items-center justify-center text-xs sm:text-sm font-medium px-4 text-center">
                  An error occured.
                </p>
              )}
            </>
          )}
        </>
      </AlertDialogContent>
    </AlertDialog>
  )
}
export default RemoveItemDialog
