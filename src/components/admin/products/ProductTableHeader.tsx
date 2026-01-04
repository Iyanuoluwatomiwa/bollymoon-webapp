import { TableHead, TableHeader, TableRow } from '@/components/ui/table'

function ProductTableHeader() {
  return (
    <TableHeader className="text-xs md:text-sm px-4 ">
      <TableRow>
        <TableHead className="font-semibold">S/N</TableHead>
        <TableHead className="font-semibold">Product</TableHead>
        <TableHead className="font-semibold">Stock</TableHead>
        <TableHead className="hidden sm:table-cell font-semibold">
          Category
        </TableHead>
        <TableHead className="hidden lg:table-cell font-semibold">
          Subcategory
        </TableHead>
        <TableHead className="hidden lg:table-cell font-semibold">
          Collection
        </TableHead>
        <TableHead className="text-right font-semibold">Actions</TableHead>
      </TableRow>
    </TableHeader>
  )
}
export default ProductTableHeader
