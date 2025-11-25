import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import { ArrowUpDown } from 'lucide-react'

interface SortingProp {
  sortBy: string
  setSortBy: (value: string) => void
  options: {
    label: string
    value: string
  }[]
}

function Sorting({ sortBy, setSortBy, options }: SortingProp) {
  return (
    <div className="flex items-center space-x-2">
      <span className="text-foreground hidden sm:inline-block font-medium text-sm md:text-base">
        Sort by:
      </span>
      <Select value={sortBy} onValueChange={setSortBy}>
        <SelectTrigger size="default" className="text-sm md:text-base">
          <ArrowUpDown className="w-4 h-4" />
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {options.map(({ value, label }, index) => {
            return (
              <SelectItem
                key={index}
                value={value}
                className="text-sm md:text-base"
              >
                {label}
              </SelectItem>
            )
          })}
        </SelectContent>
      </Select>
    </div>
  )
}
export default Sorting
