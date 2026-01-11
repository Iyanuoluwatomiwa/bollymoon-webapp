import ProductCardList from '../shop/ProductCardList'
import Container from '../global/Container'
import { Link } from 'react-router-dom'
import { useCollectionProducts } from '@/hooks/useQueries'
import type { ProductFetch } from '@/types/product.types'
import ProductCardListSkeleton from '../skeletons/ProductCardListSkeleton'

function OtherCollections() {
  const {
    data: newArrivals,
    isLoading: newArrivalsLoading,
    isError: newArrivalsError,
  } = useCollectionProducts('new-arrivals')
  const {
    data: sale,
    isLoading: saleLoading,
    isError: saleError,
  } = useCollectionProducts('sale')
  const newArrivalsProducts: ProductFetch[] | undefined = newArrivals?.data
  const saleProducts: ProductFetch[] | undefined = sale?.data

  return (
    <Container className="py-8 sm:py-10">
      <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
        <div className=" rounded-sm px-2 sm:px-4 sm:py-6 py-4 space-y-4 sm:space-y-6 bg-accent-foreground/30">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-center text-lg font-bold uppercase ">
              New <span className="text-primary">Arrivals</span>
            </h3>
            <Link
              to="/collections/new-arrivals"
              className="text-secondary text-sm font-medium  cursor-pointer hover:underline"
            >
              {newArrivalsProducts?.length == 0 || 'View all'}
            </Link>
          </div>
          {newArrivalsLoading ? (
            <ProductCardListSkeleton />
          ) : (
            <>
              <div className="space-y-2 lg:space-y-4 ">
                {newArrivalsProducts?.slice(0, 3)?.map((product, index) => {
                  return <ProductCardList key={index} product={product} />
                })}
              </div>
              {newArrivalsError && (
                <div className="w-full h-[25vh] flex items-center justify-center text-xs sm:text-sm font-medium px-4 text-center">
                  An error occured. Please check your internet connection and refresh the page.
             
                </div>
              )}
              {newArrivalsProducts?.length == 0 && (
                <div className="w-full h-[25vh] flex items-center justify-center text-xs sm:text-sm font-medium text-center ">
                  No newly arrived product. Check back soon.
                </div>
              )}
            </>
          )}
        </div>
        <div className="rounded-sm px-2 sm:px-4 sm:py-6 py-4 space-y-4 sm:space-y-6 bg-accent-foreground/30 h-max">
          <div className="flex items-center justify-between gap-4">
            <h3 className=" text-lg font-bold uppercase ">
              on <span className="text-primary">sale</span>
            </h3>
            <Link
              to="/collections/sale"
              className="text-secondary text-sm font-medium  cursor-pointer hover:underline"
            >
              {saleProducts?.length == 0 || 'View all'}
            </Link>
          </div>

          {saleLoading ? (
            <ProductCardListSkeleton />
          ) : (
            <>
              <div className="space-y-2 lg:space-y-4 ">
                {saleProducts?.slice(0, 3)?.map((product, index) => {
                  return <ProductCardList key={index} product={product} />
                })}
              </div>
              {saleError && (
                <div className="w-full h-[25vh] flex items-center justify-center text-xs sm:text-sm font-medium px-4 text-center ">
                  An error occured. Please check your internet connection and refresh the page.
                </div>
              )}
              {saleProducts?.length == 0 && (
                <div className="w-full h-[25vh] flex items-center justify-center text-xs sm:text-sm font-medium text-center">
                  No product on sale. Check back soon.
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </Container>
  )
}
export default OtherCollections
