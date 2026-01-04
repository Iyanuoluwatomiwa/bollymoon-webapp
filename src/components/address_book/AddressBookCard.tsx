import { Edit2, Loader2Icon, Trash2 } from 'lucide-react'
import AddressForm from '../forms/AddressForm'
import { useState } from 'react'
import {
  useDeleteDeliveryAddress,
  useUpdateDeliveryAddress,
} from '@/hooks/useQueries'
import type { DeliveryAddress } from '@/types/orders.types'

export default function AddressBookCard({
  addressLine,
  city,
  state,
  country,
  postalCode,
  phone,
  notes,
  id,
}: DeliveryAddress) {
  const [showEditForm, setShowEditForm] = useState(false)
  const details = {
    addressLine,
    city,
    state,
    country,
    postalCode,
    phone,
    notes,
  }
  const { mutate: updateAddress, isPending: updating } =
    useUpdateDeliveryAddress()

  const { mutate: deleteAddress, isPending: deleting } =
    useDeleteDeliveryAddress()
  const handleUpdateDeliveryAddress = (details: DeliveryAddress) => {
    updateAddress({ id, details })
  }

  return (
    <div className="space-y-2 md:space-y-4">
      <div className="p-2 md:p-4 rounded-sm shadow-sm bg-white text-xs md:text-sm flex gap-4 justify-between">
        <div className="space-y-0.5 flex-1">
          <p>{addressLine}</p>
          <p>
            {city}, <span className="uppercase">{state}</span>
          </p>
          <p>{postalCode}</p>
          <p>{country}</p>
          <p>+44 {phone}</p>
        </div>
        <div className="flex flex-col justify-between  ">
          <button
            className="p-2 text-destructive hover:bg-destructive/10 rounded-full cursor-pointer"
            onClick={() => deleteAddress(id)}
            disabled={deleting}
          >
            {deleting ? (
              <Loader2Icon className="w-4 h-4 md:w-5 md:h-5 animate-spin" />
            ) : (
              <Trash2 className="w-4 h-4 md:w-5 md:h-5 " />
            )}

            <span className="sr-only">delete address</span>
          </button>
          <button
            onClick={() => setShowEditForm(!showEditForm)}
            className={`p-2 transition  rounded-full cursor-pointer ${
              showEditForm
                ? 'bg-primary text-white'
                : 'text-muted-foreground hover:text-primary hover:bg-primary/10 bg-muted'
            }`}
          >
            <Edit2 className="w-4 h-4 md:w-5 md:h-5 " />
            <span className="sr-only">edit address</span>
          </button>
        </div>
      </div>
      {showEditForm && (
        <AddressForm
          details={details}
          onSubmit={handleUpdateDeliveryAddress}
          submitting={updating}
        />
      )}
    </div>
  )
}
