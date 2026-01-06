import Container from './Container'
import image from '../../assets/images/gallery2_1.png'
import { Link } from 'react-router-dom'

function Promotion() {
  return (
    <Container className="py-8 bg-white">
      <div className="grid sm:grid-cols-2 place-items-center gap-y-4 max-w-2xl mx-auto">
        <figure className="w-50 h-60 md:w-54 md:h-64 -ml-8 ">
          <img
            src={image}
            alt="promotion_image"
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </figure>
        <div className="text-center space-y-6  h-full flex flex-col items-center justify-center">
          <p className="uppercase text-2xl/10 md:text-3xl/11 font-normal text-center">
            Enjoy <span className="text-primary">10% discount</span> on <br />{' '}
            your first order
          </p>
          <Link
            to="/shop"
            className="text-white bg-primary font-medium px-8 py-2 text-sm md:tex-base md:py-3 rounded-md"
          >
            Shop now
          </Link>
        </div>
      </div>
    </Container>
  )
}
export default Promotion
