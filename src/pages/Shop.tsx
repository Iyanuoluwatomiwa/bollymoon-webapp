import { useState } from 'react'
import PageTitle from '@/components/global/PageTitle'
import Sorting from '@/components/shop/Sorting'
import ViewModeToggle from '@/components/shop/ViewModeToggle'
import ProductsGrid from '@/components/shop/ProductsGrid'
import ProductsList from '@/components/shop/ProductsList'
import CustomPagination from '@/components/shop/CustomPagination'
import CategoriesCarousel from '@/components/shop/CategoriesCarousel'
import { shop } from '@/assets/data'
import Container from '@/components/global/Container'
import SearchBar from '@/components/global/SearchBar'
import type { ProductFetch, ProductFilter } from '@/types/product.types'
import Filters from '@/components/shop/Filters'
import FiltersDialog from '@/components/shop/FiltersDialog'
import FiltersDisplay from '@/components/shop/FiltersDisplay'
import { useAllProducts } from '@/hooks/useQueries'
import ProductCardGridSkeleton from '@/components/skeletons/ProductCardGridSkeleton'
import ProductCardListSkeleton from '@/components/skeletons/ProductCardListSkeleton'
import NoResult from '@/components/global/NoResult'
import { Loader2, Package } from 'lucide-react'

type ViewMode = 'grid' | 'list'
const getViewMode =
  (localStorage.getItem('product-view-mode') as ViewMode) || 'grid'

function Shop() {
  //filters
  /* const [searchQuery, setSearchQuery] = useState('')  */
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [filters, setFilters] = useState<ProductFilter>({
    priceRange: null,
    inStockOnly: null,
    minRating: null,
  })

  //sorting
  const [sortBy, setSortBy] = useState('relevance')

  //pagination
  const [currentPage, setCurrentPage] = useState(1)

  //product view mode
  const [viewMode, setViewMode] = useState<ViewMode>(getViewMode)

  const handleViewMode = (mode: ViewMode) => {
    localStorage.setItem('product-view-mode', mode)
    setViewMode(mode)
  }
  //product fetch
  const { data, isLoading, isError } = useAllProducts()
  const products: ProductFetch[] | undefined = data?.data

  /* const handleSearchQuery: (searchQuery: string) => void = (searchQuery) => {
    setFilters({ ...filters, searchQuery })
    setCurrentPage(1)
  } */
  const onSearch = (searchQuery: string) => {
    console.log(searchQuery)
  }

  const itemsPerPage = 12
  //fetch filtered products
  const maxPrice =
    products?.length === 0 || products?.length == undefined
      ? 0
      : products?.reduce(
          (max, product) =>
            product.originalPriceMax > max ? product.originalPriceMax : max,
          products[0].originalPriceMax
        )

  const totalPages = products && Math.ceil(products?.length / itemsPerPage)

  const filteredProductsByCategory = products?.filter((product) => {
    const matchesCategory =
      selectedCategory == 'all' || product.category == selectedCategory
    return matchesCategory
  })

  // Sort products
  const sortedProducts =
    filteredProductsByCategory &&
    filteredProductsByCategory.flat().sort((a, b) => {
      const aMaxPrice =
        a.discountPriceMax && Math.max(a.discountPriceMax, a.originalPriceMax)
      const bMaxPrice =
        b.discountPriceMax && Math.max(b.discountPriceMax, b.originalPriceMax)
      switch (sortBy) {
        case 'price-low':
          return aMaxPrice - bMaxPrice
        case 'price-high':
          return bMaxPrice - aMaxPrice
        case 'rating':
          return b.rating - a.rating
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
        <ProductsGrid products={sortedProducts} />
      ) : (
        <ProductsList products={sortedProducts} />
      )
  }

  const handlePageChange: (page: number) => void = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <PageTitle title="Shop" />
      <Container className="py-10">
        <section className="space-y-2">
          <h1 className="text-lg md:text-xl font-bold text-foreground">
            Shop Now
          </h1>
          <p className="text-sm md:text-base text-muted-foreground">
            Discover carefully curated products designed for quality, comfort,
            and style.
          </p>
        </section>
        <div className="lg:grid lg:grid-cols-8 gap-4">
          <div className="hidden lg:block col-span-2 border-r border-accent-foreground my-8">
            {isLoading ? (
              <div className="min-h-[50vh] w-full flex items-center justify-center">
                <Loader2 className="animate-spin" />
              </div>
            ) : (
              <Filters
                setFilters={setFilters}
                maxPrice={maxPrice}
                setCurrentPage={setCurrentPage}
              />
            )}
          </div>
          <div className="my-8 col-span-6">
            <div className="mb-8 space-y-4">
              {/* search bar */}
              <div className="flex flex-row gap-2 items-center">
                <SearchBar
                  onSearch={onSearch}
                  placeholder="Search products by name..."
                  width="w-full"
                />

                <FiltersDialog
                  setFilters={setFilters}
                  maxPrice={50}
                  setCurrentPage={setCurrentPage}
                />
              </div>

              {/* filters */}
              <FiltersDisplay filters={filters} setFilters={setFilters} />

              <CategoriesCarousel
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                category={shop.categories}
              />
            </div>
            <section>
              {/* <QueryHeading
                query={filters.searchQuery}
                queryResult={sortedProducts}
                type="product"
              /> */}

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

              {/* products */}
              <>
                {' '}
                {productView}
                {!isLoading &&
                  (filteredProductsByCategory?.length == 0 ||
                    filteredProductsByCategory?.length == undefined) && (
                    <NoResult
                      errorText="products"
                      isError={isError}
                      text="No product found matching your criteria"
                      icon={Package}
                    />
                  )}
              </>

              {filteredProductsByCategory &&
                filteredProductsByCategory.length !== 0 && (
                  <CustomPagination
                    totalPages={totalPages as number}
                    currentPage={currentPage}
                    handlePageChange={handlePageChange}
                  />
                )}
            </section>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Shop
