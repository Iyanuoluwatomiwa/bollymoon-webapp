import { Check } from 'lucide-react'

interface PaymentMethodCardProps {
  selected: boolean
  onSelect: () => void
  icon: React.ReactNode
  title: string
}

export const PaymentMethodCard = ({
  selected,
  onSelect,
  icon,
  title,
}: PaymentMethodCardProps) => {
  return (
    <button
      onClick={onSelect}
      className="
        relative w-full flex items gap-4 justify-between transition-all duration-300
      "
    >
      {/* Selection indicator */}
      <div className="flex items-center gap-4">
        <div
          className="
            flex shrink-0 items-center justify-center  transition-colors
          "
        >
          {icon}
        </div>

        <h3 className="flex-1 text-xs md:text-sm font-medim text-foreground">
          {title}
        </h3>
      </div>
      <div
        className={`
           flex  items-center justify-center rounded-full transition-all duration-300 border-1 h-4 w-4
          ${
            selected
              ? 'bg-primary text-white border-primary'
              : '  border-muted-foreground/30 opacity-50'
          }
        `}
      >
        {selected && <Check className="h-3 w-3" strokeWidth={4} />}
      </div>
    </button>
  )
}
