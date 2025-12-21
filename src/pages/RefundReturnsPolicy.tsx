import { refundReturnsPolicy } from '@/assets/data'
import Container from '@/components/global/Container'
import PageTitle from '@/components/global/PageTitle'
import PolicyTitle from '@/components/policy/PolicyTitle'
import SectionHeading from '@/components/policy/SectionHeading'
import SubSectionList from '@/components/policy/SubSectionList'

function RefundReturnsPolicy() {
  return (
    <>
      <PageTitle title="Refund & Returns Policy" />
      <PolicyTitle title="Refund & Returns Policy" />
      <Container className="pb-10 pt-6 md:pt-8">
        <div className="space-y-6 md:space-y-10">
          <div className="space-y-2 text-sm md:text-base leading-relaxed">
            <p>
              Thank you for shopping with Bollymoon. We want you to be
              completely satisfied with your purchase, so we have created a
              clear and fair refund and returns policy in accordance with UK
              Consumer Rights Law.
            </p>
            <p>Please read the policy carefully before making a purchase.</p>
          </div>
          <section className="space-y-4">
            <SectionHeading
              number="1."
              title="Eligibility for Returns & Refunds"
              desc="Due to hygiene reasons and the nature of hair products, we can only accept returns if the 
following conditions are met:"
            />
            <SubSectionList
              title="You may request a return/refund if:"
              list={refundReturnsPolicy.eligibilityRequest}
            />
            <SubSectionList
              title="We cannot accept returns for:"
              list={refundReturnsPolicy.eligibilityAccept}
            />
          </section>
          <section className="space-y-4">
            <SectionHeading
              number="2."
              title="Faulty or Incorrect Items"
              desc="If you receive a damaged, faulty or incorrect product:"
            />
            <SubSectionList list={refundReturnsPolicy.faultyItems} />
            <div>
              <SubSectionList list={refundReturnsPolicy.faultyItems} />
              <div className="ml-4 -mt-2">
                <SubSectionList list={refundReturnsPolicy.faultyItemsAccept} />
              </div>
            </div>
            <p className="text-sm md:text-base">
              If the item is confirmed faulty, return shipping costs will be
              covered by us.
            </p>
          </section>
          <section className="space-y-4">
            <SectionHeading
              number="3."
              title="How to Request a Return"
              desc="To initiate a return, please contact us at:"
              desc2="customercare@bollymoon.com"
            />
            <p className="text-sm md:text-base">Include:</p>
            <SubSectionList list={refundReturnsPolicy.requestReturn} />
            <p className="text-sm md:text-base">
              Once approved, we will provide you with a return address and
              instructions.
            </p>
          </section>
          <section className="space-y-4">
            <SectionHeading number="4." title="Return Shipping" />
            <SubSectionList list={refundReturnsPolicy.returnShipping} />
          </section>
          <section className="space-y-4">
            <SectionHeading
              number="5."
              title="Inspection & Refund Processing"
              desc="Once we receive your returned item, we will:"
            />
            <SubSectionList list={refundReturnsPolicy.refundProcessing} />
            <SubSectionList
              title="If approved:"
              list={refundReturnsPolicy.refundApproved}
            />
            <SubSectionList
              title="If rejected:"
              list={refundReturnsPolicy.refundRejected}
            />
          </section>
          <section className="space-y-4">
            <SectionHeading
              number="6."
              title="Exchanges"
              desc="We offer exchanges only if:"
            />
            <SubSectionList list={refundReturnsPolicy.exchanges} />
            <p className="text-sm md:text-base">
              Any price difference will be charged or refunded accordingly.
            </p>
          </section>
          <section className="space-y-4">
            <SectionHeading
              number="7."
              title="Cancellation Policy"
              desc="You may cancel an order before it is processed or shipped."
              desc2="Once shipped, the return rules above will apply."
            />

            <p className="text-sm md:text-base">
              Custom or personalised orders cannot be cancelled once production
              has started.
            </p>
          </section>
          <section className="space-y-4">
            <SectionHeading
              number="8."
              title="Non-Returnable Items (For Hygiene and Safety)"
              desc="To protect our customers, the following items cannot be returned:"
            />
            <SubSectionList list={refundReturnsPolicy.nonReturnableItems} />
          </section>
          <section className="space-y-4">
            <SectionHeading
              number="9."
              title="Our Commitment"
              desc="We aim to provide high-quality products and a smooth shopping experience. 
If you have any concerns about your order, please contact us we’re always happy to help."
            />
          </section>
          <section className="space-y-4">
            <SectionHeading number="10." title="Contact Us" />
            <div>
              <h3 className="text-sm md:text-base font-semibold">
                Bollymoon Customer Care
              </h3>
              <p className="text-sm md:text-base">
                Email: customercare@bollymoon.com
              </p>
              <p className="text-sm md:text-base">Location: United Kingdom</p>
            </div>
          </section>
        </div>
        <div></div>
      </Container>
    </>
  )
}
export default RefundReturnsPolicy
