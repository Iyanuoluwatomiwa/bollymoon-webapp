import type { IconType } from 'react-icons/lib'

interface SocialLinkProp {
  href: string
  text: string
  icon: IconType
}

function SocialLink({ text, href, icon }: SocialLinkProp) {
  const IconComponent = icon
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group">
      <IconComponent className="w-5 h-5 text-primary group-hover:text-accent-foreground" />
      <span className="sr-only">{text}</span>
    </a>
  )
}
export default SocialLink
