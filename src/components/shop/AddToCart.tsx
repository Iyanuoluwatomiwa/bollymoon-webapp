import { lazy, useRef } from 'react'
import { Button } from '../ui/button'
import { useDispatch } from 'react-redux'
import { addItem, removeItem } from '@/features/cart/cartSlice'
import { AlertCircle, Minus, Plus, XIcon } from 'lucide-react'
import { useProductDialog } from '@/hooks/useProductDialog'
import { sizeGuideSuspense } from '@/components/skeletons/suspense'
import type { CartItem, Product } from '@/types/product.types'
import { useSelector } from 'react-redux'
import { getBoundingClientRectState, productSizesList } from '@/assets/data'
import { MdAddShoppingCart } from 'react-icons/md'
import { LiaCartArrowDownSolid } from 'react-icons/lia'
import { Tooltip, TooltipTrigger } from '../ui/tooltip'
import { TooltipContent } from '@radix-ui/react-tooltip'
import { Link } from 'react-router-dom'
import { currencyFormatter } from '@/utils/format'

const SizeGuideModal = lazy(
  () => import('@/components/sizeGuide/SizeGuideModal')
)
function AddToCart({ product }: { product: Product }) {
  const { id, name, category, stock, images, specs, subcategory } = product
  const {
    isSizeGuideOpen,
    setIsSizeGuideOpen,
    isAddToCartOpen,
    setIsAddToCartOpen,
  } = useProductDialog()
  const addToCartRef = useRef(getBoundingClientRectState)
  const closeAddToCartDialog = (e: React.MouseEvent) => {
    const dialog = addToCartRef.current
    const { top, bottom, right, left } = dialog.getBoundingClientRect()
    const { clientY, clientX } = e
    if (
      clientY < top ||
      clientY > bottom ||
      clientX > right ||
      clientX < left
    ) {
      setIsAddToCartOpen(false)
    }
  }
  const { cartItems }: { cartItems: CartItem[] } = useSelector(
    (state: any) => state.cartState
  )
  const inCart = cartItems.find((item) => item.id === id)
  const hasSize = specs?.some(({ size }) => size !== '')
  const getQuantityFromCart = (color: string, size: string) => {
    const cartItem = cartItems.find(
      (item) => item.id === id && item.color === color && item.size === size
    )
    return cartItem?.quantity
  }
  const dispatch = useDispatch()

  const addItemToCart = (item: CartItem) => {
    dispatch(addItem({ product: item }))
  }

  const removeFromCart = (color: string, size: string) => {
    dispatch(
      removeItem({
        id: inCart?.id,
        size: size,
        color,
        name: inCart?.name,
      })
    )
  }
  const cartItem = {
    image: images[0],
    name: name,
    price: 0,
    color: '',
    size: '',
    quantity: 0,
    id: id,
    category,
    discountPrice: 0,
    originalPrice: 0,
  }
  return (
    <>
      {inCart ? (
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              className="text-white font-medium  rounded-md transition-all duration-200 flex items-center justify-center gap-2 bg-primary cursor-pointer hover:bg-primary/90 w-full text-sm sm:text-base h-10 rounded-sm"
              onClick={() => setIsAddToCartOpen(true)}
            >
              <span>In Cart</span>
              <LiaCartArrowDownSolid className="w-6.5 h-6.5 sm:w-7.5 md:h-7.5" />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <span className="text-xs px-2 py-0.5 bg-muted text-muted-foreground rounded-none border">
              In Cart
            </span>
          </TooltipContent>
        </Tooltip>
      ) : (
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              disabled={stock === 0}
              className="text-white font-medium rounded-md transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-secondary/90 cursor-pointer bg-secondary w-full text-sm sm:text-base h-10 rounded-sm"
              onClick={() => setIsAddToCartOpen(true)}
            >
              <span>Add to Cart</span>
              <MdAddShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </TooltipTrigger>
          <TooltipContent side="top" sideOffset={4}>
            <span className="text-xs px-2 py-0.5 bg-muted text-muted-foreground rounded-none border">
              Add to Cart
            </span>
          </TooltipContent>
        </Tooltip>
      )}
      <div
        className={`${
          isAddToCartOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 '
        }
      } animation duration-150 fixed inset-0  flex items-center justify-center z-40 bg-background/50`}
        onClick={closeAddToCartDialog}
      >
        <div
          className="max-w-[600px] w-[95%] max-h-[70vh] overflow-y-auto space-y-6 p-3 md:p-4 pt-8 border rounded-sm relative z-50 bg-white"
          ref={addToCartRef}
        >
          <div className="flex flex-col gap-2">
            <h2 className="text-lg text-center sm:text-left  font-semibold">
              Select Options
            </h2>
            <section className="pt-4">
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-8 justify-between">
                    {hasSize && (
                      <h3 className="text-xs uppercase font-medium">
                        {category === 'hair' ? 'Length' : 'Size'}
                      </h3>
                    )}
                    {category === 'clothing' && (
                      <button
                        className="font-medium text-secondary text-sm"
                        onClick={() => {
                          setIsSizeGuideOpen(true)
                        }}
                      >
                        Size Guide
                      </button>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {specs?.map(
                      ({ size }) =>
                        size && (
                          <span
                            key={size}
                            className={`rounded-sm text-sm px-3 py-1 border font-medium cursor-pointer`}
                          >
                            {size}
                          </span>
                        )
                    )}
                  </div>
                </div>

                <ul className="flex flex-col gap-4">
                  {specs?.map(
                    ({ size, colors, originalPrice, discountPrice }) => {
                      return colors.map((color) => {
                        const quantityFromCart =
                          getQuantityFromCart(color.color, size) ?? 0
                        const stock = color.quantity
                        return (
                          <li
                            key={color.color}
                            className="grid grid-cols-2 gap-4 place-items-start border-b pb-4 "
                          >
                            <div>
                              <h3 className="capitalize text-base/5">{size}</h3>
                              <span
                                className={` relative capitalize text-sm font-medium`}
                              >
                                {color.color}
                              </span>
                              <div className="flex items-center flex-wrap gap-x-2 ">
                                <span className="text-xs sm:text-[14px] font-semibold text-foreground">
                                  {discountPrice
                                    ? currencyFormatter(discountPrice)
                                    : currencyFormatter(originalPrice)}
                                </span>
                                {discountPrice && (
                                  <span className="text-[10px] sm:text-[12px] text-muted-foreground line-through font-medium italic">
                                    {currencyFormatter(originalPrice)}
                                  </span>
                                )}
                              </div>
                              <div>
                                {color.quantity === 0 ? (
                                  <span className="flex items-center text-destructive text-xs gap-1 mt-0.5">
                                    <AlertCircle className="w-3 h-3" />
                                    <span className="h-3.5">Out of stock</span>
                                  </span>
                                ) : color.quantity <= 3 ? (
                                  <span className="flex items-center text-destructive text-xs gap-1 mt-0.5">
                                    <AlertCircle className="w-3.5 h-3.5" />
                                    <span className="h-3.5">
                                      {color.quantity} unit
                                      {color.quantity > 1 && 's'} left
                                    </span>
                                  </span>
                                ) : color.quantity <= 10 ? (
                                  <span className="flex items-center text-primary text-xs gap-1 ">
                                    Few units left
                                  </span>
                                ) : (
                                  <span className="text-xs text-gray-500 block capitalize">
                                    In stock
                                  </span>
                                )}
                              </div>
                            </div>
                            <div className="flex items-center w-max">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => {
                                  quantityFromCart > 1
                                    ? addItemToCart({
                                        ...cartItem,
                                        color: color.color,
                                        size,
                                        quantity: quantityFromCart - 1,
                                        stock,
                                        price: discountPrice
                                          ? discountPrice
                                          : originalPrice,
                                        discountPrice,
                                        originalPrice,
                                      })
                                    : removeFromCart(color.color, size)
                                }}
                                disabled={quantityFromCart < 1}
                                className="h-8 w-8 p-0 rounded-sm rounded-r-none cursor-pointer disabled:bg-gray-500 bg-primary hover:bg-primary/80 hover:text-white text-white"
                              >
                                <Minus className="w-3 h-3" />
                              </Button>
                              <div className="h-8 w-16 flex items-center justify-center border-x text-sm font-medium">
                                {quantityFromCart}
                              </div>
                              <Button
                                variant="default"
                                size="sm"
                                onClick={() => {
                                  addItemToCart({
                                    ...cartItem,
                                    color: color.color,
                                    size,
                                    quantity: quantityFromCart + 1,
                                    stock,
                                    price: discountPrice
                                      ? discountPrice
                                      : originalPrice,
                                    discountPrice,
                                    originalPrice,
                                  })
                                }}
                                disabled={quantityFromCart == color.quantity}
                                className="h-8 w-8 p-0 rounded-sm rounded-l-none cursor-pointer disabled:bg-muted-foreground bg-primary text-white"
                              >
                                <Plus className="w-3 h-3" />
                              </Button>
                            </div>
                          </li>
                        )
                      })
                    }
                  )}
                </ul>
              </div>
            </section>
            {inCart && (
              <>
                <div className="flex items-center ml-auto gap-2 sm:gap-4 w-max mt-2">
                  <Link to="/checkout" className="ml-auto">
                    <Button
                      variant="secondary"
                      size="lg"
                      className="text-white"
                    >
                      Checkout
                    </Button>
                  </Link>
                  <Link to="/cart" className="ml-auto">
                    <Button size="lg">View Cart</Button>
                  </Link>
                </div>
              </>
            )}
          </div>
          <button
            type="button"
            className="text-muted-foreground absolute top-2 right-2 w-max hover:text-foreground p-1 cursor-pointer rounded-md"
            onClick={() => {
              setIsAddToCartOpen(false)
            }}
          >
            <XIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      {sizeGuideSuspense(
        <>
          {isSizeGuideOpen && (
            <SizeGuideModal
              onClose={() => setIsSizeGuideOpen(false)}
              isSizeGuideOpen={isSizeGuideOpen}
              productCategory={subcategory as keyof typeof productSizesList}
            />
          )}
        </>
      )}
    </>
  )
}
export default AddToCart
