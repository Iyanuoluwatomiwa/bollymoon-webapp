import { TableCell, TableRow } from '@/components/ui/table'
import type { ProductFetch } from '@/types/product.types'
import { Edit, Eye } from 'lucide-react'
import DeleteProductDialog from './DeleteProductDialog'
import { Link } from 'react-router-dom'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

interface ProductTableBodyProp {
  filteredProducts: ProductFetch[] | undefined
}

function ProductTableBody({ filteredProducts }: ProductTableBodyProp) {
  return (
    <>
      {filteredProducts?.map((product, index) => {
        return (
          <TableRow key={index}>
            <TableCell>
              <div className="line-clamp-1 max-w-full py-1">{index + 1}</div>
            </TableCell>
            <TableCell>
              <div className="line-clamp-1 max-w-full py-1">{product.name}</div>
            </TableCell>
            <TableCell
              className={`
                  ${
                    product.stock <= 3
                      ? 'text-destructive'
                      : product.stock <= 10
                      ? 'text-warning'
                      : 'text-foreground'
                  }
                `}
            >
              {product.stock}
            </TableCell>
            <TableCell className=" hidden sm:table-cell capitalize">
              <div className="line-clamp-1 max-w-full py-1">
                {product.category == 'hairCare'
                  ? 'Hair Care'
                  : product.category}
              </div>
            </TableCell>
            <TableCell className=" hidden lg:table-cell capitalize">
              <div className="line-clamp-1 max-w-full py-1">
                {product.subcategory}
              </div>
            </TableCell>
            <TableCell className=" hidden lg:table-cell capitalize">
              <div className="line-clamp-1 max-w-full py-1">
                {product.collection.replace(/-/g, ' ')}
              </div>
            </TableCell>
            <TableCell className="text-right w-20">
              <div className="flex flex-wrap justify-end gap-2 ">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link to={`view/${product.id}`}>
                      <Eye className="h-4 w-4" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="top" sideOffset={-4}>
                    View
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link to={`edit/${product.id}`}>
                      <Edit className="h-4 w-4" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="top" sideOffset={-4}>
                    Edit
                  </TooltipContent>
                </Tooltip>

                <DeleteProductDialog product={product} />
              </div>
            </TableCell>
          </TableRow>
        )
      })}
    </>
  )
}
export default ProductTableBody
