import { LiaCommentDots } from 'react-icons/lia'

export default function EmptyProductReview() {
  return (
    <div className="text-center space-y-1.5 pb-5 pt-1">
      <LiaCommentDots className="w-8 h-8 mx-auto opacity-30" />
      <p className="text-xs">
        Customers who have bought this product have not yet posted comments.
      </p>
    </div>
  )
}
