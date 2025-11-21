import Hero from '@/components/home/Hero'
import { nullSuspense, sectionSuspense } from '@/utils/suspense'
import { lazy } from 'react'
const CallToAction = lazy(() => import('../components/home/CallToAction'))
const Features = lazy(() => import('../components/home/Features'))
const PageHeading = lazy(() => import('../components/headings/PageHeading'))

const Home = () => {
  return (
    <>
      {nullSuspense(
        <PageHeading pageTitle="Home" pageDesc="Stylinked home page" />
      )}
      <main>
        <Hero />
        {sectionSuspense(<Features />)}
        {sectionSuspense(<CallToAction />)}
      </main>
    </>
  )
}

export default Home
