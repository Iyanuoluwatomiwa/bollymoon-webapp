import ProductTableBody from '@/components/admin/products/ProductTableBody'
import ProductTableHeader from '@/components/admin/products/ProductTableHeader'
import SearchBar from '@/components/admin/SearchBar'
import Container from '@/components/global/Container'
import AdminPagesHeading from '@/components/headings/AdminPagesHeading'
import { Table, TableBody } from '@/components/ui/table'
import type { Product } from '@/types/product.types'
import { ChevronDown, Filter, Plus } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import NoProductFound from '@/components/admin/products/NoProductFound'
import { useAllProducts } from '@/hooks/useQueries'
import ProductsTableSkeleton from '@/components/skeletons/ProductsTableSkeleton'
import { productsFilters } from '@/assets/data'
import FormSelect from '@/components/form-fields/FormSelect'

function Products() {
  const [formData, setFormData] = useState({
    searchQuery: '',
    category: '',
    subcategory: '',
    collection: '',
  })
  const [showFilters, setShowFilters] = useState(false)
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }
  const subcategories: Record<string, { value: string; label: string }[]> = {
    hair: productsFilters.subcategories.hair,
    cosmetics: productsFilters.subcategories.cosmetics,
  }
  const { data, isError, isLoading } = useAllProducts()
  const products = data?.data

  const filteredProducts = products?.filter((product: Product) => {
    const matchesSearch =
      !formData.searchQuery ||
      product.name.toLowerCase().includes(formData.searchQuery.toLowerCase())

    const matchesCategory =
      !formData.category ||
      formData.category === 'all' ||
      product.category === formData.category

    const matchesSubcategory =
      !formData.subcategory ||
      formData.subcategory === 'all' ||
      product.subcategory === formData.subcategory

    const matchesCollection =
      !formData.collection ||
      formData.collection === 'all' ||
      product.collection === formData.collection

    return (
      matchesSearch &&
      matchesCategory &&
      matchesSubcategory &&
      matchesCollection
    )
  })
  const activeFiltersCount = [
    formData.category,
    formData.subcategory,
    formData.collection,
  ].filter((value) => value && value !== 'all').length

  return (
    <Container className="py-4 lg:py-6">
      <div className="space-y-4 lg:space-y-6">
        <AdminPagesHeading
          pageTitle="Products"
          pageDesc="Manage your products here. Add, edit, or delete items from inventory."
        />

        <div className="rounded-sm space-y-2 md:space-y-4">
          <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-4 border px-2 py-3 rounded-sm md:px-3 md:py-4 bg-white">
            <div className="w-full sm:max-w-xs">
              <SearchBar
                searchQuery={formData.searchQuery}
                handleInputChange={handleInputChange}
                name="searchQuery"
                placeholder="Search by product name..."
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center justify-center gap-2 px-2 sm:px-4 h-9 border border-gray-300 rounded-md  w-full hover:bg-gray-50 transition-colors relative cursor-pointer"
              >
                <Filter className="w-4 h-4 md:w-5 md:h-5" />
                <span className=" font-medium text-xs md:text-sm">Filters</span>
                {activeFiltersCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {activeFiltersCount}
                  </span>
                )}
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    showFilters ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <Link
                to="add"
                className=" flex items-center justify-center gap-1 md:gap-2 text-xs md:text-sm bg-primary text-white px-2 sm:px-4  rounded-sm hover:bg-primary/90 font-medium h-9"
              >
                <Plus className="w-4 h-4 md:w-5 md:h-5" /> Add Product
              </Link>
            </div>
          </div>
          <div className="">
            {showFilters && (
              <div
                className={`grid grid-cols-1 md:grid-cols-3 gap-x-2  sm:gap-x-4 gap-y-2 px-2 py-3 rounded-sm md:px-0 md:py-2`}
              >
                <FormSelect
                  name="category"
                  label="Category"
                  labelSize="md:text-[14px] text-[12px]"
                  value={formData.category}
                  handleInputChange={handleInputChange}
                  selectItems={productsFilters.categories}
                  required
                  placeholder="Filter by category"
                />
                <FormSelect
                  name="subcategory"
                  label="Subcategory"
                  labelSize="md:text-[14px] text-[12px]"
                  value={formData.subcategory}
                  handleInputChange={handleInputChange}
                  selectItems={subcategories[formData.category]}
                  disabled={!formData.category || formData.category === 'all'}
                  required
                  placeholder="Filter by subcategory"
                />
                <FormSelect
                  name="collection"
                  label="Collection"
                  labelSize="md:text-[14px] text-[12px]"
                  value={formData.collection}
                  handleInputChange={handleInputChange}
                  selectItems={productsFilters.collections}
                  placeholder="Filter by collection"
                />
              </div>
            )}

            <div className="rounded-sm border bg-white">
              {isLoading ? (
                <ProductsTableSkeleton />
              ) : filteredProducts?.length !== 0 &&
                filteredProducts !== undefined ? (
                <Table className=" rounded-sm">
                  <ProductTableHeader />
                  <TableBody className="text-xs md:text-sm font-medium">
                    <ProductTableBody filteredProducts={filteredProducts} />
                  </TableBody>
                </Table>
              ) : (
                <NoProductFound
                  searchQuery={formData.searchQuery}
                  products={products}
                  isError={isError}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
export default Products
