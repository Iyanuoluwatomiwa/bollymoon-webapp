import { Button } from '../ui/button'
import { Loader2Icon } from 'lucide-react'

interface SubmitButtonProp {
  submitting: boolean
  text: string
  texting: string
  disabled?: boolean
}

function FormSubmitButton({
  submitting,
  text,
  texting,
  disabled,
}: SubmitButtonProp) {
  return (
    <div>
      {submitting ? (
        <button
          disabled
          className="w-full text-xs md:text-sm rounded-md flex items-center justify-center bg-primary text-white  gap-2 font-medium h-9"
        >
          {texting}{' '}
          <Loader2Icon className="animate-spin w-5 h-5 md:w-6 md:h-6 " />
        </button>
      ) : (
        <Button
          type="submit"
          className="w-full text-xs md:text-sm text-white rounded-sm h-9 cursor-pointer"
          disabled={disabled}
        >
          {text}
        </Button>
      )}
    </div>
  )
}
export default FormSubmitButton
