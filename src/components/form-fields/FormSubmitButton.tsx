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
          <Loader2Icon className="animate-spin w-4 h-4 md:w-5 md:h-5 " />
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
