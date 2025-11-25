import { Grid3x3, List } from 'lucide-react'

interface ViewModeToggleProp {
  viewMode: string
  handleViewMode: (mode: 'grid' | 'list') => void
}

function ViewModeToggle({ viewMode, handleViewMode }: ViewModeToggleProp) {
  return (
    <div className="flex items-center gap-4">
      <button onClick={() => handleViewMode('grid')}>
        <Grid3x3
          className={`w-7 h-7 text-background cursor-pointer ${
            viewMode === 'grid'
              ? ' fill-primary hover:fill-primary'
              : 'fill-muted-foreground hover:fill-primary/50'
          }`}
        />
      </button>
      <button onClick={() => handleViewMode('list')}>
        <List
          className={`w-7 h-7 cursor-pointer ${
            viewMode === 'list'
              ? 'text-primary hover:text-primary'
              : 'text-muted-foreground hover:text-primary/50'
          }`}
        />
      </button>
    </div>
  )
}
export default ViewModeToggle
