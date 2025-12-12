import { Search } from 'lucide-react'
import { Input } from '../ui/input'

interface SearchBarProps {
  searchQuery: string
  placeholder: string
  handleInputChange: (key: string, value: any) => void
  name: string
}

function SearchBar({
  searchQuery,
  handleInputChange,
  name,
  placeholder,
}: SearchBarProps) {
  return (
    <div className="relative w-full">
      <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
      <Input
        id={name}
        name={name}
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => handleInputChange(name, e.target.value)}
        className="pl-8 text-xs sm:text-sm placeholder:font-normal font-normal h-9 rounded-sm"
        type="search"
      />
    </div>
  )
}
export default SearchBar
