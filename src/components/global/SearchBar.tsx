import { Search } from 'lucide-react'
import { Input } from '../ui/input'

interface SearchBarProp {
  placeholder: string
  onSearch: () => void
  width?: string
  searchQuery: string | undefined
  setSearchQuery: (value: string) => void
}
function SearchBar({
  onSearch,
  placeholder,
  width,
  searchQuery,
  setSearchQuery,
}: SearchBarProp) {
  return (
    <div className={`relative ${width} `}>
      <Input
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="pr-8 pl-3 md:pl-5 text-sm outline-none focus-visible:outline-none  w-full rounded-full bg-white h-8 lg:h-10 
          placeholder:text-sm"
        type="search"
        name="search"
        id="search"
      />
      <button
        className="absolute right-1.5 top-1/2 -translate-y-1/2 lg:p-1.5 p-1 bg-primary/80 hover:bg-primary rounded-full cursor-pointer"
        onClick={onSearch}
      >
        <Search className="text-white w-4 h-4 " />
      </button>
    </div>
  )
}
export default SearchBar
