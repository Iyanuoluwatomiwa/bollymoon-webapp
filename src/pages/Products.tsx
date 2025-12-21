import ProductTableBody from '@/components/admin/products/ProductTableBody'
import ProductTableHeader from '@/components/admin/products/ProductTableHeader'
import SearchBar from '@/components/admin/SearchBar'
import Container from '@/components/global/Container'
import AdminPagesHeading from '@/components/headings/AdminPagesHeading'
import { Table, TableBody } from '@/components/ui/table'
import type { Product } from '@/types/product.types'
import { Plus } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import NoProductFound from '@/components/admin/products/NoProductFound'
import { useAllProducts } from '@/hooks/useQueries'
import ProductsTableSkeleton from '@/components/skeletons/ProductsTableSkeleton'
import {
  adminProductsFilters,
  cosmeticsSubcategory,
  hairSubcategory,
} from '@/assets/data'
import FiltersDialog, {
  type Filters,
  type SelectedFilters,
} from '@/components/admin/FiltersDialog'

function Products() {
  const [formData, setFormData] = useState<SelectedFilters>({
    searchQuery: '',
    category: 'all',
    subcategory: 'all',
    collection: 'all',
  })
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }
  const subcategories: Record<string, string[]> = {
    hair: hairSubcategory,
    cosmetics: cosmeticsSubcategory,
  }
  const { data, isError, isLoading } = useAllProducts()
  const products = data?.data

  const subcategoriesOptions = subcategories[formData?.category as string] ?? []
  const subcategory: Filters = {
    label: 'subcategory',
    options: subcategoriesOptions,
  }
  const allFilters = [
    ...adminProductsFilters.slice(0, 1),
    subcategory,
    ...adminProductsFilters.slice(1),
  ]
  const resetFilter = () => {
    setFormData({
      searchQuery: '',
      category: 'all',
      subcategory: 'all',
      collection: 'all',
    })
  }

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

        <div className="space-y-2 md:space-y-4">
          <div className="flex flex-col sm:flex-row justify-between gap-3 md:gap-4  border px-2 py-3 rounded-sm md:px-3 md:py-4 bg-white">
            <div className="w-full sm:max-w-xs">
              <SearchBar
                searchQuery={formData.searchQuery}
                handleInputChange={handleInputChange}
                name="searchQuery"
                placeholder="Search by product name..."
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <FiltersDialog
                activeFiltersCount={activeFiltersCount}
                filters={allFilters}
                selectedFilters={formData}
                setSelectedFilters={setFormData}
                resetFilter={resetFilter}
              />
              <Link
                to="add"
                className=" flex items-center justify-center gap-1 md:gap-2 text-xs md:text-sm bg-primary text-white px-2 sm:px-4  rounded-sm hover:bg-primary/90 font-medium h-9"
              >
                <Plus className="w-4 h-4 md:w-5 md:h-5" /> Add Product
              </Link>
            </div>
          </div>

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
    </Container>
  )
}
export default Products
