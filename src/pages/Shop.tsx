import { useState } from 'react'
import PageTitle from '@/components/global/PageTitle'
import Sorting from '@/components/shop/Sorting'
import ViewModeToggle from '@/components/shop/ViewModeToggle'
import ProductsGrid from '@/components/shop/ProductsGrid'
import { productsMock } from '@/database'
import ProductsList from '@/components/shop/ProductsList'
import CustomPagination from '@/components/shop/CustomPagination'
import CategoriesCarousel from '@/components/shop/CategoriesCarousel'
import { shop } from '@/assets/data'
import Container from '@/components/global/Container'
import SearchBar from '@/components/global/SearchBar'
import type { ProductFilter } from '@/types/product.types'
import AdvancedFilters from '@/components/shop/AdvancedFilters'
import { advancedFilterSuspense } from '@/components/skeletons/suspense'
import FiltersDialog from '@/components/shop/FiltersDialog'
import FiltersMobileDisplay from '@/components/shop/FiltersMobileDisplay'

type ViewMode = 'grid' | 'list'
const getViewMode =
  (localStorage.getItem('product-view-mode') as ViewMode) || 'grid'

function Shop() {
  //filters
  /*  const [searchQuery, setSearchQuery] = useState('') */
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

  /* const handleSearchQuery: (searchQuery: string) => void = (searchQuery) => {
    setFilters({ ...filters, searchQuery })
    setCurrentPage(1)
  } */
  const onSearch = (searchQuery: string) => {
    console.log(searchQuery)
  }

  /* const itemsPerPage = 1 */
  //fetch filtered products
  /* const maxPrice = 100 */

  /* const totalPages = data && Math.ceil(data?.total / itemsPerPage) */
  const totalPages = 12

  const filteredProductsByCategory = productsMock?.filter((product) => {
    const matchesCategory =
      selectedCategory == 'all' || product.category == selectedCategory

    return matchesCategory
  })

  // Sort products
  /*  const sortedProducts =
    filteredProductsByCategory &&
    filteredProductsByCategory.flat().sort((a, b) => {
    const aMaxPrice = a.discountPrice?.max
    ? Math.max(a.discountPrice?.max, a.originalPrice.max)
    const bMaxPrice = b.discountPrice?.max
    ? Math.max(b.discountPrice?.max, b.originalPrice.max)
    switch (sortBy) {
        case 'price-low':
          return  - b.discountPrice.max
        case 'price-high':
          return b.discountPrice?.max - a.discountPrice.min
        case 'rating':
          return b.rating - a.rating
        default:
          return 0
      }
      
     
    })  */

  /* let productView
  if (isLoading) {
    productView =
      viewMode === 'grid' ? (
        <ProductGridCardSkeleton />
      ) : (
        <ProductListCardSkeleton />
      )
  } else {
    productView =
      viewMode === 'grid' ? (
        <ProductGrid sortedProducts={sortedProducts} isError={isError} />
      ) : (
        <ProductList sortedProducts={sortedProducts} isError={isError} />
      )
  }
 */
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
            {advancedFilterSuspense(
              <AdvancedFilters
                setFilters={setFilters}
                maxPrice={50}
                setCurrentPage={setCurrentPage}
                filters={filters}
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
                  filters={filters}
                />
              </div>

              {/* filters */}
              <FiltersMobileDisplay filters={filters} />

              <CategoriesCarousel
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
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
              <>
                {viewMode === 'grid' ? (
                  <ProductsGrid products={filteredProductsByCategory} />
                ) : (
                  <ProductsList products={filteredProductsByCategory} />
                )}
              </>
              {/* {sectionSuspense(productView)} */}
              {filteredProductsByCategory && (
                <CustomPagination
                  totalPages={totalPages}
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
