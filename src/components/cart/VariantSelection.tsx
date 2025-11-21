import { lazy, useRef, useState } from 'react'
import { ImageCarousel } from '../global'
import { Label } from '../ui/label'
import { Button } from '../ui/button'
import { Ban, Edit3, Minus, Plus } from 'lucide-react'
import type { CartItemType, ColorQuantity, Variant } from '@/utils/types'
import { useDispatch } from 'react-redux'
import { addItem, editItem } from '@/features/cart/cartSlice'
import { useProductDialog } from '@/hooks/useProductDialog'
import { getBoundingClientRectState, type productSizesList } from '@/utils/data'
import { sizeGuideSuspense } from '@/utils/suspense'

interface VariantSelectionProp {
  cartItem: CartItemType
}

const SizeGuideModal = lazy(
  () => import('@/components/sizeGuide/SizeGuideModal')
)
function VariantSelection({ cartItem }: VariantSelectionProp) {
  const [editQuantity, setEditQuantity] = useState(cartItem.amount)
  const [editSize, setEditSize] = useState(cartItem.size)
  const [editColor, setEditColor] = useState(cartItem.color)
  const {
    isSizeGuideOpen,
    isVariantSelectionOpen,
    setIsVariantSelectionOpen,
    setIsSizeGuideOpen,
  } = useProductDialog()
  const variantSelectionRef = useRef(getBoundingClientRectState)
  const dispatch = useDispatch()
  const sizeCheck = cartItem.availableVariants?.find(
    (p: Variant) => p.size === editSize
  )
  const colorsOfSizeSelected = sizeCheck?.colors.map(
    (p: ColorQuantity) => p.color
  )
  const colorCheck = sizeCheck?.colors.find(
    (p: ColorQuantity) => p.color === editColor
  )
  const product: CartItemType = {
    ...cartItem,
    size: editSize,
    color: editColor,
    amount: editQuantity,
  }
  const closeVariantSelectionDialog = (e: React.MouseEvent) => {
    const dialog = variantSelectionRef.current
    const { top, bottom, right, left } = dialog.getBoundingClientRect()
    const { clientY, clientX } = e
    if (
      clientY < top ||
      clientY > bottom ||
      clientX > right ||
      clientX < left
    ) {
      setIsVariantSelectionOpen(false)
    }
  }
  const updateCartItem = () => {
    dispatch(
      editItem({
        id: cartItem.id,
        size: cartItem.size,
        color: cartItem.color,
        amount: editQuantity,
      })
    )
    setIsVariantSelectionOpen(false)
  }
  const addToCart = () => {
    dispatch(
      addItem({
        product,
      })
    )
    setIsVariantSelectionOpen(false)
  }
  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        className=" text-sm text-muted-foreground hover:text-primary hover:bg-primary/20 font-medium"
        onClick={() => setIsVariantSelectionOpen(true)}
      >
        <Edit3 className="w-3 h-3 mr-1" />
        Edit
      </Button>
      <div
        className={` ${
          isVariantSelectionOpen
            ? 'scale-100 opacity-100'
            : 'scale-50 opacity-0 invisible'
        }
      } animation duration-150 inset-0 fixed flex items-center justify-center z-40 bg-background/50`}
        onClick={closeVariantSelectionDialog}
      >
        <div
          className="max-w-[600px] w-[80%] max-h-[80vh] overflow-y-auto space-y-6 bg-background p-6 border rounded-xl relative md:translate-x-[23.5px]"
          ref={variantSelectionRef}
        >
          <section className="space-y-4 pt-4">
            <ImageCarousel carouselItems={cartItem.images} />
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">{cartItem.name}</h3>
              <p className="text-sm text-muted-foreground">
                Sold by {cartItem.vendor}
              </p>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-6">
                  <Label className="text-sm font-medium">Size</Label>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="h-6 px-2 text-xs"
                    onClick={() => setIsSizeGuideOpen(true)}
                  >
                    Check Size Guide
                  </Button>
                </div>

                <div className="flex flex-wrap gap-2 mt-3">
                  {cartItem.availableVariants?.map(
                    ({ size }: { size: string }) => (
                      <Button
                        key={size}
                        variant={editSize === size ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => {
                          setEditSize(size)
                          setEditColor('')
                        }}
                      >
                        {size}
                      </Button>
                    )
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">Color</Label>
                <div className="flex flex-wrap gap-2">
                  {cartItem.availableVariants?.map(
                    ({ colors }: { colors: ColorQuantity[] }) =>
                      colors.map(({ color, quantity }) => {
                        const colorCheck =
                          !colorsOfSizeSelected?.includes(color) ||
                          quantity === 0
                        return (
                          <Button
                            key={color}
                            variant={
                              editColor === color ? 'default' : 'outline'
                            }
                            size="sm"
                            disabled={colorCheck}
                            onClick={() => {
                              setEditColor(color)
                              setEditQuantity(1)
                            }}
                            className="relative capitalize"
                          >
                            {color}
                            {quantity === 0 && (
                              <Ban className="w-4 h-4 absolute -top-2 -right-2 text-destructive font-bold bg-destructive/30 rounded-full" />
                            )}
                          </Button>
                        )
                      })
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">Quantity</Label>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      setEditQuantity(Math.max(1, editQuantity - 1))
                    }
                    className="h-8 w-8 p-0"
                  >
                    <Minus className="w-3 h-3" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-20 text-center h-8"
                  >
                    {editQuantity}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setEditQuantity(editQuantity + 1)}
                    disabled={editQuantity == colorCheck?.quantity}
                    className="h-8 w-8 p-0"
                  >
                    <Plus className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex gap-2 pt-4">
              <Button
                onClick={updateCartItem}
                className="flex-1"
                disabled={
                  editSize !== cartItem.size || editColor !== cartItem.color
                }
              >
                Update Item
              </Button>
              {(editSize !== cartItem.size || editColor !== cartItem.color) && (
                <Button
                  onClick={addToCart}
                  variant="outline"
                  className="flex-1"
                >
                  Add as New
                </Button>
              )}
            </div>
          </section>
        </div>
      </div>
      {sizeGuideSuspense(
        <>
          {isSizeGuideOpen && (
            <SizeGuideModal
              onClose={() => setIsSizeGuideOpen(false)}
              isSizeGuideOpen={isSizeGuideOpen}
              productCategory={
                cartItem.category as keyof typeof productSizesList
              }
            />
          )}
        </>
      )}
    </>
  )
}
export default VariantSelection
