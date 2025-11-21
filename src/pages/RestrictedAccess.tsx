import { Button } from '../components/ui/button'
import { Link } from 'react-router-dom'
import { PageHeading } from '@/components/headings'
import accessDenied from '../assets/images/access-denied.svg'

function RestrictedAccess() {
  return (
    <main className="grid min-h-[100vh] place-items-center px-8">
      <PageHeading
        pageTitle="Access Restricted"
        pageDesc="Sorry, you don't have the necessary authorization to view this page."
      />
      <div className="text-center my-10">
        <figure className="w-1/3 mx-auto">
          <img src={accessDenied} alt="access denied" />
        </figure>
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl flex gap-2 items-center justify-center mt-4">
          Access Denied
        </h1>
        <p className="mt-6 text-lg leading-7 text-muted-foreground">
          Sorry, you don't have the necessary authorization to view this page.
        </p>
        <Button asChild className="mt-10">
          <Link to="/" className="uppercase">
            go back home
          </Link>
        </Button>
      </div>
    </main>
  )
}
export default RestrictedAccess
