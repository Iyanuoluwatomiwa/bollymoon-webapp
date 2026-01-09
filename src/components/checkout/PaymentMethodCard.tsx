interface PaymentMethodCardProps {
  icon: React.ReactNode
  title: string
}

export const PaymentMethodCard = ({ icon, title }: PaymentMethodCardProps) => {
  return (
    <button
      className="
        relative w-full flex items-center gap-4 justify-between transition-all duration-300
      "
    >
      <h3 className="text-xs md:text-sm font-medim text-foreground">{title}</h3>
      <div
        className="
            flex shrink-0 items-center transition-colors
          "
      >
        {icon}
      </div>
    </button>
  )
}
