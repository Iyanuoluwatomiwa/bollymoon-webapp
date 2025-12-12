import { Skeleton } from '../ui/skeleton'
import { Table, TableBody, TableCell, TableRow } from '../ui/table'

function ProductsTableSkeleton() {
  return (
    <Table className="rounded-sm overflow-hidden bg-white">
      <TableBody>
        {Array(3)
          .fill(null)
          .map((_, index) => {
            return (
              <TableRow key={index} className="h-12 mb-2">
                <TableCell className="w-1/3 sm:1/4 lg:w-1/5">
                  <Skeleton className="bg-background h-6" />
                </TableCell>
                <TableCell className="w-1/3 sm:1/4 lg:w-1/5">
                  <Skeleton className="bg-background h-6" />
                </TableCell>
                <TableCell className="hidden sm:table-cell w-1/3 sm:1/4 lg:w-1/5">
                  <Skeleton className="bg-background h-6" />
                </TableCell>
                <TableCell className="w-1/3 sm:1/4 lg:w-1/5 hidden lg:table-cell ">
                  <Skeleton className="bg-background h-6" />
                </TableCell>
                <TableCell className="w-1/3 sm:1/4 lg:w-1/5 hidden lg:table-cell ">
                  <Skeleton className="bg-background h-6" />
                </TableCell>
                <TableCell className="flex items-center justify-end gap-2 w-full">
                  <Skeleton className="h-6 w-6 bg-background" />
                  <Skeleton className="h-6 w-6 bg-background" />
                  <Skeleton className="h-6 w-6 bg-background" />
                </TableCell>
              </TableRow>
            )
          })}
      </TableBody>
    </Table>
  )
}
export default ProductsTableSkeleton
