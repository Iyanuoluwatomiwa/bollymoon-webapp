import { lazy, useRef, useState } from 'react'
import type { CartItemType, Product } from '@/utils/types'
import { ImageCarousel } from '../global'
import { currencyFormatter } from '@/utils/format'
import { Label } from '../ui/label'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'
import { useDispatch } from 'react-redux'
import { toast } from 'sonner'
import { addItem } from '@/features/cart/cartSlice'
import { Ban, Minus, Plus, ShoppingCart, XIcon } from 'lucide-react'
import { MdOutlineAddShoppingCart } from 'react-icons/md'
import { useProductDialog } from '@/hooks/useProductDialog'
import { getBoundingClientRectState, type productSizesList } from '@/utils/data'
import { sizeGuideSuspense } from '@/utils/suspense'

interface AddToCartProp {
  product: Product
  numProductInCart: number
}
const SizeGuideModal = lazy(
  () => import('@/components/sizeGuide/SizeGuideModal')
)
function AddToCart({ product, numProductInCart }: AddToCartProp) {
  const {
    isSizeGuideOpen,
    setIsSizeGuideOpen,
    isAddToCartOpen,
    setIsAddToCartOpen,
  } = useProductDialog()
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [quantity, setQuantity] = useState(1)
  const addToCartRef = useRef(getBoundingClientRectState)
  const sizeCheck = product.variants.find((p) => p.size === selectedSize)
  const colorsOfSizeSelected = sizeCheck?.colors.map((p) => p.color)
  const colorCheck = sizeCheck?.colors.find((p) => p.color === selectedColor)
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

  const dispatch = useDispatch()
  const addItemToCart = (item: CartItemType) => {
    if (!item.size) {
      return toast.warning('Please select a size')
    }
    if (!item.color) {
      return toast.warning('Please select a color')
    }

    dispatch(addItem({ product: item }))
    setSelectedColor('')
    setSelectedSize('')
    setQuantity(1)
    setIsAddToCartOpen(false)
  }
  const cartItem = {
    images: product.images,
    name: product.name,
    price: product.price,
    color: selectedColor,
    size: selectedSize,
    availableVariants: product.variants,
    amount: quantity,
    id: product.id,
    vendor: product.vendor,
    vendorid: product.vendorid,
    category: product.category,
  }
  return (
    <>
      <Button
        variant="outline"
        size="sm"
        className="relative"
        disabled={!product.stock}
        onClick={() => setIsAddToCartOpen(true)}
      >
        <span className="sr-only">add to cart</span>
        {numProductInCart >= 1 ? (
          <>
            <ShoppingCart className="w-6 h-6" />
            <p className="absolute -top-2 -right-2 text-xs font-bold bg-primary text-primary-foreground w-5 h-5 rounded-full flex items-center justify-center">
              {numProductInCart}
            </p>
          </>
        ) : (
          <MdOutlineAddShoppingCart className="w-6 h-6" />
        )}
      </Button>
      <div
        className={`${
          isAddToCartOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 '
        }
      } animation duration-150 fixed inset-0  flex items-center justify-center z-40 bg-background/50`}
        onClick={closeAddToCartDialog}
      >
        <div
          className="max-w-[600px] w-[80%] max-h-[80vh] overflow-y-auto space-y-6 bg-background p-6 border rounded-xl relative z-50"
          ref={addToCartRef}
        >
          <div className="flex flex-col gap-2 ">
            <h2 className="text-lg text-center sm:text-left  font-semibold">
              Add Product to Cart
            </h2>
            <section className="pt-4">
              <ImageCarousel carouselItems={product.images} />
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-base font-medium">
                    <span className="text-muted-foreground text-sm">
                      Sold by
                    </span>{' '}
                    {product.vendor}
                  </p>
                  <p className="text-primary text-xl font-medium">
                    {currencyFormatter(product.price)}
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2 w-max">
                    <div className="flex items-center gap-8 justify-between">
                      <Label className="py-2">Size</Label>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        className="h-6 px-2 text-xs"
                        onClick={() => {
                          setIsSizeGuideOpen(true)
                        }}
                      >
                        Check Size Guide
                      </Button>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {product?.variants.map(({ size }) => (
                        <Button
                          key={size}
                          variant={
                            selectedSize === size ? 'default' : 'outline'
                          }
                          size="sm"
                          onClick={() => {
                            setSelectedSize(size)
                            setSelectedColor('')
                          }}
                        >
                          {size}
                        </Button>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Color</Label>
                    <ul className="flex flex-wrap gap-3">
                      {product?.variants.map(({ colors }) => {
                        return colors.map(({ color, quantity }) => {
                          const colorCheck =
                            !colorsOfSizeSelected?.includes(color) ||
                            quantity === 0

                          return (
                            <li key={color}>
                              <Button
                                key={color}
                                variant={
                                  selectedColor === color
                                    ? 'default'
                                    : 'outline'
                                }
                                size="sm"
                                disabled={colorCheck}
                                onClick={() => {
                                  setSelectedColor(color)
                                  setQuantity(1)
                                }}
                                className="relative capitalize"
                              >
                                {color}

                                {quantity === 0 && (
                                  <Ban className="w-4 h-4 absolute -top-2 -right-2 text-destructive font-bold bg-destructive/30 rounded-full " />
                                )}
                              </Button>
                            </li>
                          )
                        })
                      })}
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="quantity">Quantity</Label>
                    <div className="flex items-center border rounded-md w-max">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setQuantity(quantity - 1)}
                        disabled={quantity <= 1}
                        className="h-8 w-8 p-0 rounded-r-none hover:bg-muted"
                      >
                        <Minus className="w-3 h-3" />
                      </Button>
                      <div className="h-8 w-12 flex items-center justify-center border-x text-sm font-medium">
                        {quantity}
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setQuantity(quantity + 1)}
                        disabled={
                          quantity == colorCheck?.quantity ||
                          !selectedColor ||
                          !selectedSize
                        }
                        className="h-8 w-8 p-0 rounded-l-none hover:bg-muted"
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <Separator />
            <Button onClick={() => addItemToCart(cartItem)}>Add to Cart</Button>
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
              productCategory={
                product.category as keyof typeof productSizesList
              }
            />
          )}
        </>
      )}
    </>
  )
}
export default AddToCart
