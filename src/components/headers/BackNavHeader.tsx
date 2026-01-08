import { useNavigate } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import Container from '../global/Container'

export default function BackNavHeader({
  className,
  title,
}: {
  className?: string
  title?: string
}) {
  const navigate = useNavigate()
  return (
    <Container className={`${title ? 'py-4' : 'py-6'}`}>
      <header className="text-center relative">
        <button
          className={`flex items-center gap-1 font-medium text-gray-800 hover:text-secondary cursor-pointer text-sm lg:text-base absolute left-0 top-1/2 -translate-y-1/2 ${className} `}
          onClick={() => navigate(-1)}
        >
          <ChevronLeft className="w-7 h-7 lg:w-8 lg:h-8" />
          {!title && 'Back'}
        </button>
        <span className="text-lg md:text-xl font-bold text-foreground">
          {title}
        </span>
      </header>
    </Container>
  )
}
