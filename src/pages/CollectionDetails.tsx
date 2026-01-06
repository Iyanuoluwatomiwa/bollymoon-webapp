import { collectionsData, shop } from '@/assets/data'
import Container from '@/components/global/Container'
import NoResult from '@/components/global/NoResult'
import PageTitle from '@/components/global/PageTitle'
import CustomPagination from '@/components/shop/CustomPagination'
import ProductsGrid from '@/components/shop/ProductsGrid'
import ProductsList from '@/components/shop/ProductsList'
import Sorting from '@/components/shop/Sorting'
import ViewModeToggle from '@/components/shop/ViewModeToggle'
import ProductCardGridSkeleton from '@/components/skeletons/ProductCardGridSkeleton'
import ProductCardListSkeleton from '@/components/skeletons/ProductCardListSkeleton'
import { useCollectionProducts } from '@/hooks/useQueries'
import type { ProductFetch } from '@/types/product.types'
import { ChevronLeft, Package } from 'lucide-react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

type ViewMode = 'grid' | 'list'
const getViewMode =
  (localStorage.getItem('product-view-mode') as ViewMode) || 'grid'

function CollectionDetails() {
  const { collectionId } = useParams()
  const { data, isLoading, isError } = useCollectionProducts(collectionId)
  const collection = collectionsData[collectionId as string]
  const Icon = collection.icon
  const [sortBy, setSortBy] = useState('relevance')
  const [currentPage, setCurrentPage] = useState(1)
  const [viewMode, setViewMode] = useState<ViewMode>(getViewMode)
  const handleViewMode = (mode: ViewMode) => {
    localStorage.setItem('product-view-mode', mode)
    setViewMode(mode)
  }
  const handlePageChange: (page: number) => void = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const products: ProductFetch[] | undefined = data?.data
  const itemsPerPage = 12
  const totalPages = products && Math.ceil(products?.length / itemsPerPage)
  const sortedProducts =
    products &&
    products.flat().sort((a, b) => {
      const aMaxPrice =
        a.discountPriceMax && Math.max(a.discountPriceMax, a.originalPriceMax)
      const bMaxPrice =
        b.discountPriceMax && Math.max(b.discountPriceMax, b.originalPriceMax)
      switch (sortBy) {
        case 'price-low':
          return aMaxPrice - bMaxPrice
        case 'price-high':
          return bMaxPrice - aMaxPrice
        default:
          return 0
      }
    })

  let productView
  if (isLoading) {
    productView =
      viewMode === 'grid' ? (
        <ProductCardGridSkeleton />
      ) : (
        <ProductCardListSkeleton />
      )
  } else {
    productView =
      viewMode === 'grid' ? (
        <ProductsGrid collection products={sortedProducts} />
      ) : (
        <ProductsList products={sortedProducts} />
      )
  }
  return (
    <>
      <PageTitle title={collection.title} />
      <div className="space-y-8 lg:space-y-10">
        <header className="relative min-h-[60vh] lg:min-h-[50vh] flex items-center">
          {/* Background Image with Parallax Effect */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 md:max-w-sm lg:max-w-md ml-auto">
              <img
                src={collection.image}
                alt={collection.title}
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/60 to-transparent " />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-transparent to-transparent " />

            {/* Animated Accent Line */}
            <div
              className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${collection.accentColor} origin-left`}
            />
          </div>

          {/* Content */}
          <Container className=" pt-6 pb-12 lg:pb-20 relative z-10 w-full">
            <div className="">
              {/* back navigation */}
              <nav className="mb-2">
                <Link
                  to="/collections"
                  className="inline-flex items-center gap-1 text-white hover:text-foreground transition-colors font-medium group"
                >
                  <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  <span className="text-sm tracking-wider uppercase">
                    All Collections
                  </span>
                </Link>
              </nav>

              <div className="max-w-lg">
                {/* Badge */}
                <div className="">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/80 text-accent text-sm font-medium mt-4 mb-8">
                    <Icon className="w-4 h-4 text-accent" />
                    {collection.badge}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <span className="text-accent-foreground text-xs md:text-sm tracking-[0.3em] uppercase font-medium block mb-2.5">
                    {collection.subtitle}
                  </span>
                  <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5">
                    {collection.title}
                  </h1>
                </div>

                {/* Description */}
                <p className="text-accent-foreground text-sm md:text-base max-w-2xl leading-relaxed">
                  {collection.description}
                </p>
              </div>
            </div>
          </Container>
        </header>
        <Container className="pb-10">
          <div className="flex items-center justify-between gap-2 mb-8">
            <Sorting
              sortBy={sortBy}
              setSortBy={setSortBy}
              options={shop.sorting}
            />

            <ViewModeToggle
              viewMode={viewMode}
              handleViewMode={handleViewMode}
            />
          </div>
          <section>
            <>
              {productView}
              {!isLoading &&
                (sortedProducts?.length == 0 ||
                  sortedProducts?.length == undefined) && (
                  <NoResult
                    errorText="products"
                    isError={isError}
                    text={`No product in this collection. Kindly, check back later. `}
                    icon={Package}
                  />
                )}
            </>

            {sortedProducts && sortedProducts.length !== 0 && (
              <CustomPagination
                totalPages={totalPages as number}
                currentPage={currentPage}
                handlePageChange={handlePageChange}
              />
            )}
          </section>
        </Container>
      </div>
    </>
  )
}
export default CollectionDetails
