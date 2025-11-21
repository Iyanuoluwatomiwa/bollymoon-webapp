import { Avatar, AvatarFallback } from '../ui/avatar'
import { Link } from 'react-router-dom'
import type { UserDataType } from '@/utils/types'
import { User } from 'lucide-react'

interface ProfileImageProp {
  userData: UserDataType | null | undefined
  link?: boolean
}

function ProfileImage({ userData, link }: ProfileImageProp) {
  return (
    <Avatar>
      <AvatarFallback className="uppercase font-bold bg-muted-foreground  text-muted">
        {link ? (
          <>
            {userData ? (
              <Link to="/account">
                <span className="sr-only">user initials</span>
                {userData?.firstname.charAt(0)}
                {userData?.lastname.charAt(0)}
              </Link>
            ) : (
              <Link to="/auth/complete-registration">
                <span className="sr-only">user initials</span>
                <User className="w-4 h-4" />
              </Link>
            )}
          </>
        ) : (
          <>
            <span className="sr-only">user initials</span>
            {userData?.firstname.charAt(0)}
            {userData?.lastname.charAt(0)}
          </>
        )}
      </AvatarFallback>
    </Avatar>
  )
}
export default ProfileImage
