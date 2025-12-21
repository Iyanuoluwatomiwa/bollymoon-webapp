import { privacyPolicy } from '@/assets/data'
import Container from '@/components/global/Container'
import PageTitle from '@/components/global/PageTitle'
import PolicyTitle from '@/components/policy/PolicyTitle'
import SectionHeading from '@/components/policy/SectionHeading'
import SubSectionList from '@/components/policy/SubSectionList'

function PrivacyPolicy() {
  return (
    <>
      <PageTitle title="Privacy Policy" />
      <PolicyTitle title="Privacy Policy" />
      <Container className="pb-10 pt-6 md:pt-8">
        <div className="space-y-6 md:space-y-10">
          <div className="space-y-2 text-sm md:text-base leading-relaxed">
            <p className="text-sm md:text-base mb-4 font-medium ">
              Last Updated: December 22, 2025
            </p>
            <p>
              At Bollymoon, your privacy matters to us. We are committed to
              protecting your personal information and ensuring that your data
              is handled safely, securely and in line with the UK General Data
              Protection Regulation (UK GDPR).
            </p>
            <p>
              This Privacy Policy explains what information we collect, how we
              use it, and the rights you have regarding your personal data.
            </p>
          </div>
          <section className="space-y-4">
            <SectionHeading
              number="1."
              title="Information We Collect"
              desc="We may collect the following information when you use our website
              or make a purchase:"
            />
            <SubSectionList
              title="Personal Information"
              list={privacyPolicy.personalInformation}
            />
            <SubSectionList
              title="Order Information"
              list={privacyPolicy.orderInformation}
            />
            <SubSectionList
              title="Payment Information"
              list={privacyPolicy.paymentInformation}
            />
            <SubSectionList
              title="Website & Usage Data"
              list={privacyPolicy.websiteUsageData}
            />
          </section>
          <section className="space-y-4">
            <SectionHeading
              number="2."
              title="How We Use Your Information"
              desc="We use your data to:"
            />
            <SubSectionList list={privacyPolicy.useInformation} />
          </section>
          <section className="space-y-4">
            <SectionHeading
              number="3."
              title="How We Share Your Information"
              desc="Your information is only shared with trusted third parties when necessary, including:"
            />
            <SubSectionList list={privacyPolicy.shareInformation} />
            <p className="text-sm md:text-base">
              We never sell or rent your personal data to third parties.
            </p>
          </section>
          <section className="space-y-4">
            <SectionHeading
              number="4."
              title="Data Protection & Security"
              desc="We take data protection very seriously."
              desc2="Your information is stored securely and protected against:"
            />
            <SubSectionList list={privacyPolicy.dataProtection} />
            <p className="text-sm md:text-base">
              We regularly review our data practices to keep your information
              safe at all times.
            </p>
          </section>
          <section className="space-y-4">
            <SectionHeading
              number="5."
              title="Cookies"
              desc="Our website uses cookies to enhance your browsing experience. Cookies help us:"
            />
            <SubSectionList list={privacyPolicy.cookies} />
            <p className="text-sm md:text-base">
              You can disable cookies at any time through your browser settings.
            </p>
          </section>
          <section className="space-y-4">
            <SectionHeading
              number="6."
              title="Your Rights Under UK GDPR"
              desc="You have the right to:"
            />
            <SubSectionList list={privacyPolicy.rights} />
            <p className="text-sm md:text-base">
              To exercise any of these rights, please contact us at: <br />
              customercare@bollymoon.com
            </p>
          </section>
          <section className="space-y-4">
            <SectionHeading
              number="7."
              title="Contact Us"
              desc="If you have questions about this Privacy Policy or wish to make a data request, please contact our 
team:"
            />
            <div>
              <h3 className="text-sm md:text-base font-semibold">
                Bollymoon Customer Support
              </h3>
              <p className="text-sm md:text-base">
                Email: customercare@bollymoon.com
              </p>
              <p className="text-sm md:text-base">Location: United Kingdom</p>
            </div>
          </section>
          <section className="space-y-4">
            <SectionHeading
              number="8."
              title=" Updates to This Policy"
              desc="We may update this Privacy Policy occasionally. Any changes will be posted on this page with a 
revised “Last Updated” date. "
            />
          </section>
        </div>
      </Container>
    </>
  )
}
export default PrivacyPolicy
