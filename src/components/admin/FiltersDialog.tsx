import { SlidersHorizontal } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'
import { useState } from 'react'
import { Checkbox } from '../ui/checkbox'
import { Label } from '../ui/label'

export type SelectedFilters = {
  searchQuery: string
  status?: string
  category?: string
  subcategory?: string
  collection?: string
}
export type Filters = {
  label: keyof SelectedFilters
  options: string[]
}

interface FiltersDialogProps {
  activeFiltersCount: number
  selectedFilters: SelectedFilters
  filters: Filters[]
  setSelectedFilters: (value: SelectedFilters) => void
  resetFilter: () => void
}

function FiltersDialog({
  activeFiltersCount,
  filters,
  selectedFilters,
  setSelectedFilters,
  resetFilter,
}: FiltersDialogProps) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className="flex items-center justify-center gap-2 px-4 sm:px-6 md:px-10 h-9 border border-gray-300 rounded-md  hover:bg-gray-50 transition-colors relative cursor-pointer">
          <SlidersHorizontal className="w-4 h-4 md:w-5 md:h-5" />
          <span className=" font-medium text-xs md:text-sm">Filters</span>
          {activeFiltersCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {activeFiltersCount}
            </span>
          )}
        </button>
      </DialogTrigger>
      <DialogContent className="bg-white px-2 md:px-4">
        <DialogHeader className="sr-only">
          <DialogTitle>filters</DialogTitle>
          <DialogDescription>orders filtering</DialogDescription>
        </DialogHeader>
        <div>
          {filters
            .filter((filter) => filter.options.length !== 0)
            .map(({ label, options }) => {
              return (
                <div
                  key={label}
                  className="space-y-1.5 border-b last:border-b-0 py-2 md:py-4"
                >
                  <span className="text-xs md:text-sm font-medium  first-letter:uppercase block ">
                    Filter by {label}
                  </span>
                  <div className="space-y-1">
                    {options.map((option) => {
                      return (
                        <div key={option}>
                          <div className="flex items-center space-x-2 md:space-x-3">
                            <Checkbox
                              className="w-3 h-3 md:w-4 md:h-4"
                              checked={option === selectedFilters[label]}
                              onCheckedChange={() =>
                                setSelectedFilters({
                                  ...selectedFilters,
                                  [label]: option,
                                })
                              }
                            />
                            <Label
                              htmlFor={label}
                              className="text-[10px] md:text-sm font-normal first-letter:uppercase block w-max"
                            >
                              {option}
                            </Label>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
        </div>
        <div className="flex items-center gap-2 md:gap-4 justify-end">
          <button
            onClick={resetFilter}
            className="h-9 px-4 sm:px-6 md:px-10 text-xs md:text-sm font-medium flex items-center justify-center shadow-sm hover:shadow-md cursor-pointer rounded-sm"
          >
            Reset
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="h-9 px-4 sm:px-6 md:px-10 text-xs md:text-sm font-medium flex items-center justify-center bg-primary hover:bg-primary/90 cursor-pointer text-white rounded-sm"
          >
            Cancel
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
export default FiltersDialog
