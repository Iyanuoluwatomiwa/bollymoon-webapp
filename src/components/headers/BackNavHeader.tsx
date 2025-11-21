import { useNavigate } from 'react-router-dom'
import { Container } from '../global'
import { ChevronLeft } from 'lucide-react'

export default function BackNavHeader() {
  const navigate = useNavigate()
  return (
    <Container className="py-4">
      <header>
        <button
          className="flex items-center gap-1 font-medium text-gray-800 hover:text-secondary "
          onClick={() => navigate(-1)}
        >
          <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
          Back
        </button>
      </header>
    </Container>
  )
}
