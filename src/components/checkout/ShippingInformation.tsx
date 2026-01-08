import { Plus, Truck } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {
  handleDeliveryOption,
  handleStepChange,
} from '@/features/checkout/checkoutSlice'
import { useAllDeliveryAddresses } from '@/hooks/useQueries'
import type { DeliveryAddress } from '@/types/orders.types'
import LoadingIcon from '../global/LoadingIcon'
import NoResult from '../global/NoResult'
import ShippingAddressCard from './ShippingAddressCard'
import { Link } from 'react-router-dom'
import { deliveryOptions } from '@/assets/data'
import { Checkbox } from '../ui/checkbox'

function ShippingInformation() {
  const {
    deliveryOption,
    shippingForm,
  }: { deliveryOption: 'standard' | 'express'; shippingForm: DeliveryAddress } =
    useSelector((state: any) => state.checkoutState)
  const dispatch = useDispatch()
  const { data, isLoading, isError } = useAllDeliveryAddresses()
  const changeStep = () => {
    dispatch(handleStepChange({ step: 2 }))
  }
  const selectDeliveryOption = (option: 'standard' | 'express') => {
    dispatch(handleDeliveryOption({ option }))
  }

  const savedAddressess: DeliveryAddress[] | undefined = data?.data
  return (
    <Card className="rounded-sm bg-white gap-4">
      <CardHeader className="px-2 md:px-6">
        <CardTitle className="flex items-center space-x-2">
          <Truck className="w-5 h-5" />
          <span>Shipping Information</span>
        </CardTitle>
      </CardHeader>
      <CardContent className=" px-2 md:px-6 space-y-2 md:space-y-4">
        {isLoading ? (
          <div className="h-64 flex items-center justify-center">
            <LoadingIcon />
          </div>
        ) : (
          <>
            <div className="space-y-2 md:space-y-4">
              <div className="space-y-2 md:space-y-4">
                <h2 className="text-xs md:text-sm font-medium bg-gray-50 py-2.5 text-foreground px-2">
                  Delivery Options
                </h2>
                <div className="space-y-2">
                  {deliveryOptions.map(({ name, value, desc }) => {
                    return (
                      <div key={value} className="flex items-start gap-3">
                        <Checkbox
                          checked={deliveryOption == value}
                          className="rounded-full w-4 h-4 cursor-pointer mt-0.5"
                          onCheckedChange={() => selectDeliveryOption(value)}
                        />{' '}
                        <div className="text-xs md:text-sm space-y-0.5 ">
                          <span
                            className={`transition block ${
                              value == deliveryOption
                                ? 'font-medium text-primary'
                                : 'font-normal'
                            }`}
                          >
                            {name}
                          </span>
                          <p className="text-muted-foreground">{desc}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="space-y-2 md:space-y-4">
                <h2 className="text-xs md:text-sm font-medium bg-gray-50 py-2.5 text-foreground px-2">
                  Delivery Addresses
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-x-2 md:gap-y-4">
                  {savedAddressess?.map((address, index) => (
                    <ShippingAddressCard key={index} {...address} />
                  ))}
                </div>
                {(savedAddressess?.length == 0 ||
                  savedAddressess?.length == undefined) && (
                  <NoResult
                    text="No saved address. Please, add an address."
                    icon={Truck}
                    isError={isError}
                    errorText="your saved addresses"
                  />
                )}

                {!isError && (
                  <div className="w-max mx-auto">
                    <Link to="/address-book">
                      <button className="text-white bg-primary hover:bg-primary/90 font-medium w-full rounded-sm text-xs text-sm h-9 cursor-pointer flex items-center gap-2 mx-auto px-4">
                        <Plus className="w-4 h-4 md:w-5 md:h-5" /> Add address
                      </button>
                    </Link>
                  </div>
                )}
              </div>
              {savedAddressess?.length !== 0 &&
                savedAddressess?.length !== undefined &&
                shippingForm.id && (
                  <button
                    onClick={changeStep}
                    className="text-white bg-primary hover:bg-primary/90 font-medium w-full rounded-sm text-xs text-sm h-9 cursor-pointer mt-6"
                  >
                    Continue
                  </button>
                )}
            </div>
          </>
        )}
      </CardContent>
    </Card>
  )
  /*   */
}
export default ShippingInformation
