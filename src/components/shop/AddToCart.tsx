import { useState } from 'react'
import { Button } from '../ui/button'
import { useDispatch } from 'react-redux'
import { addItem, editItem, removeItem } from '@/features/cart/cartSlice'
import { AlertCircle, Minus, Plus, XIcon } from 'lucide-react'
import type {
  CartItem,
  FetchedCartItem,
  ProductFetch,
} from '@/types/product.types'
import { useSelector } from 'react-redux'
import { MdAddShoppingCart } from 'react-icons/md'
import { LiaCartArrowDownSolid } from 'react-icons/lia'
import { Link } from 'react-router-dom'
import { currencyFormatter } from '@/utils/format'
import {
  useAddToCart,
  useCartItems,
  useRemoveFromCart,
  useSingleProduct,
  useUpdateCart,
} from '@/hooks/useQueries'
import LoadingIcon from '../global/LoadingIcon'
import NoResult from '../global/NoResult'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogDescription,
} from '../ui/dialog'
import { DialogTitle } from '@radix-ui/react-dialog'
function AddToCart({ productId }: { productId: string }) {
  const {
    data: singleProduct,
    isLoading,
    isError,
  } = useSingleProduct(productId)
  const product: ProductFetch | undefined = singleProduct?.data
  const [isOpen, setIsOpen] = useState(false)
  const { token }: { token: string | null } = useSelector(
    (state: any) => state.userState
  )

  const {
    data,
    isLoading: cartItemsLoading,
    isError: cartItemsError,
  } = useCartItems()
  const localCartItems = useSelector((state: any) => state.cartState.cartItems)
  const cartItems: CartItem[] | undefined = token
    ? data?.data?.cartItems?.map(
        (item: FetchedCartItem): CartItem => ({
          ...item,
          image: item.image.url,
          id: item.image.productId,
          price: item.discountPrice ?? item.originalPrice,
        })
      )
    : localCartItems

  const cartLoading = token ? cartItemsLoading : false
  const cartError = token ? cartItemsError : false

  const inCart = cartItems?.find((item) => item.id === product?.id)

  const hasSize = product?.specs?.some(
    ({ size }) => size.toLowerCase() !== 'n/a'
  )
  const getQuantityFromCart = (color: string, size: string) => {
    const cartItem = cartItems?.find(
      (item) =>
        item.id === product?.id && item.color === color && item.size === size
    )
    return cartItem?.quantity
  }

  const { mutate: addToCart, isPending } = useAddToCart()
  const { mutate: removeFromCart, isPending: removing } = useRemoveFromCart()
  const { mutate: updateCart, isPending: updating } = useUpdateCart()
  const dispatch = useDispatch()

  const addItemToCart = (item: CartItem) => {
    const data = {
      specId: item.specId,
      colorId: item.colorId,
      productId: item.id,
      quantity: item.quantity,
    }
    if (token) {
      addToCart({ data, name: item.name })
    } else {
      dispatch(addItem({ product: item }))
    }
  }

  const removeItemFromCart = (item: CartItem) => {
    const data = {
      specId: item.specId,
      colorId: item.colorId,
      productId: item.id,
      quantity: item.quantity,
    }
    if (token) {
      removeFromCart({ data, name: item.name })
    } else {
      dispatch(
        removeItem({
          id: item.id,
          size: item.size,
          color: item.color,
          name: item.name,
        })
      )
    }
  }

  const updateCartItem = (item: CartItem) => {
    const data = {
      specId: item.specId,
      colorId: item.colorId,
      productId: item.id,
      quantity: item.quantity,
    }
    if (token) {
      updateCart(data)
    } else {
      dispatch(
        editItem({
          id: item.id,
          size: item.size,
          color: item.color,
          quantity: item.quantity,
        })
      )
    }
  }

  const cartItem = {
    image: product?.images[0].url,
    name: product?.name,
    price: 0,
    color: '',
    size: '',
    quantity: 0,
    id: product?.id,
    category: product?.category,
    discountPrice: 0,
    originalPrice: 0,
  }
  return (
    <>
      {/* trigger */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          {inCart ? (
            <button
              className="text-white font-medium  rounded-md transition-all duration-200 flex items-center justify-center gap-2 bg-primary cursor-pointer hover:bg-primary/90 w-full text-xs sm:text-sm h-8 sm:h-9  rounded-sm"
              onClick={() => setIsOpen(true)}
            >
              <span>In Cart</span>
              <LiaCartArrowDownSolid className="w-6.5 h-6.5 sm:w-7.5 md:h-7.5" />
            </button>
          ) : (
            <button
              disabled={product?.stock === 0}
              className="text-white font-medium rounded-md transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-secondary/90 cursor-pointer bg-secondary w-full text-xs sm:text-sm h-8 sm:h-9  rounded-sm"
              onClick={() => setIsOpen(true)}
            >
              <span>Add to Cart</span>
              <MdAddShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          )}
        </DialogTrigger>
        <DialogContent className="p-0">
          <DialogHeader className="sr-only">
            <DialogTitle>Add to cart</DialogTitle>
            <DialogDescription>add product to cart dialog</DialogDescription>
          </DialogHeader>
          <div className="max-h-[70vh] overflow-y-auto space-y-6 p-3 md:p-4 pt-8 border rounded-sm relative z-50 bg-white">
            {isLoading || cartLoading ? (
              <div className="w-full min-h-[20vh] flex items-center justify-center">
                <LoadingIcon />
              </div>
            ) : (
              <>
                <>
                  <div className="flex flex-col gap-2">
                    {hasSize && (
                      <h2 className="text-lg text-center sm:text-left  font-semibold">
                        Select Options
                      </h2>
                    )}

                    <section className="pt-4">
                      <div className="space-y-6">
                        <div className="">
                          <>
                            {hasSize && (
                              <h3 className="text-xs uppercase font-medium mb-2">
                                {product?.category === 'hair'
                                  ? 'Available Length(s)'
                                  : 'Available Size(s)'}
                              </h3>
                            )}
                          </>
                          <div className="flex flex-wrap gap-2">
                            {product?.specs?.map(
                              ({ size }) =>
                                hasSize && (
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
                          {product?.specs?.map(
                            ({
                              size,
                              colors,
                              originalPrice,
                              discountPrice,
                              id,
                            }) => {
                              return colors.map((color) => {
                                const quantityFromCart =
                                  getQuantityFromCart(color.color, size) ?? 0
                                const stock = color.quantity
                                const cartDetails = {
                                  ...cartItem,
                                  color: color.color,
                                  size,
                                  stock,
                                  price: discountPrice
                                    ? discountPrice
                                    : originalPrice,
                                  discountPrice,
                                  originalPrice,
                                  specId: id,
                                  colorId: color.id,
                                }
                                return (
                                  <li
                                    key={color.color}
                                    className="grid grid-cols-2 gap-4 place-items-start border-b last:border-b-0 pb-4 "
                                  >
                                    <div>
                                      {hasSize && (
                                        <h3 className="capitalize text-base/5">
                                          {size}
                                        </h3>
                                      )}
                                      {color.color.toLowerCase() !== 'n/a' && (
                                        <span
                                          className={` relative capitalize text-sm font-medium`}
                                        >
                                          {color.color}
                                        </span>
                                      )}

                                      <div className="flex items-center flex-wrap gap-x-2 ">
                                        <span className="text-xs sm:text-[14px] font-semibold text-foreground">
                                          {discountPrice !== originalPrice
                                            ? currencyFormatter(discountPrice)
                                            : currencyFormatter(originalPrice)}
                                        </span>
                                        {discountPrice !== originalPrice && (
                                          <span className="text-[10px] sm:text-[12px] text-muted-foreground line-through font-medium italic">
                                            {currencyFormatter(originalPrice)}
                                          </span>
                                        )}
                                      </div>
                                      <div>
                                        {color.quantity === 0 ? (
                                          <span className="flex items-center text-destructive text-xs gap-1 mt-0.5">
                                            <AlertCircle className="w-3 h-3" />
                                            <span className="h-3.5">
                                              Out of stock
                                            </span>
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
                                            ? updateCartItem({
                                                ...cartDetails,
                                                quantity: quantityFromCart - 1,
                                              })
                                            : removeItemFromCart({
                                                ...cartDetails,
                                                quantity: 1,
                                              })
                                        }}
                                        disabled={
                                          quantityFromCart < 1 ||
                                          isPending ||
                                          removing ||
                                          updating
                                        }
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
                                          quantityFromCart == 0
                                            ? addItemToCart({
                                                ...cartDetails,
                                                quantity: 1,
                                              })
                                            : updateCartItem({
                                                ...cartDetails,
                                                quantity: quantityFromCart + 1,
                                              })
                                        }}
                                        disabled={
                                          quantityFromCart == color.quantity ||
                                          isPending ||
                                          removing ||
                                          updating
                                        }
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
                      <div className="border-t -mt-2">
                        <div className="flex items-center  gap-2 sm:gap-4 w-full max-w-sm ml-auto mt-4 ">
                          <Link to="/checkout" className="block w-full">
                            <Button
                              variant="secondary"
                              size="lg"
                              className="text-white w-full"
                            >
                              Checkout
                            </Button>
                          </Link>
                          <Link to="/cart" className="block w-full">
                            <Button size="lg" className="w-full">
                              View Cart
                            </Button>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                  <button
                    type="button"
                    className="text-muted-foreground absolute top-2 right-2 w-max hover:text-foreground p-1 cursor-pointer rounded-md"
                    onClick={() => {
                      setIsOpen(false)
                    }}
                  >
                    <XIcon className="w-5 h-5" />
                  </button>
                </>
                {(isError || cartError) && (
                  <NoResult
                    isError={isError || cartError}
                    errorText={`${
                      isError ? 'product details' : 'cart details'
                    }`}
                  />
                )}
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* <div
        className={`${
          isAddToCartOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 '
        }
      } animation duration-150 fixed inset-0  flex items-center justify-center z-40 bg-background/50`}
        onClick={closeAddToCartDialog}
      ></div> */}
    </>
  )
}
export default AddToCart
