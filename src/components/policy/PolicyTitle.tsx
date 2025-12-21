import { ChevronLeft } from 'lucide-react'
import Container from '../global/Container'
import { useNavigate } from 'react-router-dom'

function PolicyTitle({ title }: { title: string }) {
  const navigate = useNavigate()
  return (
    <Container className="py-6 sm:py-8 md:py-10 bg-accent-foreground text-center relative">
      <ChevronLeft
        className="absolute left-1.5 top-1/2 -translate-y-1/2 text-secondary cursor-pointer hover:text-white w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
        onClick={() => navigate(-1)}
      />
      <h1 className="text-base sm:text-xl md:text-2xl font-bold text-secondary uppercase">
        {title}
      </h1>
    </Container>
  )
}
export default PolicyTitle
