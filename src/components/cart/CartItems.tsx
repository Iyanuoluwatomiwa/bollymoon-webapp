import CartItemCard from './CartItemCard'
import type { CartItem } from '@/types/product.types'

function CartItems({
  numItemsInCart,
  items,
}: {
  numItemsInCart: number
  items: CartItem[]
}) {
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-lg md:text-xl font-semibold text-foreground">
          Cart ({numItemsInCart})
        </h1>
      </div>
      <div className="space-y-4">
        {items.map((item) => {
          return <CartItemCard key={item.id} {...item} />
        })}
      </div>
    </>
  )
}
export default CartItems
