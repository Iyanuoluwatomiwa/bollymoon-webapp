import { collectionsData } from '@/assets/data'
import Container from '@/components/global/Container'
import PageTitle from '@/components/global/PageTitle'
import { ChevronLeft } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'

function CollectionDetails() {
  const { collectionId } = useParams()
  const collection = collectionsData[collectionId as string]
  const Icon = collection.icon
  return (
    <>
      <PageTitle title={collection.title} />
      <header className="relative min-h-[60vh] lg:min-h-[50vh] flex items-center">
        {/* Background Image with Parallax Effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 md:max-w-sm lg:max-w-md ml-auto">
            <img
              src={collection.image}
              alt={collection.title}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/60 to-transparent " />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-transparent to-transparent " />

          {/* Animated Accent Line */}
          <div
            className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${collection.accentColor} origin-left`}
          />
        </div>

        {/* Content */}
        <Container className="pt-6 pb-12 lg:pb-20 relative z-10">
          <div className="">
            {/* Breadcrumb */}
            <nav className="mb-2">
              <Link
                to="/collections"
                className="inline-flex items-center gap-1 text-white hover:text-foreground transition-colors font-medium group"
              >
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm tracking-wider uppercase">
                  All Collections
                </span>
              </Link>
            </nav>

            <div className="max-w-lg">
              {/* Badge */}
              <div className="">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/80 text-accent text-sm font-medium mt-4 mb-8">
                  <Icon className="w-4 h-4 text-accent" />
                  {collection.badge}
                </span>
              </div>

              {/* Title */}
              <div>
                <span className="text-accent-foreground text-xs md:text-sm tracking-[0.3em] uppercase font-medium block mb-2.5">
                  {collection.subtitle}
                </span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5">
                  {collection.title}
                </h1>
              </div>

              {/* Description */}
              <p className="text-accent-foreground text-sm md:text-base max-w-2xl leading-relaxed">
                {collection.description}
              </p>

              {/* Stats Row */}
              {/*  <div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex items-center gap-8 mt-8 pt-8 border-t border-border/30"
            >
              <div>
                <span className="font-display text-3xl font-bold gradient-text">
                  {products.length}
                </span>
                <span className="text-muted-foreground text-sm ml-2">
                  Products
                </span>
              </div>
              <div className="w-px h-8 bg-border/50" />
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-muted-foreground text-sm">
                  4.9 Average Rating
                </span>
              </div>
            </div> */}
            </div>
          </div>
        </Container>
      </header>
    </>
  )
}
export default CollectionDetails
