import { Button } from '../ui/button'
import { Loader2Icon } from 'lucide-react'

interface SubmitButtonProp {
  submitting: boolean
  text: string
  texting: string
}

function FormSubmitButton({ submitting, text, texting }: SubmitButtonProp) {
  return (
    <div>
      {submitting ? (
        <button disabled className="w-full text-base lg:text-lg">
          {texting} <Loader2Icon className="animate-spin " />
        </button>
      ) : (
        <Button type="submit" className="w-full text-base lg:text-lg">
          {text}
        </Button>
      )}
    </div>
  )
}
export default FormSubmitButton
