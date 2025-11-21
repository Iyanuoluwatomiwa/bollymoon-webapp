import { supabase } from './supabaseClient'
import type { UserDataType, UserRole } from './types'
import type { User } from '@supabase/supabase-js'

export const getAuthUserDetails = async (user: User) => {
  const { data: userRole, error: userError } = await supabase
    .from('users')
    .select<'role', UserRole>('role')
    .eq('id', user.id)
    .single()
  if (userError) {
    return { userData: null, userRole: null }
  }

  const userRoleTable =
    userRole?.role == 'buyer'
      ? 'buyers'
      : userRole?.role == 'vendor'
      ? 'vendors'
      : 'logistics'
  const { data: userData, error: dataError } = await supabase
    .from(userRoleTable)
    .select<'*', UserDataType>('*')
    .eq('id', user.id)
    .single()
  if (dataError) throw new Error(dataError.message)

  const AuthUserData = { userData, userRole }
  return AuthUserData
}

/* export const getRecentOrder = async (orderId: string) => {
  const {
    data,
    error,
  }: { data: RecentOrder[] | null; error: PostgrestError | null } =
    await supabase
      .from('order_items')
      .select(
        `
    order_id,
    created_at,
    vendor_id,
    vendor,
    vendorEmail:vendors ( email )
  `
      )
      .eq('order_id', orderId)

  if (error) throw new Error(error.message)

  const grouped = data?.reduce((acc, item) => {
    const vendorId = item.vendor_id
    const vendorEmail = item.vendorEmail?.[0]?.email || ''
    if (!acc[vendorId]) {
      acc[vendorId] = {
        vendorEmail,
        vendorName: item.vendor,
        orderId: item.order_id,
        orderCreated: formatCreatedAt(item.created_at),
        items: [],
      }
    }
    acc[vendorId].items.push(item)
    return acc
  }, {} as Record<string, VendorGroup>)

  return grouped
}
 */
