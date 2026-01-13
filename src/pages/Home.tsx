import PageTitle from '@/components/global/PageTitle'
import Categories from '@/components/home/Categories'
import Features from '@/components/home/Features'
import HeroCarousel from '@/components/home/HeroCarousel'
import BestSellers from '@/components/home/BestSellers'
import OtherCollections from '@/components/home/OtherCollections'
import Promotion from '@/components/global/Promotion'
import LazyLoad from 'react-lazyload'

function Home() {
  return (
    <>
      <PageTitle title="Home" />
      <HeroCarousel />
      <LazyLoad>
        <Categories />
        <BestSellers />
        <Promotion />
        <OtherCollections />
        <Features />
      </LazyLoad>
    </>
  )
}

export default Home
