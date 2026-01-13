import { Button } from '@/components/ui/button'
import { Link, useRouteError } from 'react-router-dom'
import pageNotFound from '../assets/images/page-not-found.svg'
import PageTitle from '@/components/global/PageTitle'

function Error() {
  const error: any = useRouteError()

  return (
    <>
      {error?.status === 404 ? (
        <main className="grid min-h-[100vh] place-items-center px-8">
          <PageTitle title="Page Not Found" />

          <div className="text-center my-10">
            <figure className="w-1/3 mx-auto">
              <img src={pageNotFound} alt="404" />
            </figure>
            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
              Page not found
            </h1>
            <p className="mt-6 text-lg leading-7">
              Sorry, we couldn't find the page you're looking for.
            </p>
            <Button asChild className="mt-10">
              <Link to="/" className="uppercase">
                go back home
              </Link>
            </Button>
          </div>
        </main>
      ) : (
        <main className="grid min-h-[100vh] place-items-center px-8">
          <PageTitle title={error?.statusText} />

          <div className="text-center my-10">
            <figure className="w-1/3 mx-auto">
              <img src={error?.statusText} alt={error?.status} />
            </figure>
            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
              {error?.statusText}
            </h1>

            <Button asChild className="mt-10">
              <Link to="/" className="uppercase">
                go back home
              </Link>
            </Button>
          </div>
        </main>
      )}
    </>
  )
}
export default Error
