import type { Product } from '@/types/product.types'
import { Card, CardContent } from '../ui/card'
import { Link } from 'react-router-dom'
import { currencyFormatter, discount } from '@/utils/format'
import { useDispatch } from 'react-redux'
import { toggleWishlistItem } from '@/features/wishlist/wishlistSlice'
import AddToCart from '../shop/AddToCart'

function WishlistItemCard({ wishlistItem }: { wishlistItem: Product }) {
  const {
    images,
    name,
    id,
    category,
    discountPrice,
    originalPrice,
    stock,
    description,
  } = wishlistItem
  const discountPercent =
    discountPrice && discount(originalPrice, discountPrice)

  const dispatch = useDispatch()
  const removeItemFromWishlist = () => {
    dispatch(toggleWishlistItem({ product: wishlistItem }))
  }
  return (
    <section>
      <Card className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow rounded-sm duration-200 p-2 md:p-4 h-full">
        <CardContent className="p-0 flex flex-col gap-3 justify-between h-full">
          {/* product image */}
          <div className="flex gap-2 md:gap-4 flex-1">
            <figure className="w-20 md:w-32 relative">
              <img
                src={images[0]}
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
                <p className="text-gray-600 text-xs line-clamp-2 sm:line-clamp-3 leading-relaxed">
                  {description}
                </p>
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
                    <span className="text-xs font-bold px-2 py-1 md:py-1.5 md:px-3 rounded-sm text-primary bg-primary/20 flex justify-between items-center">
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
            <button
              className="text-primary font-medium text-sm cursor-pointer h-8 px-2"
              onClick={removeItemFromWishlist}
            >
              Remove
            </button>
            {/* Add to cart button */}
            <AddToCart product={wishlistItem} />
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
export default WishlistItemCard
