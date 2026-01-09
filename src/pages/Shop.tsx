import { useEffect, useState } from 'react'
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
import { useAllProducts, useProductsMaxPrice } from '@/hooks/useQueries'
import ProductCardGridSkeleton from '@/components/skeletons/ProductCardGridSkeleton'
import ProductCardListSkeleton from '@/components/skeletons/ProductCardListSkeleton'
import NoResult from '@/components/global/NoResult'
import { Loader2, Package } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'

type ViewMode = 'grid' | 'list'
const getViewMode =
  (localStorage.getItem('product-view-mode') as ViewMode) || 'grid'

function Shop() {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const category = queryParams.get('category')
  const search = queryParams.get('search')
  const navigate = useNavigate()
  //filters
  const [searchQuery, setSearchQuery] = useState('')
  const [filters, setFilters] = useState<ProductFilter>({
    priceRange: null,
    inStockOnly: null,
    searchQuery,
    category: '',
  })

  useEffect(() => {
    if (category || search) {
      setSearchQuery(search || '')
      setFilters({
        priceRange: null,
        inStockOnly: null,
        category: category || '',
        searchQuery: search || '',
      })
    }
  }, [category, search, navigate, location.pathname])

  //sorting
  const [sortBy, setSortBy] = useState('relevance')

  //pagination
  const [currentPage, setCurrentPage] = useState(1)

  //product view mode
  const [viewMode, setViewMode] = useState<ViewMode>(getViewMode)

  const modifiedFilters = {
    minPrice: filters.priceRange && filters.priceRange[0],
    maxPrice: filters.priceRange && filters.priceRange[1],
    stock: filters.inStockOnly && filters.inStockOnly,
    search: filters.searchQuery,
    currentPage,
    category: filters.category,
  }
  const handleViewMode = (mode: ViewMode) => {
    localStorage.setItem('product-view-mode', mode)
    setViewMode(mode)
  }
  //product fetch
  const { data: maxProductPrice, isLoading: allProductsLoading } =
    useProductsMaxPrice()
  const maxPrice = maxProductPrice ?? 0

  const { data, isLoading, isError } = useAllProducts(modifiedFilters)
  const products: ProductFetch[] | undefined = data?.data

  const handleSearchQuery = () => {
    setFilters({ ...filters, searchQuery })
    setCurrentPage(1)
    navigate(
      `${
        category
          ? `/shop?category=${category}?search=${searchQuery}`
          : `/shop?search=${searchQuery}`
      }`,
      {
        replace: true,
      }
    )
  }
  const handleSelectedCategory = (value: string) => {
    setFilters({ ...filters, category: value })
    setCurrentPage(1)
  }
  const handleFilters = (
    priceRange: number[] | null,
    inStockOnly: boolean | null
  ) => {
    setFilters({ ...filters, priceRange, inStockOnly })
    setCurrentPage(1)
  }

  const itemsPerPage = 12
  //fetch filtered products

  const totalPages = products && Math.ceil(products?.length / itemsPerPage)

  // Sort products
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
            {allProductsLoading ? (
              <div className="min-h-[50vh] w-full flex items-center justify-center">
                <Loader2 className="animate-spin" />
              </div>
            ) : (
              <Filters
                setFilters={handleFilters}
                maxPrice={maxPrice}
                disabled={isLoading}
              />
            )}
          </div>
          <div className="my-8 col-span-6">
            <div className="mb-8 space-y-4">
              {/* search bar */}
              <div className="flex flex-row gap-2 items-center">
                <SearchBar
                  onSearch={handleSearchQuery}
                  placeholder="Search products by name..."
                  width="w-full"
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                />

                <FiltersDialog
                  setFilters={handleFilters}
                  maxPrice={maxPrice}
                  disabled={isLoading}
                />
              </div>

              {/* filters */}
              <FiltersDisplay filters={filters} setFilters={setFilters} />

              <CategoriesCarousel
                selectedCategory={filters.category}
                setSelectedCategory={handleSelectedCategory}
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
                  (sortedProducts?.length == 0 ||
                    sortedProducts?.length == undefined) && (
                    <NoResult
                      errorText="products"
                      isError={isError}
                      text="No product found matching your criteria"
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
          </div>
        </div>
      </Container>
    </>
  )
}

export default Shop
