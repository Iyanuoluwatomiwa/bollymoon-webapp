import { collections } from '@/assets/data'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function CollectionGrid() {
  return (
    <section className="space-y-8 sm:space-y-10 lg:space-y-6">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center uppercase">
        curated for <span className="text-primary">you</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-6    ">
        {collections.map((collection, index) => {
          const Icon = collection.icon
          // Create varied grid spans for bento-style layout
          const gridSpans = [
            'lg:col-span-6 lg:row-span-2',
            'lg:col-span-6',
            'lg:col-span-6',
            'lg:col-span-6',
          ]
          const heights = [
            'min-h-[500px] lg:min-h-[600px]',
            'min-h-[280px]',
            'min-h-[280px]',
            'min-h-[320px]',
          ]

          return (
            <div
              key={collection.id}
              className={`group relative overflow-hidden rounded-md cursor-pointer ${gridSpans[index]} ${heights[index]}`}
            >
              <Link
                to={`/collections/${collection.id}`}
                className="block h-full"
              >
                <div className="absolute inset-0">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="absolute top-4 left-4 z-20">
                  <span className="inline-flex items-center gap-2 rounded-full text-sm font-medium text-accent bg-secondary/80 px-3 py-1.5">
                    <Icon className="w-4 h-4 text-primary " />
                    {collection.badge}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4  z-10">
                  <div className="space-y-3">
                    <span className=" text-sm tracking-wider uppercase font-medium text-primary">
                      {collection.subtitle}
                    </span>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                      {collection.title}
                    </h3>
                    <p className="text-muted/80 max-w-md text-xs  lg:text-sm leading-relaxed opacity-0 group-hover:opacity-100 duration-500 transform translate-y-4 group-hover:translate-y-0">
                      {collection.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary font-medium w-max ml-auto mt-5">
                      <span className="text-sm lg:text-base">Shop Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-500" />
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </section>
  )
}
export default CollectionGrid
