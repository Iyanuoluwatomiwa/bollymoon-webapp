import { termsConditions } from '@/assets/data'
import Container from '@/components/global/Container'
import PageTitle from '@/components/global/PageTitle'
import PolicyTitle from '@/components/policy/PolicyTitle'
import SectionHeading from '@/components/policy/SectionHeading'
import SubSectionList from '@/components/policy/SubSectionList'

function TermsConditions() {
  return (
    <>
      <PageTitle title="Terms & Conditions Policy" />
      <PolicyTitle title="Terms & Conditions Policy" />
      <Container className="pb-10 pt-6 md:pt-8">
        <div className="space-y-6 md:space-y-10">
          <div className="space-y-2 text-sm md:text-base leading-relaxed">
            <p className="text-sm md:text-base mb-4 font-medium ">
              Last Updated: December 22, 2025
            </p>
            <p>
              Welcome to Bollymoon. These Terms & Conditions govern your access
              to and use of our website, products and services. By using our
              website, you agree to follow these terms.
            </p>
            <p>Please read them carefully.</p>
          </div>
          <section className="space-y-4">
            <SectionHeading
              number="1."
              title="About Us"
              desc="Bollymoon is a UK-based business providing handmade wigs, premium hair bundles and 
closures. "
            />
            <div>
              <h3 className="text-sm md:text-base font-semibold">
                Contact Information:
              </h3>
              <p className="text-sm md:text-base">
                Email: customercare@bollymoon.com
              </p>
              <p className="text-sm md:text-base">Location: United Kingdom</p>
            </div>
          </section>
          <section className="space-y-4">
            <SectionHeading
              number="2."
              title="Use of Our Website"
              desc="By using our website, you agree that:"
            />
            <SubSectionList list={termsConditions.useOfWebsite} />
            <p className="text-sm md:text-base">
              We reserve the right to suspend access to anyone who violates
              these terms.
            </p>
          </section>
          <section className="space-y-4">
            <SectionHeading
              number="3."
              title="Product Information"
              desc="We aim to display accurate product descriptions, photos and details. However:"
            />
            <SubSectionList list={termsConditions.productInformation} />
            <p className="text-sm md:text-base">
              We reserve the right to change or discontinue items at any time.
            </p>
          </section>
          <section className="space-y-4">
            <SectionHeading number="4." title="Pricing & Payment" />
            <SubSectionList list={termsConditions.pricingPayment} />
            <p className="text-sm md:text-base">
              By placing an order, you confirm that:
            </p>
            <SubSectionList list={termsConditions.placingOrder} />
          </section>
          <section className="space-y-4">
            <SectionHeading
              number="5."
              title="Orders & Acceptance"
              desc="When you place an order, you will receive an email confirming your purchase."
              desc2="Your order is only considered accepted once:"
            />
            <SubSectionList list={termsConditions.orderAccepted} />
            <p className="text-sm md:text-base">
              We reserve the right to cancel an order if:
            </p>
            <SubSectionList list={termsConditions.orderCanceled} />
            <p className="text-sm md:text-base">
              If an order is cancelled, you will receive a full refund.
            </p>
          </section>
          <section className="space-y-4">
            <SectionHeading
              number="6."
              title="Delivery"
              desc="We offer UK-wide delivery through trusted courier partners."
            />
            <p className="text-sm md:text-base">
              Delivery times may vary due to:
            </p>
            <SubSectionList list={termsConditions.delivery} />
            <p className="text-sm md:text-base">
              You will receive tracking information once your order is shipped.
            </p>
            <p className="text-sm md:text-base">
              We are not responsible for delays caused by factors outside our
              control.
            </p>
          </section>
          <section className="space-y-4">
            <SectionHeading
              number="7."
              title="Returns & Refunds"
              desc="Our returns and refund rules are detailed in our Refund Policy."
              desc2="By making a purchase from Bollymoon, you agree to those conditions."
            />
            <p className="text-sm md:text-base">Key points:</p>
            <SubSectionList list={termsConditions.returnsRefunds} />
            <p className="text-sm md:text-base">
              For full details, visit our Refund Policy page.
            </p>
          </section>
          <section className="space-y-4">
            <SectionHeading
              number="8."
              title="Cancellations"
              desc="You may cancel your order before it is processed or shipped."
              desc2="Once shipped, the return policy applies."
            />
            <p className="text-sm md:text-base">
              Custom or personalised orders cannot be cancelled once production
              begins.
            </p>
          </section>
          <section className="space-y-4">
            <SectionHeading
              number="9."
              title="Intellectual Property"
              desc="All content on the Bollymoon website is owned by Bollymoon, including:"
            />
            <SubSectionList list={termsConditions.intellectualProperty} />
            <p className="text-sm md:text-base">
              You may not copy, reproduce or distribute any content without
              permission.
            </p>
          </section>
          <section className="space-y-4">
            <SectionHeading
              number="10."
              title="Limitation of Liability"
              desc="Bollymoon is not responsible for:"
            />
            <SubSectionList list={termsConditions.limitations} />
            <p className="text-sm md:text-base">
              To the extent permitted by UK law, we are not liable for indirect,
              incidental or consequential damages.
            </p>
          </section>
          <section className="space-y-4">
            <SectionHeading
              number="11."
              title="User Accounts"
              desc="If you create an account:"
            />
            <SubSectionList list={termsConditions.userAccounts} />
            <p className="text-sm md:text-base">
              We may suspend accounts that violate our policies.
            </p>
          </section>
          <section className="space-y-4">
            <SectionHeading
              number="12."
              title="Marketing & Communication"
              desc="By subscribing to our newsletter, you agree to receive:"
            />
            <SubSectionList list={termsConditions.marketing} />
            <p className="text-sm md:text-base">
              You can unsubscribe at any time by clicking the “unsubscribe” link
              in our emails.
            </p>
          </section>
          <section className="space-y-4">
            <SectionHeading
              number="13."
              title="Governing Law"
              desc="These Terms & Conditions are governed by the laws of England and Wales. 
Any disputes will be handled in UK courts."
            />
          </section>
          <section className="space-y-4">
            <SectionHeading
              number="14."
              title="Changes to These Terms"
              desc="We may update these Terms & Conditions at any time. 
Changes will be posted on this page with a new “Last Updated” date."
            />

            <p className="text-sm md:text-base">
              Continued use of the website means you accept any updates.
            </p>
          </section>
          <section className="space-y-4">
            <SectionHeading
              number="15."
              title="Contact Us"
              desc="If you have any questions about these Terms or need support, please contact us:"
            />
            <div>
              <p className="text-sm md:text-base">
                Email: customercare@bollymoon.com
              </p>
              <p className="text-sm md:text-base">Location: United Kingdom</p>
            </div>
          </section>
        </div>
      </Container>
    </>
  )
}
export default TermsConditions
