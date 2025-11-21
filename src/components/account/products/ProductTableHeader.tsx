import { TableHead, TableHeader, TableRow } from '@/components/ui/table'

function ProductTableHeader() {
  return (
    <TableHeader className="text-xs">
      <TableRow>
        <TableHead>Product</TableHead>
        <TableHead>Price</TableHead>
        <TableHead className="hidden sm:table-cell">Stock</TableHead>
        <TableHead className="hidden lg:table-cell">Status</TableHead>
        <TableHead className="hidden sm:table-cell">Category</TableHead>
        <TableHead className="hidden lg:table-cell">Brand</TableHead>
        <TableHead className="text-right">Actions</TableHead>
      </TableRow>
    </TableHeader>
  )
}
export default ProductTableHeader
