import { useSelector } from 'react-redux'
import CartItemCard from './CartItemCard'
import type { CartItem } from '@/types/product.types'

function CartItems() {
  const {
    numItemsInCart,
    cartItems,
  }: { numItemsInCart: number; cartItems: CartItem[] } = useSelector(
    (state: any) => state.cartState
  )

  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">
          Cart ({numItemsInCart})
        </h1>
      </div>
      <div className="space-y-4">
        {cartItems.map((cartItem) => {
          return <CartItemCard key={cartItem.id} {...cartItem} />
        })}
      </div>
    </>
  )
}
export default CartItems
