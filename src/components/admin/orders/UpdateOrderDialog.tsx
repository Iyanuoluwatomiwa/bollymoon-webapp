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
import { RefreshCcw } from 'lucide-react'
import { useState } from 'react'

interface UpdateOrderDialogProp {
  trigger: string
  orderId: string | undefined
  newStatus: 'processing' | 'delivered'
  id: string | undefined
}

function UpdateOrderDialog({
  trigger,
  orderId,
  newStatus,
  id,
}: UpdateOrderDialogProp) {
  const [isUpdateOrderStatusDialogOpen, setIsUpdateOrderStatusDialogOpen] =
    useState(false)

  const { mutate: updateOrderStatus, isPending: updating } = useUpdateOrder()
  const handleStatusUpdate = (id: string | undefined, newStatus: string) => {
    setIsUpdateOrderStatusDialogOpen(true)
    updateOrderStatus(
      { id, status: newStatus, orderId },
      {
        onSuccess: () => {
          setIsUpdateOrderStatusDialogOpen(false)
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
        <button className="text-[10px] sm:text-xs bg-transparent font-medium rounded-xs h-8 hover:text-primary hover:bg-primary/10 cursor-pointer capitalize w-full rounded-xs flex justify-center items-center">
          {trigger}
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Update Order Status</AlertDialogTitle>
          <AlertDialogDescription className="font-medium">
            Are you sure you want to update "Order {orderId}" status to{' '}
            {newStatus}? This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="h-9 text-xs md:text-sm bg-transparent hover:bg-transparent shadow hover:shadow-md border-0 hover:text-foreground">
            Cancel
          </AlertDialogCancel>
          <Button
            className="h-9 text-xs md:text-sm"
            onClick={() => handleStatusUpdate(id, newStatus)}
          >
            <RefreshCcw className={`h-4 w-4s ${updating && 'animate-spin'}`} />
            {updating ? 'Updating' : 'Update Status'}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
export default UpdateOrderDialog
