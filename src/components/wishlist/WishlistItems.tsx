import WishlistItemCard from './WishlistItemCard'
import type { ProductFetch } from '@/types/product.types'

function WishlistItems({
  wishlistItems,
}: {
  wishlistItems: ProductFetch[] | undefined
}) {
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        {wishlistItems?.length == 0 || (
          <h1 className="text-lg md:text-xl font-semibold text-foreground">
            Wishlist ({wishlistItems?.length})
          </h1>
        )}
      </div>
      <div className="grid grid-cols-1 gap-4 max-w-2xl mx-auto w-full">
        {wishlistItems?.map((wishlistItem) => {
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
