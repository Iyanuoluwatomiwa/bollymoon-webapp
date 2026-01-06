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
    <Container className="py-4">
      <header className="flex items-center gap-8">
        <button
          className={`flex items-center gap-1 font-medium text-gray-800 hover:text-secondary cursor-pointer text-sm lg:text-base ${className} `}
          onClick={() => navigate(-1)}
        >
          <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
          {!title && 'Back'}
        </button>
        <span className="text-lg md:text-xl font-bold text-foreground">
          {title}
        </span>
      </header>
    </Container>
  )
}
