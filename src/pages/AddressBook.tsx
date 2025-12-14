import AddressBookCard from '@/components/address_book/AddressBookCard'
import AddressForm from '@/components/forms/AddressForm'
import Container from '@/components/global/Container'
import NoResult from '@/components/global/NoResult'
import PageTitle from '@/components/global/PageTitle'
import AddressCardSkeleton from '@/components/skeletons/AddressCardSkeleton'

import {
  useAllDeliveryAddresses,
  useSaveDeliveryAddress,
} from '@/hooks/useQueries'
import type { DeliveryAddress } from '@/types/orders.types'
import { Minus, Plus, Truck } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

export default function AddressBook() {
  const [showAddressForm, setShowAddressForm] = useState(false)
  const { data, isLoading, isError } = useAllDeliveryAddresses()
  const addresses = data?.data
  const {
    mutate: saveAddress,
    isPending: saving,
    isSuccess,
  } = useSaveDeliveryAddress()
  const handleSaveDeliveryAddress = async (details: DeliveryAddress) => {
    saveAddress(details, {
      onSuccess: () => {
        toast.success('Address saved successfully!')
      },
      onError: () => {
        toast.error('Error saving address. Try again.')
        return
      },
    })
  }
  return (
    <>
      <PageTitle title="Address Book" />
      <Container className="py-10">
        <div className="space-y-6">
          <h1 className="text-lg md:text-xl font-semibold text-foreground">
            Address Book
          </h1>
          <div className="max-w-2xl mx-auto w-full space-y-2 md:space-y-4">
            <button
              onClick={() => setShowAddressForm(!showAddressForm)}
              className=" flex items-center text-xs md:text-sm h-9 px-2 md:px-4 text-white w-full gap-4 justify-between font-medium bg-primary cursor-pointer hover:bg-primary/90"
              disabled={isLoading || isError}
            >
              Add New Delivery Address
              <div className="w-max relative ">
                <Plus
                  className={`w-4 h-4 md:w-5 md:h-5  transition-all ${
                    showAddressForm
                      ? 'scale-0 -rotate-90'
                      : 'scale-100 rotate-0'
                  }`}
                />
                <Minus
                  className={`w-4 h-4 md:w-5 md:h-5 top-0 transition-all absolute ${
                    showAddressForm ? 'scale-100 rotate-0' : 'scale-0 rotate-90'
                  }`}
                />
              </div>
            </button>
            {showAddressForm && (
              <AddressForm
                onSubmit={handleSaveDeliveryAddress}
                isSuccess={isSuccess}
                submitting={saving}
              />
            )}
            {isLoading ? (
              <AddressCardSkeleton />
            ) : (
              <>
                {addresses?.map((address: DeliveryAddress) => (
                  <AddressBookCard key={address?.id} {...address} />
                ))}
                {(addresses?.length == 0 || addresses?.length == undefined) && (
                  <NoResult
                    isError={isError}
                    text="No delivery address saved"
                    errorText="your saved addresses"
                    icon={Truck}
                  />
                )}
              </>
            )}
          </div>
        </div>
      </Container>
    </>
  )
}
