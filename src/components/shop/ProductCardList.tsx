import type { Product } from '@/types/product.types'
import { currencyFormatter, discount } from '@/utils/format'
import { Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import AddToCart from './AddToCart'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { toggleWishlistItem } from '@/features/wishlist/wishlistSlice'

function ProductCardList({ product }: { product: Product }) {
  const {
    id,
    name,
    category,
    stock,
    images,
    originalPrice,
    discountPrice,
    description,
  } = product
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
    <div className="group bg-white rounded-md overflow-hidden transition-all duration-300 hover:shadow-xl border">
      <div className="flex">
        {/* Image Section */}
        <div className="relative  w-26 sm:w-30 md:w-36  flex-shrink-0 overflow-hidden rounded-l-sm flex-stretch bg-background">
          <figure className="group-hover:scale-110 transition-transform duration-300 w-full h-full">
            <img
              src={images[0]}
              alt={name}
              className="aspect-4/5 object-cover w-full h-full object-center "
              loading="lazy"
            />
          </figure>

          {/* Badges */}
          {discountPercent && (
            <div className="text-xs font-bold px-2 py-1 rounded-sm text-primary bg-primary/20 absolute top-1 left-1 flex justify-between items-center">
              -{discountPercent}%
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="flex-1 flex flex-col p-2 md:p-4 gap-3 justify-between">
          <div className="space-y-1">
            <div className="flex justify-between gap-2 items-start ">
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
              <button
                className="bg-primary/20 rounded-full p-2 hover:scale-110 cursor-pointer"
                onClick={handleWishlistToggle}
              >
                <Heart
                  strokeWidth={3}
                  className={`w-4 h-4 ${
                    inWishlist ? 'fill-primary text-primary' : 'text-primary'
                  }`}
                />
              </button>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-xs line-clamp-2 sm:line-clamp-3 leading-relaxed">
              {description}
            </p>

            {/* Stock Status */}
            <>
              {stock < 10 && (
                <p className="text-xs text-primary font-medium">
                  Few items left
                </p>
              )}
              {stock == 0 && (
                <p className="text-xs text-destructive font-medium">
                  Out of stock
                </p>
              )}
            </>
          </div>

          {/* Price & Actions */}
          <div className="flex flex-col items-start justify-between gap-2">
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
            <AddToCart product={product} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductCardList
