import Container from '@/components/global/Container'
import PageTitle from '@/components/global/PageTitle'

export default function AddressBook() {
  return (
    <>
      <PageTitle title="Address Book" />
      <Container className="py-10">
        <div className="space-y-6">
          <h1 className="text-lg md:text-xl font-semibold text-foreground">
            Address Book
          </h1>
          <div className="max-w-2xl mx-auto w-full"></div>
        </div>
      </Container>
    </>
  )
}
