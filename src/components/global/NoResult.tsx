import { CloudAlert } from 'lucide-react'
import { Button } from '../ui/button'

interface NoResultProp {
  text?: string
  icon?: any
  isError: boolean
  errorText: string
}

function NoResult({ text, icon, isError, errorText }: NoResultProp) {
  const Icon = icon
  return (
    <>
      {isError ? (
        <div className="text-center py-8 space-y-4">
          <div className="bg-primary/20 rounded-full p-4 mx-auto w-max">
            <CloudAlert className="h-10 w-10  md:w-16 md:h-16 mx-auto opacity-50 text-primary" />
          </div>
          <p className="text-sm md:text-base font-semibold text-muted-foreground text-center">
            There was an issue loading {errorText}.
          </p>
          <Button
            className="h-9 text-xs md:text-sm"
            onClick={() => window.location.reload()}
          >
            Reload Page
          </Button>
        </div>
      ) : (
        <div className="text-center space-y-3 text-muted-foreground my-8 mx-auto py-8">
          <div className=" rounded-full p-4 md:p-6 bg-primary/20 mx-auto w-max">
            <Icon className="h-10 w-10  md:w-16 md:h-16 mx-auto opacity-50 text-primary" />
          </div>
          <p className="text-sm md:text-base font-semibold text-center">
            {text}
          </p>
        </div>
      )}
    </>
  )
}
export default NoResult
