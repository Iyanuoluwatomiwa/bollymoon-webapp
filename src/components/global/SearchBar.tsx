import { Search } from 'lucide-react'
import { Input } from '../ui/input'
import { useState } from 'react'

interface SearchBarProp {
  placeholder: string
  onSearch: (searchQuery: string) => void
  width?: string
}
function SearchBar({ onSearch, placeholder, width }: SearchBarProp) {
  const [searchQuery, setSearchQuery] = useState('')
  const handleSearch = (searchQuery: string) => {
    onSearch(searchQuery)
  }
  return (
    <div className={`relative ${width} `}>
      <Input
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="px-8 text-sm outline-none focus-visible:outline-none  w-full rounded-full bg-white h-10 
          placeholder:text-sm"
        type="search"
        name="search"
        id="search"
      />
      <button
        className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 bg-primary/80 hover:bg-primary rounded-full cursor-pointer"
        onClick={() => handleSearch(searchQuery)}
      >
        <Search className="text-white w-4 h-4 " />
      </button>
    </div>
  )
}
export default SearchBar
