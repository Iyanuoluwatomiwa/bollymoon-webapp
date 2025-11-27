import { useSelector } from 'react-redux'
import WishlistItemCard from './WishlistItemCard'
import type { Product } from '@/types/product.types'

function WishlistItems() {
  const {
    numItemsInWishlist,
    wishlistItems,
  }: { numItemsInWishlist: number; wishlistItems: Product[] } = useSelector(
    (state: any) => state.wishlistState
  )

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-lg md:text-xl font-semibold text-foreground">
          Wishlist ({numItemsInWishlist})
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {wishlistItems.map((wishlistItem) => {
          return (
            <WishlistItemCard
              key={wishlistItem.id}
              wishlistItem={wishlistItem}
            />
          )
        })}
      </div>
    </>
  )
}
export default WishlistItems
