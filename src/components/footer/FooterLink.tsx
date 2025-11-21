import { Link } from 'react-router-dom'

interface FooterLinkProp {
  heading: string
  links: {
    label: string
    url: string
  }[]
}

function FooterLink({ heading, links }: FooterLinkProp) {
  return (
    <div>
      <h2 className="font-semibold text-sm mb-4 uppercase text-gray-800">
        {heading}
      </h2>
      <ul>
        {links.map(({ label, url }) => {
          return (
            <li key={label} className="py-1">
              <Link
                to={url}
                className="hover:text-secondary text-sm text-gray-600"
              >
                {label}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default FooterLink
