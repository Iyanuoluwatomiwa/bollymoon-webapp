import Container from '@/components/global/Container'
import LoadingIcon from '@/components/global/LoadingIcon'
import NoResult from '@/components/global/NoResult'
import PageTitle from '@/components/global/PageTitle'
import Ratings from '@/components/global/Ratings'
import BackNavHeader from '@/components/headers/BackNavHeader'
import ImageCarousel from '@/components/product/ImageCarousel'
import EmptyProductReview from '@/components/ratings_reviews/EmptyProductReview'
import ReviewCard from '@/components/ratings_reviews/ReviewCard'
import AddToCart from '@/components/shop/AddToCart'
import ReviewCardSkeleton from '@/components/skeletons/ReviewCardSkeleton'
import { Separator } from '@/components/ui/separator'
import { toggleWishlistItem } from '@/features/wishlist/wishlistSlice'
import {
  useAddToWishlist,
  useProductReviews,
  useRemoveFromWishlist,
  useSingleProduct,
  useWishlists,
} from '@/hooks/useQueries'
import type { ProductFetch, ProductReviews } from '@/types/product.types'
import { currencyFormatter, discount } from '@/utils/format'
import { ChevronRight, Heart, Loader2, Minus } from 'lucide-react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

function ProductDetails() {
  const { productId } = useParams()
  const {
    data,
    isLoading: productLoading,
    isError,
  } = useSingleProduct(productId)
  const {
    data: reviews,
    isLoading: reviewsLoading,
    isError: reviewsError,
  } = useProductReviews(productId)
  const productReviews: ProductReviews[] | undefined = reviews?.data

  const product: ProductFetch = data?.data

  const minPrice = Math.min(
    product?.discountPriceMin,
    product?.originalPriceMin
  )
  const maxPrice = Math.max(
    product?.discountPriceMax,
    product?.originalPriceMax
  )
  const discountPercent =
    product?.originalPriceMax !== product?.discountPriceMax &&
    discount(product?.originalPriceMax, product?.discountPriceMax)
  const { token }: { token: string | null } = useSelector(
    (state: any) => state.wishlistState
  )
  //for unauth users
  const { wishlistItems }: { wishlistItems: ProductFetch[] } = useSelector(
    (state: any) => state.wishlistState
  )
  const inWishlistUnAuth = wishlistItems.some((item) => item.id === product?.id)
  //for auth users
  const { data: fetchedWishlists, isLoading: loadingWishlists } = useWishlists()
  const wishlists: ProductFetch[] = fetchedWishlists?.data?.map(
    ({ product }: { product: ProductFetch }) => product
  )
  const inWishlistAuth = wishlists?.some((item) => item.id === product?.id)

  const inWishlist = token ? inWishlistAuth : inWishlistUnAuth

  const { mutate: removeItem, isPending: removing } = useRemoveFromWishlist()

  const handleRemoveItem = async () => {
    removeItem({ id: product?.id, name: product?.name })
  }

  const { mutate: addItem, isPending: adding } = useAddToWishlist()
  const handleAddItem = async () => {
    addItem({ id: product?.id, name: product?.name })
  }
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
    <>
      <PageTitle title={product?.name} />
      <BackNavHeader title="Details" />

      <Container className="pb-10 lg:pt-2 pt-0">
        <div className="relative">
          {productLoading ? (
            <div className="h-[72vh] flex items-center justify-center">
              <LoadingIcon />
            </div>
          ) : (
            <>
              {isError ? (
                <NoResult isError={isError} errorText="product details" />
              ) : (
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
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-seibold text-white rounded-xs uppercase tracking-wider px-1.5 py-0.5 bg-primary block w-max">
                              {product?.category == 'hairCare'
                                ? 'hair care'
                                : product?.category}
                            </span>
                            <span className="text-[10px] font-seibold text-white rounded-xs uppercase tracking-wider px-1.5 py-0.5 bg-primary block w-max">
                              {product?.subcategory.replace(/-/g, ' ')}
                            </span>
                          </div>

                          <h2 className="text-sm sm:text-base md:text-lg">
                            {product?.name}
                          </h2>
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
                            <span>
                              {product?.reviewsCount} rating
                              {product?.reviewsCount !== 0 && 's'}
                            </span>
                          </div>
                          <div className="flex items-center gap-1 sm:gap-2 md:gap-4">
                            <button
                              className="p-2 hover:scale-110 cursor-pointer bg-primary/20 rounded-full"
                              onClick={handleWishlistToggle}
                            >
                              {loadingWishlists || adding || removing ? (
                                <Loader2 className="w-4 h-4 animate-spin" />
                              ) : (
                                <Heart
                                  strokeWidth={3}
                                  className={`w-4 h-4 ${
                                    inWishlist
                                      ? 'fill-primary text-primary'
                                      : 'text-primary'
                                  }`}
                                />
                              )}
                            </button>
                            <div className="min-w-27 sm:min-w-34">
                              <AddToCart productId={product?.id} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Separator className="border-3 border-white lg:hidden" />
                    {/* product details */}
                    <>
                      <div className="py-2  md:py-4">
                        <h2 className="text-sm md:text-base  font-semibold ">
                          Product Details
                        </h2>
                      </div>
                      <Separator className="lg:hidden mb-2" />
                      <div>
                        <p className="text-xs sm:text-sm my-4 lg:mb-4 lg:mt-0 whitespace-pre-line">
                          {' '}
                          {product?.description}{' '}
                        </p>
                      </div>
                      <Separator className="border-3 border-white lg:hidden" />
                    </>

                    {/* product ratings & reviews */}
                    <div className="py-2 md:py-4">
                      <Link
                        to={`ratings-reviews`}
                        className="text-sm md:text-base flex items-center justify-between block font-semibold"
                      >
                        <div className="space-y-0.5">
                          <h2>Product Rating & Reviews</h2>
                          <div className="flex items-center gap-2 text-xs sm:text-sm">
                            <span className="border border-primary font-semibold text-primary px-0.5 rounded-xs">
                              {product?.rating}/5
                            </span>
                            <span>
                              {product?.reviewsCount} rating
                              {product?.reviewsCount !== 0 && 's'}
                            </span>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                      </Link>
                    </div>
                    <Separator className="lg:hidden mb-2" />
                    <div>
                      {reviewsLoading ? (
                        <ReviewCardSkeleton />
                      ) : (
                        <>
                          <div className="grid grid-cols-1 gap-2 md:gap-4 pb-2 md:pt-2">
                            {productReviews?.slice(0, 6).map((review) => (
                              <ReviewCard key={review.id} {...review} />
                            ))}
                          </div>
                          {reviewsError ? (
                            <NoResult
                              isError={reviewsError}
                              errorText="product reviews"
                            />
                          ) : (
                            productReviews?.length == 0 && (
                              <EmptyProductReview />
                            )
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </Container>
    </>
  )
}
export default ProductDetails
