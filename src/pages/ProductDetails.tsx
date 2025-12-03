import Container from '@/components/global/Container'
import PageTitle from '@/components/global/PageTitle'
import Ratings from '@/components/global/Ratings'
import BackNavHeader from '@/components/headers/BackNavHeader'
import ImageCarousel from '@/components/product/ImageCarousel'
import EmptyProductReview from '@/components/ratings_reviews/EmptyProductReview'
import ReviewCard from '@/components/ratings_reviews/ReviewCard'
import AddToCart from '@/components/shop/AddToCart'
import { Separator } from '@/components/ui/separator'
import { productsMock } from '@/database'
import { toggleWishlistItem } from '@/features/wishlist/wishlistSlice'
import type { Product } from '@/types/product.types'
import { currencyFormatter, discount } from '@/utils/format'
import { ChevronRight, Heart, Minus } from 'lucide-react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

function ProductDetails() {
  const { productId } = useParams()
  const product: Product | undefined = productsMock.find(
    (product) => product.id === productId
  )
  const minPrice = product?.discountPrice?.min
    ? Math.min(product?.discountPrice.min, product?.originalPrice.min)
    : product?.originalPrice.min
  const maxPrice = product?.discountPrice?.max
    ? Math.max(product?.discountPrice?.max, product?.originalPrice.max)
    : product?.originalPrice?.max
  const discountPercent =
    product?.discountPrice?.max &&
    discount(product?.originalPrice.max, product?.discountPrice.max)
  const { wishlistItems }: { wishlistItems: Product[] } = useSelector(
    (state: any) => state.wishlistState
  )
  const inWishlist = wishlistItems.some((item) => item.id === productId)
  const dispatch = useDispatch()
  const handleWishlistToggle = () => {
    dispatch(toggleWishlistItem({ product }))
  }
  return (
    <>
      <PageTitle title={product?.name ?? 'Product Details'} />
      <BackNavHeader />
      <div className="space-y-2 md:space-y-6 pb-10 lg:pt-2 pt-0 relative">
        <Container>
          <h1 className="text-lg md:text-xl font-bold text-foreground">
            Details
          </h1>
        </Container>
        <Container>
          <div className="grid lg:grid-cols-8 lg:gap-4">
            <div className="lg:col-span-3 ">
              <div className="pb-4">
                <ImageCarousel carouselItems={product?.images} />
              </div>

              <Separator className="border-3 border-white lg:hidden" />
            </div>
            <div className="lg:col-span-5">
              <div className="py-4 lg:pt-0 ">
                <div className="space-y-4">
                  {/* category and product name */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-seibold text-white rounded-xs uppercase tracking-wider px-1.5 py-0.5 bg-primary block w-max">
                      {product?.category}
                    </span>
                    <h2 className="text-sm md:text-base">{product?.name}</h2>
                  </div>
                  {/* Price Section */}
                  <div className="flex items-center gap-4 -mt-2">
                    {minPrice !== maxPrice ? (
                      <div className=" text-lg md:text-xl  font-semibold text-foreground flex items-center gap-1">
                        {currencyFormatter(minPrice)} <Minus />
                        {currencyFormatter(maxPrice)}
                      </div>
                    ) : (
                      <div className=" text-lg md:text-xl font-semibold text-foreground">
                        {currencyFormatter(minPrice)}
                      </div>
                    )}

                    {discountPercent && (
                      <div className="text-xs font-bold px-2 py-0.5 rounded-sm text-white bg-primary flex justify-between items-center">
                        -{discountPercent}%
                      </div>
                    )}
                  </div>

                  {/* ratings, wishlist, and add to cart */}
                  <div className="flex items-center gap-4 justify-between">
                    <div className="flex items-center gap-2 text-[10px] sm:text-sm text-secondary">
                      <Ratings rating={product?.rating} />
                      <span>{product?.reviews} ratings</span>
                    </div>
                    <div className="flex items-center gap-2 md:gap-4">
                      <button
                        className="p-2 hover:scale-110 cursor-pointer bg-primary/20 rounded-full"
                        onClick={handleWishlistToggle}
                      >
                        <Heart
                          strokeWidth={2}
                          className={`w-5 h-5 sm:w-6 sm:h-6 
              ${inWishlist ? 'fill-primary text-primary' : 'text-primary'}
            `}
                        />
                      </button>
                      <div className="min-w-26 sm:min-w-34">
                        <AddToCart product={product} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Separator className="border-3 border-white lg:hidden" />
              {/* product details */}
              <>
                <div className="sm:py-4 py-2  lg:py-2">
                  <h2 className="text-sm md:text-base  font-semibold ">
                    Product Details
                  </h2>
                </div>
                <Separator className="lg:hidden mb-2" />
                <div>
                  <p className="text-xs sm:text-sm mb-4">
                    {' '}
                    {product?.description}{' '}
                  </p>
                </div>
                <Separator className="border-3 border-white lg:hidden" />
              </>

              {/* product ratings & reviews */}
              <div className="sm:py-4 py-2 lg:py-2">
                <div className="text-sm md:text-base flex items-center justify-between  font-semibold">
                  <h2>Product Rating & Reviews</h2>
                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                </div>
              </div>
              <Separator className="lg:hidden mb-2" />
              <div>
                {product?.ratingsReviews ? (
                  <div className="grid grid-cols-1 gap-2 md:gap-4 pb-2 md:pt-2">
                    {product?.ratingsReviews.slice(0, 6).map((ratingReview) => (
                      <ReviewCard key={ratingReview.id} {...ratingReview} />
                    ))}
                  </div>
                ) : (
                  <EmptyProductReview />
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
export default ProductDetails
