import { faqs } from '@/assets/data'
import Container from '@/components/global/Container'
import PageTitle from '@/components/global/PageTitle'
import PolicyTitle from '@/components/policy/PolicyTitle'
import SubSectionList from '@/components/policy/SubSectionList'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

function FAQs() {
  return (
    <>
      <PageTitle title="FAQs" />
      <PolicyTitle title="FAQs" asWritten />
      <Container className="pb-10 pt-6 md:pt-8">
        <div className="space-y-2 md:space-y-4">
          <div className=" text-sm md:text-base leading-relaxed">
            <p className="italic">
              Bollymoon – Premium Handmade Wigs & Luxury Hair Extensions
            </p>
          </div>

          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            {faqs.map(
              ({ number, trigger, desc1, desc2, desc3, lists, end1, end2 }) => {
                return (
                  <AccordionItem value={`item-${number}`} key={number}>
                    <AccordionTrigger>
                      <div className="flex items-start gap-2 text-base sm:text-xl font-medium ">
                        <span>{number}.</span>
                        <h2>{trigger}</h2>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <section className="space-y-4">
                        {(desc1 || desc2 || desc3) && (
                          <div>
                            <p className="text-sm md:text-base">{desc1}</p>
                            <p className="text-sm md:text-base">{desc2}</p>
                            <p className="text-sm md:text-base">{desc3}</p>
                          </div>
                        )}

                        {lists?.map(({ list, heading }) => (
                          <SubSectionList
                            key={heading}
                            title={heading}
                            list={list}
                          />
                        ))}
                        {(end1 || end2) && (
                          <div>
                            <p className="text-sm md:text-base">{end1}</p>
                            <p className="text-sm md:text-base">{end2}</p>
                          </div>
                        )}
                      </section>
                    </AccordionContent>
                  </AccordionItem>
                )
              }
            )}
          </Accordion>
        </div>
      </Container>
    </>
  )
}
export default FAQs
