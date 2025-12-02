import { useParams } from 'react-router-dom'
import hair from '../assets/images/hair.webp'
import clothing from '../assets/images/clothing.webp'
import accessories from '../assets/images/accessories.webp'
import TextImageHeader from '@/components/headers/TextImageHeader'
import PageTitle from '@/components/global/PageTitle'
import { productsMock } from '@/database'
import { useState } from 'react'
import type { ProductFilter } from '@/types/product.types'
import AdvancedFilters from '@/components/shop/AdvancedFilters'
import SearchBar from '@/components/global/SearchBar'
import FiltersDialog from '@/components/shop/FiltersDialog'
import FiltersMobileDisplay from '@/components/shop/FiltersMobileDisplay'
import Sorting from '@/components/shop/Sorting'
import { shop, subcategories } from '@/assets/data'
import ViewModeToggle from '@/components/shop/ViewModeToggle'
import ProductsGrid from '@/components/shop/ProductsGrid'
import ProductsList from '@/components/shop/ProductsList'
import CustomPagination from '@/components/shop/CustomPagination'
import Container from '@/components/global/Container'
import CategoriesCarousel from '@/components/shop/CategoriesCarousel'

type ViewMode = 'grid' | 'list'
const getViewMode =
  (localStorage.getItem('product-view-mode') as ViewMode) || 'grid'

function ShopCategory() {
  const { category } = useParams()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [filters, setFilters] = useState<ProductFilter>({
    priceRange: null,
    inStockOnly: null,
    minRating: null,
  })
  const [currentPage, setCurrentPage] = useState(1)
  const [sortBy, setSortBy] = useState('relevance')
  const [viewMode, setViewMode] = useState<ViewMode>(getViewMode)

  const products = productsMock?.filter(
    (product) => product.category === category
  )
  const finalProducts = products?.filter((product) => {
    const matchesCategory =
      selectedCategory == 'all' || product.subcategory == selectedCategory

    return matchesCategory
  })
  const onSearch = (searchQuery: string) => {
    console.log(searchQuery)
  }
  const handleViewMode = (mode: ViewMode) => {
    localStorage.setItem('product-view-mode', mode)
    setViewMode(mode)
  }
  const handlePageChange: (page: number) => void = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const totalPages = 12
  const images: Record<string, string> = {
    clothing: clothing,
    hair: hair,
    accessories: accessories,
  }
  const subcategory: Record<string, { value: string; label: string }[]> = {
    hair: subcategories.hair,
    clothing: subcategories.clothing,
    accessories: subcategories.accessories,
  }
  const bgImage = images[category ?? '']
  const subCategories = subcategory[category ?? '']
  return (
    <>
      <PageTitle title="Clothing" />
      <TextImageHeader title={category} bgImage={bgImage} />
      <Container className="pb-10 pt-4">
        <div className="lg:grid lg:grid-cols-8 gap-4">
          <div className="hidden lg:block col-span-2 border-r border-accent-foreground my-8">
            <AdvancedFilters
              setFilters={setFilters}
              maxPrice={50}
              setCurrentPage={setCurrentPage}
            />
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
              <FiltersMobileDisplay filters={filters} />

              <CategoriesCarousel
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                category={subCategories}
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
                  <ProductsGrid products={finalProducts} />
                ) : (
                  <ProductsList products={finalProducts} />
                )}
              </>
              {/* {sectionSuspense(productView)} */}
              {finalProducts && (
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
export default ShopCategory
