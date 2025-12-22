import { footer } from '@/assets/data'
import heroBg from '../../assets/images/contact_bg.jpg'
import Container from '../global/Container'
function Hero() {
  return (
    <div>
      <div className="relative min-h-[38vh] md:min-h-[50vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-right md:bg-left bg-cover bg-no-repeat "
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <Container className="hidden lg:block">
          <div className="relative min-h-[38vh] md:min-h-[50vh]">
            <div className="absolute top-0 left-0 h-full flex flex-col justify-center items-center bg-secondary text-center pt-10 pb-14 px-14 space-y-6 text-white">
              <h1 className=" font-bold text-2xl sm:text-3xl uppercase  tracking-wider border-b border-white w-max mx-auto pb-6">
                contact us
              </h1>
              <div className="space-y-3">
                <p className="text-xs">Follow us on social media</p>
                <div className="flex items-center gap-4 justify-center">
                  {footer.socials.map(({ href, icon, text }) => {
                    const IconComponent = icon
                    return (
                      <a href={href} className="bg-primary p-1">
                        <IconComponent className="w-3 h-3 text-white" />
                        <span className="sr-only">{text}</span>
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-secondary text-center pt-12 pb-16 space-y-6 text-white lg:hidden">
        <h1 className=" font-bold text-2xl sm:text-3xl uppercase  tracking-wider border-b border-white w-max mx-auto pb-6">
          contact us
        </h1>
        <div className="space-y-3">
          <p className="text-xs">Follow us on social media</p>
          <div className="flex items-center gap-4 justify-center">
            {footer.socials.map(({ href, icon, text }) => {
              const IconComponent = icon
              return (
                <a href={href} className="bg-primary p-1">
                  <IconComponent className="w-3 h-3 text-white" />
                  <span className="sr-only">{text}</span>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Hero
