import type { Product } from '@/types/product.types'
import { currencyFormatter, discount } from '@/utils/format'
import { Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import AddToCart from './AddToCart'
import { useDispatch } from 'react-redux'
import { toggleWishlistItem } from '@/features/wishlist/wishlistSlice'
import { useSelector } from 'react-redux'

const ProductCardGrid = ({ product }: { product: Product }) => {
  const { id, name, category, stock, images, originalPrice, discountPrice } =
    product
  const minPrice = discountPrice?.min
    ? Math.min(discountPrice.min, originalPrice.min)
    : originalPrice.min
  const maxPrice = discountPrice?.max
    ? Math.max(discountPrice?.max, originalPrice.max)
    : originalPrice.max
  const discountPercent =
    discountPrice?.max && discount(originalPrice.max, discountPrice.max)
  const { wishlistItems }: { wishlistItems: Product[] } = useSelector(
    (state: any) => state.wishlistState
  )
  const inWishlist = wishlistItems.some((item) => item.id === id)
  const dispatch = useDispatch()
  const handleWishlistToggle = () => {
    dispatch(toggleWishlistItem({ product }))
  }

  return (
    <div className="group rounded-sm overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md flex flex-col">
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-t-sm ">
        <figure className="group-hover:scale-110 transition-transform duration-300">
          <img
            src={images[0]}
            alt={name}
            className="aspect-square object-center "
            loading="lazy"
          />
        </figure>

        {/* Badges */}
        {discountPercent && (
          <div className="text-xs font-bold px-2 py-1 rounded-sm text-primary bg-primary/20 absolute top-1 right-1 flex justify-between items-center">
            -{discountPercent}%
          </div>
        )}

        {/* Wishlist Button */}
        <button
          className="absolute bottom-2 right-2 bg-primary/20 rounded-full p-2 hover:scale-110 cursor-pointer"
          onClick={handleWishlistToggle}
        >
          <Heart
            strokeWidth={3}
            className={`w-4 h-4
              ${inWishlist ? 'fill-primary text-primary' : 'text-primary'}
            `}
          />
        </button>
      </div>
      {/* Content Section */}
      <div className="p-2 pt-1 flex-1 flex flex-col gap-4 justify-between bg-accent/20">
        <div className="space-y-2">
          {/* Category*/}
          <div>
            <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
              {category}
            </span>
            {/* Product Name */}
            <Link to={`/shop/${category}/${id}`}>
              <h3 className="font-medium text-foreground text-sm line-clamp-1 hover:text-primary transition-colors cursor-pointer">
                {name}
              </h3>
            </Link>
          </div>
          {/* Stock Status */}
          <>
            {stock < 10 && (
              <p className="text-xs text-primary font-medium">Few items left</p>
            )}
            {stock == 0 && (
              <p className="text-xs text-destructive font-medium">
                Out of stock
              </p>
            )}
          </>
        </div>
        <div className="flex flex-col  gap-2 justify-between">
          {/* Price Section */}
          {minPrice !== maxPrice ? (
            <div className="text-[15px]/5 sm:text-lg  font-semibold text-foreground">
              {currencyFormatter(minPrice)} - {currencyFormatter(maxPrice)}
            </div>
          ) : (
            <div className="text-[15px]/5 sm:text-lg  font-semibold text-foreground">
              {currencyFormatter(minPrice)}
            </div>
          )}
          <div className="ml-auto w-max">
            {/* Action Button */}
            <AddToCart product={product} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCardGrid
