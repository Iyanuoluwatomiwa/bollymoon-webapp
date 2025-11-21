import type { IconType } from 'react-icons/lib'

interface SocialLinkProp {
  href: string
  text: string
  icon: IconType
}

function SocialLink({ text, href, icon }: SocialLinkProp) {
  const IconComponent = icon
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 border group hover:bg-primary border-accent-foreground hover:border-primary rounded-full"
    >
      <IconComponent className="w-4 h-4 text-primary group-hover:text-white" />
      <span className="sr-only">{text}</span>
    </a>
  )
}
export default SocialLink
