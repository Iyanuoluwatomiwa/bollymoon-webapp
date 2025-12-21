import Closing from '@/components/about/Closing'
import Features from '@/components/about/Features'
import Gallery from '@/components/about/Gallery'
import Promise from '@/components/about/Promise'
import Story from '@/components/about/Story'
import Container from '@/components/global/Container'
import Hero from '../components/about/Hero'
import PageTitle from '@/components/global/PageTitle'

function About() {
  return (
    <>
      <PageTitle title="About" />
      <Hero />
      <Container className="py-10">
        <div className="space-y-10">
          <Story />
          <Features />
          <Promise />
          <Gallery />
        </div>
      </Container>
      <Closing />
    </>
  )
}
export default About
