import { useParams } from 'react-router-dom'
import hair from '../assets/images/hair.webp'
import clothing from '../assets/images/clothing.webp'
import accessories from '../assets/images/accessories.webp'
import TextImageHeader from '@/components/headers/TextImageHeader'

function ShopCategory() {
  const { category } = useParams()

  const images: Record<string, string> = {
    clothing: clothing,
    hair: hair,
    accessories: accessories,
  }
  const bgImage = images[category ?? '']
  return (
    <div>
      <TextImageHeader title={category} bgImage={bgImage} />
    </div>
  )
}
export default ShopCategory
