import { Filter } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import { states } from '@/utils/data'

interface StateFilterProp {
  selectedState: string
  handleStateChange: (state: string) => void
}

function StateFilter({ selectedState, handleStateChange }: StateFilterProp) {
  return (
    <Select
      value={selectedState}
      onValueChange={(value) => handleStateChange(value)}
    >
      <SelectTrigger className="w-full">
        <Filter className="w-4 h-4 mr-2" />
        <SelectValue placeholder="Select State" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">Any state</SelectItem>
        {states.map(({ value, label }) => (
          <SelectItem key={value} value={value}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
export default StateFilter
