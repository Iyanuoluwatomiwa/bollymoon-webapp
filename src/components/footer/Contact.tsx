import type { LucideProps } from 'lucide-react'

interface ContactProp {
  href: string
  text: string
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >
}

function Contact({ href, text, icon }: ContactProp) {
  const IconComponent = icon
  return (
    <div className="flex items-center gap-2">
      <IconComponent className="w-4 h-4 text-accent-foreground" />
      <a
        href={href}
        className="text-primary/70 hover:text-primary text-sm cursor-pointer font-medium"
      >
        {text}
      </a>
    </div>
  )
}
export default Contact
