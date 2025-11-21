import { Info } from 'lucide-react'
import { Badge } from '../ui/badge'

interface CategorySpecificSizesProps {
  categoryTitle: string | null | undefined
  sizes:
    | {
        value: string
        label: string
      }[]
    | null
    | undefined
}

function CategorySpecificSizes({
  categoryTitle,
  sizes,
}: CategorySpecificSizesProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Info className="h-4 w-4" />
        Available sizes for {categoryTitle && categoryTitle.toLowerCase()}
      </div>
      <div className="grid grid-cols-4 gap-2">
        {sizes?.map((size) => (
          <Badge
            key={size.value}
            variant="outline"
            className="justify-center py-2 w-full"
          >
            {size.label}
          </Badge>
        ))}
      </div>
    </div>
  )
}
export default CategorySpecificSizes
