import type { ProductFetch } from '@/types/product.types'
import { currencyFormatter, discount } from '@/utils/format'
import { Heart, Loader2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import AddToCart from './AddToCart'
import { useDispatch } from 'react-redux'
import { toggleWishlistItem } from '@/features/wishlist/wishlistSlice'
import { useSelector } from 'react-redux'
import {
  useAddToWishlist,
  useRemoveFromWishlist,
  useWishlists,
} from '@/hooks/useQueries'
import { toast } from 'sonner'
import Ratings from '../global/Ratings'

const ProductCardGrid = ({ product }: { product: ProductFetch }) => {
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
    (state: any) => state.userState
  )
  //for unauth users
  const { wishlistItems }: { wishlistItems: ProductFetch[] } = useSelector(
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
    <div className="group rounded-sm overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md flex flex-col">
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-t-sm ">
        <figure className="group-hover:scale-110 transition-transform duration-300 w-full h-44 sm:h-50 xl:h-60 ">
          <img
            src={images[0].url}
            alt={name}
            className=" object-cover w-full h-full object-top"
            loading="lazy"
          />
        </figure>

        {/* Badges */}
        {discountPercent && (
          <div className="text-xs font-bold px-1 py-0.5 rounded-sm text-primary bg-white shadow-xs absolute top-1 right-1 flex justify-between items-center">
            -{discountPercent}%
          </div>
        )}

        {/* Wishlist Button */}
        <button
          className="bg-white rounded-full p-1 hover:scale-110 cursor-pointer absolute shadow-xs bottom-1 right-1"
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
      {/* Content Section */}
      <div className="p-2 pt-1 flex-1 flex flex-col gap-4 justify-between bg-white">
        <div className="space-y-2">
          {/* Category*/}
          <div>
            <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
              {category == 'hairCare' ? 'hair care' : category}
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
          {product?.rating && (
            <div className="mt-1">
              <Ratings rating={product?.rating} />
            </div>
          )}
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
          <div>
            {/* Action Button */}
            <AddToCart productId={product?.id} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCardGrid
