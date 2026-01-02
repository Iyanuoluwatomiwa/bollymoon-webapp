import { Star } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { useSelector } from 'react-redux'
import type { UserProfile } from '@/types/user.types'
import FormTextArea from '../form-fields/FormTextArea'
import type { ProductFetch } from '@/types/product.types'
import { Link } from 'react-router-dom'
import FormSubmitButton from '../form-fields/FormSubmitButton'
import FormInput from '../form-fields/FormInput'

function ReviewForm({ product }: { product: ProductFetch | undefined }) {
  const { userProfile }: { userProfile: UserProfile } = useSelector(
    (state: any) => state.userState
  )
  const [formData, setFormData] = useState({
    rating: 0,
    comment: '',
    name: `${userProfile?.firstName} ${userProfile?.lastName}`,
  })
  const [submitting, setSubmitting] = useState(false)

  const handleReviewChange = (field: string, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-4 md:space-y-6 ">
        <h2 className="text-xs md:text-sm uppercase">
          how would you rate this product?
        </h2>
        <div className="flex items-center gap-2 md:gap-4 items-start shadow-sm hover:shadow-md rounded-sm overflow-hidden bg-white">
          <figure className="w-20 md:w-32 relative">
            <img
              src={product?.images[0].url}
              alt={product?.name}
              className="aspect-square w-full h-full object-cover"
              loading="lazy"
            />
          </figure>
          <div className="flex-1 space-y-4 md:space-y-6 py-2">
            {/* Product name, size, and color */}
            <Link
              to={`/shop/${product?.category}/${product?.id}`}
              className="group block"
            >
              <h2 className="font-medium text-sm md:text-base group-hover:text-primary transition-colors line-clamp-2">
                {product?.name}
              </h2>
            </Link>
          </div>
        </div>
        <div className="gap-3 flex flex-col items-center justify-center">
          <p className="text-xs md:text-sm font-medium text-muted-foreground">
            Tap the stars to choose
          </p>
          <div className="flex items-center space-x-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-6 h-6 md:w-8 md:h-8 cursor-pointer ${
                  star <= formData.rating
                    ? 'fill-yellow-500 text-yellow-500'
                    : 'text-muted-foreground/50'
                }`}
                onClick={() => handleReviewChange('rating', star)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4 md:space-y-6">
        <h2 className="text-xs md:text-sm uppercase">
          what did you think of it?
        </h2>{' '}
        <div className="space-y-3">
          <p className="text-xs md:text-sm font-medium">Write a Review</p>
          <FormTextArea
            name="comment"
            value={formData.comment}
            handleInputChange={handleReviewChange}
            rows={8}
            className="h-14 min-h-6 rounded-sm placeholder:text-xs md:text-sm px-2 py-2 text-xs md:text-sm"
            required
          />
        </div>
        <div className="space-y-3">
          <p className="text-xs md:text-sm font-medium">Your name</p>
          <FormInput
            name="name"
            type="text"
            value={formData.name}
            handleInputChange={handleReviewChange}
            required
            className="rounded-sm"
          />
        </div>
      </div>

      <FormSubmitButton
        submitting={submitting}
        text="Submit Review"
        texting="Submitting"
        disabled={
          formData.comment == '' || formData.name == '' || formData.rating == 0
        }
      />
    </form>
  )
}
export default ReviewForm
