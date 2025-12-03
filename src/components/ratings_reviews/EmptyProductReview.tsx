import { LiaCommentDots } from 'react-icons/lia'

export default function EmptyProductReview() {
  return (
    <div className="text-center space-y-1.5 pb-5 pt-3 md:pt-5">
      <LiaCommentDots className="w-8 h-8 md:w-10 md:h-10 mx-auto opacity-30" />
      <p className="text-xs md:text-sm">
        Customers who have bought this product have not yet posted comments.
      </p>
    </div>
  )
}
