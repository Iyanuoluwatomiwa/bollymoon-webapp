import { useParams } from 'react-router-dom'
import { Cart } from '@/components/marketplace'
import { useSingleProduct } from '@/utils/hooks'
import { ProductInfoSkeleton } from '@/components/skeletons'
import SubPagesHeader from '@/components/headers/SubPagesHeader'
import { PageHeading } from '@/components/headings'
import { ProductImages } from '@/components/productDetails'
import { lazy } from 'react'
import {
  nullSuspense,
  sectionSuspense,
  sizeGuideSuspense,
} from '@/utils/suspense'
import { useSelector } from 'react-redux'
import type { UserRole } from '@/utils/types'
import { useProductDialog } from '@/hooks/useProductDialog'
import type { productSizesList } from '@/utils/data'

const ProductReviews = lazy(() => import('@/components/global/ProductReviews'))
const GiveReview = lazy(() => import('@/components/productDetails/GiveReview'))
const ProductInfo = lazy(
  () => import('@/components/productDetails/ProductInfo')
)
const FetchingError = lazy(
  () => import('@/components/productDetails/FetchingError')
)
const SizeGuideModal = lazy(
  () => import('@/components/sizeGuide/SizeGuideModal')
)

const ProductDetails = () => {
  const { productid } = useParams()
  const { userRole }: { userRole: UserRole } = useSelector(
    (state: any) => state.userState
  )
  const { isSizeGuideOpen, setIsSizeGuideOpen } = useProductDialog()
  const id = productid == undefined ? '' : productid
  const {
    data: product,
    isLoading: productLoading,
    isError,
  } = useSingleProduct(id)

  return (
    <div className="min-h-screen relative container">
      <SubPagesHeader currentPage={product?.name} previousPage="marketplace" />

      <PageHeading
        pageTitle={`Product - ${product?.name}`}
        pageDesc={product?.description}
      />

      {productLoading ? (
        <ProductInfoSkeleton />
      ) : isError ? (
        nullSuspense(<FetchingError isError={isError} text="product" />)
      ) : (
        <main>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <ProductImages product={product} />

            {sectionSuspense(
              <ProductInfo
                product={product}
                onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
              />
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <section>
              {sectionSuspense(
                <ProductReviews reviews={product?.productReviews} />
              )}
            </section>
            <section>
              {sectionSuspense(<GiveReview product={product} />)}
            </section>
          </div>
          {(userRole?.role == 'buyer' || userRole?.role == null) && (
            <div className="border bg-background shadow-xs hover:bg-accent group hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 cursor-pointer fixed w-14 h-14 sm:h-18 sm:w-18 rounded-full flex items-center justify-center top-1/3 -translate-y-1/3 right-4">
              <Cart />
            </div>
          )}
        </main>
      )}
      {sizeGuideSuspense(
        <>
          {isSizeGuideOpen && (
            <SizeGuideModal
              onClose={() => setIsSizeGuideOpen(false)}
              isSizeGuideOpen={isSizeGuideOpen}
              productCategory={
                product?.category as keyof typeof productSizesList
              }
            />
          )}
        </>
      )}
    </div>
  )
}

export default ProductDetails
