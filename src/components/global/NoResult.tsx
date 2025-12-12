import { AlertTriangle } from 'lucide-react'
import { Button } from '../ui/button'

interface NoResultProp {
  text: string
  icon: any
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
            <AlertTriangle className="h-10 w-10  md:w-12 md:h-12 mx-auto opacity-50 text-primary" />
          </div>
          <p className="text-sm md:text-base font-medium">
            Unable to load {errorText}.
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
          <div className="bg-primary/20 rounded-full p-4 mx-auto w-max">
            <Icon className="h-10 w-10  md:w-14 md:h-14 mx-auto opacity-50 text-primary" />
          </div>
          <p className="text-sm md:text-base font-medium">{text}</p>
        </div>
      )}
    </>
  )
}
export default NoResult
