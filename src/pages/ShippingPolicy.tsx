import { shippingPolicy } from '@/assets/data'
import Container from '@/components/global/Container'
import PageTitle from '@/components/global/PageTitle'
import PolicyTitle from '@/components/policy/PolicyTitle'
import SectionHeading from '@/components/policy/SectionHeading'
import SubSectionList from '@/components/policy/SubSectionList'

function ShippingPolicy() {
  return (
    <>
      <PageTitle title="Shipping Policy" />
      <PolicyTitle title="Shipping Policy" />
      <Container className="pb-10 pt-6 md:pt-8">
        <div className="space-y-6 md:space-y-10">
          <div className="space-y-2 text-sm md:text-base leading-relaxed">
            <p>
              Thank you for shopping with Bollymoon. This Shipping Policy
              explains how our deliveries work, the processing times and what to
              expect once you place an order.
            </p>
          </div>
          <section className="space-y-4">
            <SectionHeading number="1." title="Order Processing Time" />
            <SubSectionList
              title="Ready-Made Products"
              list={shippingPolicy.readyMade}
            />
            <SubSectionList
              title="Handmade / Custom Wigs"
              list={shippingPolicy.custom}
            />
            <p className="text-sm md:text-base">
              Orders are not processed on weekends or UK public holidays.
            </p>
            <p className="text-sm md:text-base">
              If we experience a high volume of orders, processing may take
              slightly longer — but we will keep you updated.
            </p>
          </section>
          <section className="space-y-4">
            <SectionHeading
              number="2."
              title="UK Delivery Options"
              desc="We currently offer UK-wide delivery using trusted and trackable courier services such as:"
            />
            <SubSectionList list={shippingPolicy.couriers} />
            <SubSectionList
              title="Standard Delivery"
              list={shippingPolicy.standard}
            />
            <SubSectionList
              title="Express Delivery"
              list={shippingPolicy.express}
            />
            <p className="text-sm md:text-base">
              Delivery times may vary depending on courier delays or peak
              periods.
            </p>
          </section>
          <section className="space-y-4">
            <SectionHeading
              number="3."
              title="Shipping Costs"
              desc="Shipping costs are calculated at checkout based on: "
            />
            <SubSectionList list={shippingPolicy.shippingCost} />
            <p className="text-sm md:text-base">
              You will see the final shipping fee before confirming your order.
            </p>
          </section>
          <section className="space-y-4">
            <SectionHeading
              number="4."
              title="Tracking Your Order"
              desc="Once your order is dispatched, you will receive an email containing:"
            />
            <SubSectionList list={shippingPolicy.trackingOrder} />

            <p className="text-sm md:text-base">
              Please allow up to 24 hours for your tracking information to
              activate.
            </p>
          </section>
          <section className="space-y-4">
            <SectionHeading
              number="5."
              title="Delivery Address & Missed Deliveries"
              desc="Please ensure your delivery address is correct."
              desc2="Bollymoon is not responsible for:"
            />
            <SubSectionList list={shippingPolicy.deliveryAddress} />

            <p className="text-sm md:text-base">
              If a parcel is returned to us as “undeliverable,” the customer
              will be responsible for re-delivery charges.
            </p>
          </section>

          <section className="space-y-4">
            <SectionHeading
              number="6."
              title="Lost or Delayed Parcels"
              desc="If your parcel is delayed beyond the expected delivery time:"
            />
            <SubSectionList list={shippingPolicy.parcels} />
            <div>
              <p className="text-sm md:text-base">
                A parcel is considered lost only when confirmed by the courier.
              </p>
              <p className="text-sm md:text-base">
                If confirmed lost, we will offer:
              </p>
            </div>

            <ul className="list-outside list-disc pl-6 md:pl-8 text-sm md:text-base">
              <li>A replacement</li>
              or
              <li>A full refund</li>
            </ul>
          </section>
          <section className="space-y-4">
            <SectionHeading
              number="7."
              title="Pre-Orders & Out-of-Stock Items"
              desc="If you order an item on pre-order:"
            />
            <SubSectionList list={shippingPolicy.preOrders} />
          </section>
          <section className="space-y-4">
            <SectionHeading
              number="8."
              title="Damaged Parcels"
              desc="If your parcel arrives damaged:"
            />
            <SubSectionList list={shippingPolicy.damagedParcels} />
          </section>
          <section className="space-y-4">
            <SectionHeading
              number="9."
              title="Contact Us"
              desc="For any shipping questions or concerns, please reach out:"
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
        </div>
      </Container>
    </>
  )
}
export default ShippingPolicy
