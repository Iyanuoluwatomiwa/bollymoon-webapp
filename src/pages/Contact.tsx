import Hero from '@/components/contact/Hero'
import ContactUsForm from '@/components/forms/ContactUsForm'
import Container from '@/components/global/Container'
import PageTitle from '@/components/global/PageTitle'

function Contact() {
  return (
    <>
      <PageTitle title="Contact" />
      <Hero />
      <Container className="py-10">
        <div className="space-y-6">
          <div className="space-y-2.5">
            <h2 className="uppercase font-bold text-2xl md:text-3xl text-center text-secondary">
              get in <span className="text-primary">touch</span>
            </h2>
            <p className="text-center text-sm md:text-base text-muted-foreground max-w-md mx-auto">
              Whether you have questions about our handmade wigs, need help
              choosing the perfect style, or want to discuss a custom order,
              we're here to help you every step of the way.
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="space-y-1">
              <h3 className="text-sm md:text-base font-medium">Email:</h3>
              <p className="text-xs md:text-sm text-primary font-medium">
                customercare@bollymoon.com
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-sm md:text-base font-medium">Phone:</h3>
              <p className="text-xs md:text-sm text-primary font-medium">
                +44 7542794858
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-sm md:text-base font-medium">Location:</h3>
              <p className="text-xs md:text-sm text-primary font-medium">
                The United Kingdom
              </p>
            </div>
          </div>
          <div className="max-w-lg mx-auto space-y-4 border shadow-sm px-4 md:px-6 pt-3 pb-6 rounded-md">
            <h3 className="text-sm md:text-base font-medium text-center">
              Send Us a Message
            </h3>
            <ContactUsForm />
          </div>
        </div>
      </Container>
    </>
  )
}
export default Contact
