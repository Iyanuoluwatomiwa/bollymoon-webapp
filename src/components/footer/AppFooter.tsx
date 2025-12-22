import Logo from '../global/Logo'

import { footer } from '@/assets/data'
import Contact from './Contact'
import SocialLink from './SocialLink'
import FooterLink from './FooterLink'
import Container from '../global/Container'

function AppFooter() {
  return (
    <Container className="bg-footer pt-12 pb-6">
      <footer>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="space-y-4 border-b border-accent lg:border-b-0 pb-8 lg:col-span-2">
            <div className="space-y-1">
              <Logo size="h-[50px]" />
              <p className="text-xs text-accent-foreground font-medium">
                Where beauty meets confidence
              </p>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                {footer.contacts.map((contact) => (
                  <Contact key={contact.text} {...contact} />
                ))}
              </div>
              <div className="flex items-center gap-6 ">
                {footer.socials.map((social) => (
                  <SocialLink key={social.text} {...social} />
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 lg:col-span-3">
            {footer.footerLinks.map((linksGroup) => (
              <FooterLink key={linksGroup.heading} {...linksGroup} />
            ))}
          </div>
        </div>
        <div className="border-t mt-8 pt-4 text-center text-background">
          <p>
            &copy; 2025{' '}
            <span className="font-semibold text-primary">Bollymoon</span>. All
            rights reserved.
          </p>
        </div>
      </footer>
    </Container>
  )
}
export default AppFooter
