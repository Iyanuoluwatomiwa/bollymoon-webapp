import { aboutUs } from '@/assets/data'

function Features() {
  return (
    <section className="space-y-8 md:space-y-10 ">
      <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold uppercase ">
        What Makes Bollymoon <span className="text-primary">Different?</span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {aboutUs.features.map((feature, index) => (
          <div
            key={feature.title}
            className={`group relative rounded-lg p-4 sm:p-6 md:p-8 cursor-pointer transition-all duration-500 border shadow-sm hover:shadow-md ${
              index === aboutUs.features.length - 1
                ? 'md:col-span-2 lg:col-span-1'
                : ''
            }`}
          >
            <div className="relative sm:w-16 sm:h-16 w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center mb-4 sm:mb-6 group-hover:shadow-glow transition-shadow duration-500">
              <feature.icon className="sm:w-8 sm:h-8 w-6 h-6 text-secondary" />
            </div>
            <h3 className="font-display text-lg sm:text-xl lg:text-lg font-semibold mb-2 group-hover:text-primary transition-all duration-300">
              {feature.title}
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxe">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
export default Features
