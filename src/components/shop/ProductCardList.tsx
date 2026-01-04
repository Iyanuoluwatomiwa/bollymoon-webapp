import type { Product, ProductFetch } from '@/types/product.types'
import { currencyFormatter, discount } from '@/utils/format'
import { Heart, Loader2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import AddToCart from './AddToCart'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { toggleWishlistItem } from '@/features/wishlist/wishlistSlice'
import {
  useAddToWishlist,
  useRemoveFromWishlist,
  useWishlists,
} from '@/hooks/useQueries'
import { toast } from 'sonner'
import Ratings from '../global/Ratings'

function ProductCardList({ product }: { product: ProductFetch }) {
  const {
    id,
    name,
    category,
    stock,
    images,
    originalPriceMin,
    originalPriceMax,
    discountPriceMin,
    discountPriceMax,
  } = product
  const minPrice = Math.min(discountPriceMin, originalPriceMin)
  const maxPrice = Math.max(discountPriceMax, originalPriceMax)
  const discountPercent =
    originalPriceMax !== discountPriceMax &&
    discount(originalPriceMax, discountPriceMax)

  const { token }: { token: string | null } = useSelector(
    (state: any) => state.wishlistState
  )
  //for unauth users
  const { wishlistItems }: { wishlistItems: Product[] } = useSelector(
    (state: any) => state.wishlistState
  )
  const inWishlistUnAuth = wishlistItems.some((item) => item.id === id)
  //for auth users
  const { data, isLoading } = useWishlists()
  const wishlists: ProductFetch[] = data?.data?.map(
    ({ product }: { product: ProductFetch }) => product
  )
  const inWishlistAuth = wishlists?.some((item) => item.id === id)
  const { mutate: removeItem, isPending: removing } = useRemoveFromWishlist()
  const handleRemoveItem = async () => {
    removeItem(id, {
      onSuccess: () => {
        toast.success(`${name} has been  removed from your wishlist`)
      },
      onError: () => {
        toast.error(
          'Error removing item from yyour wishlist. Please try again.'
        )
        return
      },
    })
  }
  const { mutate: addItem, isPending: adding } = useAddToWishlist()
  const handleAddItem = async () => {
    addItem(id, {
      onSuccess: () => {
        toast.success(`${name} has been  added to your wishlist`)
      },
      onError: () => {
        toast.error('Error adding item to your wishlist. Please try again.')
        return
      },
    })
  }

  const inWishlist = token ? inWishlistAuth : inWishlistUnAuth
  const dispatch = useDispatch()
  const handleWishlistToggle = async () => {
    if (token) {
      if (inWishlistAuth) {
        await handleRemoveItem()
      } else {
        await handleAddItem()
      }
    } else {
      dispatch(toggleWishlistItem({ product }))
    }
  }
  return (
    <div className="group bg-white rounded-md overflow-hidden transition-all duration-300 hover:shadow-xl border">
      <div className="flex">
        {/* Image Section */}
        <div className="relative  w-26 sm:w-30 md:w-36  flex-shrink-0 overflow-hidden rounded-l-sm flex-stretch bg-background">
          <figure className="group-hover:scale-110 transition-transform duration-300 w-full h-full">
            <img
              src={images[0].url}
              alt={name}
              className="aspect-4/5 object-cover w-full h-full object-top "
              loading="lazy"
            />
          </figure>

          {/* Badges */}
          {discountPercent && (
            <div className="text-xs font-bold px-2 py-1 rounded-sm text-primary bg-white shadow-xs absolute top-1 left-1 flex justify-between items-center">
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
                {isLoading || adding || removing ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Heart
                    strokeWidth={3}
                    className={`w-4 h-4 ${
                      inWishlist ? 'fill-primary text-primary' : 'text-primary'
                    }`}
                  />
                )}
              </button>
            </div>
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
              {product?.rating && (
                <div className="mt-1">
                  <Ratings rating={product?.rating} />
                </div>
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
            <AddToCart productId={id} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductCardList
