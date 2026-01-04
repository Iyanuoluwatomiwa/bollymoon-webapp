import { shopByCategories } from '@/assets/data'
import Container from '../global/Container'

function Categories() {
  return (
    <section id="categories">
      <Container className="py-8 sm:py-10 bg-white">
        <div className="space-y-8 md:space-y-10">
          <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold uppercase">
            Shop by <span className="text-primary">Category</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-2 lg:gap-4 max-w-5xl mx-auto">
            {shopByCategories.map(({ title, image }) => {
              return (
                <div
                  key={title}
                  className=" rounded-sm pb-3 sm:pb-4 space-y-3 sm:space-y-4 group cursor-pointer shadow-sm hover:shadow-md overflow-hidden"
                >
                  <figure className="w-full h-28">
                    <img
                      src={image}
                      alt={title}
                      loading="lazy"
                      className="object-top object-cover object-contain w-full h-full"
                    />
                  </figure>
                  <h3 className="text-center text-xs sm:text-sm group-hover:text-primary font-medium">
                    {title}
                  </h3>
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
export default Categories
