import { features } from '@/assets/data'
import Container from '../global/Container'

function Features() {
  return (
    <Container className="py-8 sm:py-10 bg-white">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className={`group relative rounded-sm p-2 md:p-3 cursor-pointer transition-all duration-500 border shadow-sm hover:shadow-md flex items-start justify-center gap-3`}
          >
            <div className="relative p-1.5 rounded-sm bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center  group-hover:shadow-glow transition-shadow duration-500">
              <feature.icon className="w-4 h-4 md:w-5 md:h-5 text-secondary" />
            </div>
            <div className="space-y-1">
              <h3 className="font-display text-xs  md:text-xs font-medium group-hover:text-primary transition-all duration-300">
                {feature.title}
              </h3>
              <p className="text-[10px]">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}
export default Features
