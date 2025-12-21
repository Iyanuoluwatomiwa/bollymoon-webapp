import { Link } from 'react-router-dom'

function Closing() {
  return (
    <div className="relative py-10 bg-gradient-to-r from-primary/20 to-secondary/20 text-center space-y-4 sm:space-y-6">
      <h2 className="font-bold text-3xl sm:text-5xl lg:text-6xl text-primary">
        Bollymoon
      </h2>
      <div className="space-y-2 sm:space-y-2">
        <p className="italic text-xl sm:text-2xl lg:text-3xl font-semibold text-secondary">
          Feel Beautiful.
        </p>
        <p className="italic text-xl sm:text-2xl lg:text-3xl font-semibold text-secondary">
          Look Unstoppable.
        </p>
      </div>
      <Link
        to="/shop"
        className="text-white bg-primary rounded-md px-4 sm:px-6 md:px-10 h-9 flex items-center justify-center text-xs sm:text-sm w-max mx-auto font-medium"
      >
        Shop Now
      </Link>

      <div className="absolute top-1/2 -translate-y-1/2 right-5 sm:right-10 w-32 h-32 border border-primary/30 rounded-full animate-pulse" />
      <div
        className="absolute top-1/3 left-5 sm:left-10 w-20 h-20 border border-secondary/30 rounded-full animate-pulse"
        style={{ animationDelay: '1s' }}
      />
      <div
        className="absolute bottom-5 left-1/4 w-16 h-16 border border-accent/30 rounded-full animate-pulse"
        style={{ animationDelay: '2s' }}
      />
    </div>
  )
}
export default Closing
