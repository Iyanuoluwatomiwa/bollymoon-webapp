import Container from '@/components/global/Container'
import LoadingIcon from '@/components/global/LoadingIcon'
import NoResult from '@/components/global/NoResult'
import AdminPagesHeading from '@/components/headings/AdminPagesHeading'
import { Button } from '@/components/ui/button'
import { useSingleProduct } from '@/hooks/useQueries'
import type { Variant } from '@/types/product.types'
import { currencyFormatter } from '@/utils/format'
import { Package } from 'lucide-react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function ViewProduct() {
  const { productId } = useParams()
  const { data, isLoading, isError } = useSingleProduct(productId)
  const product = data?.data
  const navigate = useNavigate()
  return (
    <Container className="py-4 lg:py-6">
      <div className="space-y-4 lg:space-y-6">
        <AdminPagesHeading
          pageTitle="Product Details"
          pageDesc="View detailed product information"
        />
        {isLoading ? (
          <div className="h-[75vh] flex items-center justify-center">
            <LoadingIcon />
          </div>
        ) : isError ? (
          <NoResult
            text="Product not found"
            isError={isError}
            errorText="product details"
            icon={Package}
          />
        ) : (
          <div className="space-y-2.5 md:space-y-4">
            <div className="space-y-1.5">
              <h2 className="text-xs md:text-sm font-medium">Product Name</h2>
              <p className="text-xs md:text-sm text-muted-foreground">
                {product?.name}
              </p>
            </div>
            <div className="space-y-1.5">
              <h2 className="text-xs md:text-sm font-medium">Description</h2>
              <p className="text-xs md:text-sm text-muted-foreground">
                {product?.description}
              </p>
            </div>
            <div
              className={`grid grid-cols-2 md:grid-cols-3 gap-x-2 sm:gap-x-4`}
            >
              <div className="space-y-1.5">
                <h2 className="text-xs md:text-sm font-medium">Category</h2>
                <p className="text-xs md:text-sm text-muted-foreground capitalize">
                  {product?.category}
                </p>
              </div>
              <div className="space-y-1.5">
                <h2 className="text-xs md:text-sm font-medium">Subcategory</h2>
                <p className="text-xs md:text-sm text-muted-foreground capitalize">
                  {product?.subcategory}
                </p>
              </div>
              {product?.collection && (
                <div className="space-y-1.5">
                  <h2 className="text-xs md:text-sm font-medium">Collection</h2>
                  <p className="text-xs md:text-sm text-muted-foreground capitalize">
                    {product?.collection}
                  </p>
                </div>
              )}
            </div>
            <div className="space-y-1.5">
              <h2 className="text-xs md:text-sm font-medium">
                Product Variants
              </h2>
              <ul className="flex flex-col gap-4">
                {product?.specs?.map(
                  ({ size, colors, originalPrice, discountPrice }: Variant) => {
                    return colors.map((color) => {
                      return (
                        <li
                          key={color.color}
                          className="grid grid-cols-2 gap-4 place-items-start border-b last:border-b-0 pb-4 text-muted-foreground "
                        >
                          <div>
                            <h3 className="capitalize text-base/5">{size}</h3>
                            <span
                              className={` relative capitalize text-sm font-medium`}
                            >
                              {color.color}
                            </span>
                            <div className="flex items-center flex-wrap gap-x-2 ">
                              <span className="text-xs sm:text-[14px] font-semibold text-muted-foreground">
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
                          </div>
                          <p className="flex items-center gap-2 font-medium">
                            Qty:{' '}
                            <span className="flex items-center justify-center text-sm">
                              {color.quantity}
                            </span>
                          </p>
                        </li>
                      )
                    })
                  }
                )}
              </ul>
            </div>
            <div className="space-y-1.5">
              <h2 className="text-xs md:text-sm font-medium">Product Images</h2>
              <div className="flex items-center justify-center md:justify-start gap-2 md:gap-4 mt-2.5">
                {product?.images?.map((image: string, index: number) => (
                  <figure
                    key={index}
                    className=" w-48 shadow rounded-sm overflow-hidden "
                  >
                    <img
                      src={image}
                      alt={`product_image_${index + 1}`}
                      className="w-full object-cover aspect-square"
                      loading="lazy"
                    />
                  </figure>
                ))}
              </div>
            </div>
            <div className="flex gap-2 justify-between pt-4">
              <Button
                type="button"
                className="h-9 px-10 bg-transparent hover:bg-white text-foreground hover:bg-transparent hover:shadow-sm text-xs md:text-sm"
                onClick={() => navigate(-1)}
              >
                Back
              </Button>
              <Link
                to={`/admin/products/edit/${product?.id}`}
                className="h-9 px-10 text-xs md:text-sm bg-primary hover:bg-primary/90 flex items-center justify-center rounded-md font-medium text-white"
              >
                Edit Product
              </Link>
            </div>
          </div>
        )}
      </div>
    </Container>
  )
}
export default ViewProduct
