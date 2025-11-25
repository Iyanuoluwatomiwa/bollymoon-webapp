import { Card, CardContent } from '../ui/card'
import { Link } from 'react-router-dom'
import { currencyFormatter, discount } from '@/utils/format'
import { Minus, Plus } from 'lucide-react'
import { Button } from '../ui/button'
import { useDispatch } from 'react-redux'
import { editItem, removeItem } from '@/features/cart/cartSlice'
import type { CartItem, Product } from '@/types/product.types'
import RemoveItemDialog from './RemoveItemDialog'
import { useSelector } from 'react-redux'
import { toggleWishlistItem } from '@/features/wishlist/wishlistSlice'
import { productsMock } from '@/database'

function CartItemCard({
  image,
  name,
  color,
  size,
  quantity,
  id,
  category,
  discountPrice,
  originalPrice,
  stock,
}: CartItem) {
  const product = productsMock.find((product) => product.id === id)
  const discountPercent =
    discountPrice && discount(originalPrice, discountPrice)
  const dispatch = useDispatch()
  const removeFromCart = () => {
    dispatch(
      removeItem({
        id,
        size,
        color,
        name,
      })
    )
  }
  const { wishlistItems }: { wishlistItems: Product[] } = useSelector(
    (state: any) => state.wishlistState
  )
  const inWishlist = wishlistItems.some((item) => item.id === id)
  const handleWishlistToggle = () => {
    dispatch(toggleWishlistItem({ product }))
  }
  const updateCartItem = (quantity: number) => {
    dispatch(
      editItem({
        id,
        size,
        color,
        quantity,
      })
    )
  }

  return (
    <section>
      <Card className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow rounded-sm duration-200 p-2 md:p-4">
        <CardContent className="p-0 space-y-3">
          {/* product image */}
          <div className="flex gap-2 md:gap-4">
            <figure className="w-20 md:w-32 relative">
              <img
                src={image}
                alt={name}
                className="aspect-square w-full object-cover"
                loading="lazy"
              />
            </figure>
            <div className="flex-1 space-y-1.5">
              {/* Product name, size, and color */}
              <div className="space-y-1">
                <Link to={`/shop/${category}/${id}`} className="group block">
                  <h2 className="font-medium text-sm group-hover:text-primary transition-colors line-clamp-2">
                    {name}
                  </h2>
                </Link>
                <div className="flex items-center text-xs gap-2 font-medium capitalize">
                  {size && (
                    <div
                      className=" flex items-center gap-1
                     "
                    >
                      <span>{category === 'hair' ? 'Length:' : 'Size:'}</span>
                      <span>{size} </span>
                    </div>
                  )}

                  <div
                    className=" flex items-center gap-1
                     font-medium"
                  >
                    <span>Color:</span>
                    <span> {color}</span>
                  </div>
                </div>
              </div>
              {/* Discount and original price */}
              <div className="flex flex-col gap-x-2 ">
                <span className="text-[15px]/5 sm:text-lg font-semibold text-foreground">
                  {discountPrice
                    ? currencyFormatter(discountPrice)
                    : currencyFormatter(originalPrice)}
                </span>
                {discountPrice && (
                  <div className="flex items-center gap-2">
                    <span className="text-[12px] sm:text-sm text-muted-foreground line-through font-medium italic">
                      {currencyFormatter(originalPrice)}
                    </span>
                    <span className="text-xs font-bold px-2 py-1 rounded-sm text-primary bg-primary/20 flex justify-between items-center">
                      -{discountPercent}%
                    </span>
                  </div>
                )}
              </div>
              {/* Stock alert */}
              <div>
                {stock === 0 ? (
                  <span className=" text-destructive text-xs">
                    Out of stock
                  </span>
                ) : stock <= 3 ? (
                  <span className="flex items-center text-destructive text-xs gap-1 ">
                    {stock} unit
                    {stock > 1 && 's'} left
                  </span>
                ) : stock <= 10 ? (
                  <span className="flex items-center text-primary text-xs gap-1 ">
                    Few units left
                  </span>
                ) : (
                  <span className="text-xs text-gray-500 block capitalize">
                    In stock
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-between">
            {/* Remove button */}
            <RemoveItemDialog
              removeFromCart={removeFromCart}
              inWishlist={inWishlist}
              handleWishlistToggle={handleWishlistToggle}
            />
            {/* Update Buttons */}
            <div className="flex items-center w-max">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => updateCartItem(quantity - 1)}
                disabled={quantity == 1}
                className="h-8 w-8 p-0 rounded-sm rounded-r-none cursor-pointer disabled:bg-gray-500 bg-primary hover:bg-primary/90 text-white"
              >
                <Minus className="w-3 h-3" />
              </Button>
              <div className="h-8 w-16 flex items-center justify-center border-x text-sm font-medium">
                {quantity}
              </div>
              <Button
                variant="default"
                size="sm"
                onClick={() => updateCartItem(quantity + 1)}
                className="h-8 w-8 p-0 rounded-sm rounded-l-none cursor-pointer disabled:bg-muted-foreground bg-primary text-white"
              >
                <Plus className="w-3 h-3" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
export default CartItemCard
