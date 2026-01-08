import { useSelector } from 'react-redux'
import { checkoutProgress } from '@/assets/data'
import { Check } from 'lucide-react'

function ProgressIndicator() {
  const { step } = useSelector((state: any) => state.checkoutState)

  return (
    <div className="flex items-center justify-evenly   relative z-30">
      {checkoutProgress.map(({ number, name }, index) => {
        return (
          <div key={index} className="relative">
            <div
              className={`w-10 h-10 text-lg md:w-12 md:h-12 md:text-xl rounded-full font-medium flex items-center justify-center text-white relative z-50 ${
                step >= number ? 'bg-primary' : 'bg-gray-400'
              }`}
            >
              {step > number ? (
                <Check strokeWidth={4} className="w-5 h-5 md:w-6 md:h-6" />
              ) : (
                number
              )}
            </div>
            <span className="absolute whitespace-nowrap -translate-x-1/2 left-1/2 -bottom-6 md:-bottom-8 uppercase text-center text-sm md:text-base font-medium">
              {name}
            </span>
          </div>
        )
      })}
      <div
        className={`${
          step > 1 ? 'bg-primary' : 'bg-gray-400'
        } absolute w-[50%] top-1/2 -translate-y-1/2 z-30  h-[2px]`}
      />
    </div>
  )
}
export default ProgressIndicator
