import { TableHead, TableHeader, TableRow } from '@/components/ui/table'

function ProductTableHeader() {
  return (
    <TableHeader className="text-xs md:text-sm px-4">
      <TableRow>
        <TableHead>Product</TableHead>
        <TableHead>Stock</TableHead>
        <TableHead className="hidden sm:table-cell">Category</TableHead>
        <TableHead className="hidden lg:table-cell">Subcategory</TableHead>
        <TableHead className="hidden lg:table-cell">Collection</TableHead>
        <TableHead className="text-right">Actions</TableHead>
      </TableRow>
    </TableHeader>
  )
}
export default ProductTableHeader
