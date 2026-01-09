import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { useUpdateOrder } from '@/hooks/useQueries'
import { useState } from 'react'
import { toast } from 'sonner'

interface UpdateOrderDialogProp {
  id: string | undefined
  orderID: string | undefined
}

function CancelOrderDialog({ id, orderID }: UpdateOrderDialogProp) {
  const [isUpdateOrderStatusDialogOpen, setIsUpdateOrderStatusDialogOpen] =
    useState(false)

  const { mutate: updateOrderStatus, isPending: updating } = useUpdateOrder()
  const handleStatusUpdate = (
    id: string | undefined,
    newStatus: 'canceled'
  ) => {
    setIsUpdateOrderStatusDialogOpen(true)
    updateOrderStatus(
      { orderId: id, status: { status: newStatus } },
      {
        onSuccess: () => {
          setIsUpdateOrderStatusDialogOpen(false)
          toast.success(
            `Order Updated - Order ${orderID} status has been changed to ${newStatus}`
          )
        },
      }
    )
  }

  return (
    <AlertDialog
      open={isUpdateOrderStatusDialogOpen}
      onOpenChange={setIsUpdateOrderStatusDialogOpen}
    >
      <AlertDialogTrigger asChild>
        <button className="text-xs md:text-sm flex items-center gap-1 bg-destructive text-white font-medium rounded-md px-4 sm:px-6 md:px-10 h-9 cursor-pointer hover:bg-destructive/90 w-max mt-6">
          Cancel Order
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Cancel Order</AlertDialogTitle>
          <AlertDialogDescription className="font-medium">
            Are you sure you want to cancel "Order ID: {orderID}"? This action
            cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="h-9 text-xs md:text-sm bg-transparent hover:bg-transparent shadow hover:shadow-md border-0 hover:text-foreground">
            Close
          </AlertDialogCancel>
          <Button
            className="h-9 text-xs md:text-sm"
            variant="destructive"
            onClick={() => handleStatusUpdate(id, 'canceled')}
          >
            {updating ? 'Canceling' : 'Cancel Order'}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
export default CancelOrderDialog
