import { useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { IoEyeSharp } from 'react-icons/io5'
import { FaEyeSlash } from 'react-icons/fa6'

interface FormPasswordProp {
  name: string
  label?: string
  labelSize?: string
  value: string
  handleInputChange: (key: string, value: any) => void
  placeholder: string
  required?: boolean
  className?: string
}

function FormPassword({
  name,
  label,
  labelSize,
  value,
  handleInputChange,
  placeholder,
  required,
  className,
}: FormPasswordProp) {
  const [showPassword, setShowPassword] = useState<boolean>(true)

  return (
    <div className="space-y-2">
      <Label htmlFor={name} className={`text-xs md:text-sm ${labelSize}`}>
        {label}
      </Label>
      <div className="relative">
        <Input
          id={name}
          value={value}
          onChange={(e) => handleInputChange(name, e.target.value)}
          placeholder={placeholder}
          type={`${showPassword ? 'password' : 'text'}`}
          required={required}
          className={`${className} break-all  text-xs md:text-sm placeholder:text-xs placeholder:md:text-sm h-9`}
        />
        <Button
          asChild={true}
          type="button"
          variant="ghost"
          size="icon"
          className="absolute top-1/2 -translate-y-1/2 w-10 h-10 p-2.5  right-0 hover:bg-transparent"
        >
          {showPassword ? (
            <IoEyeSharp
              onClick={() => setShowPassword(!showPassword)}
              className="w-4 h-4 text-muted-foreground hover:text-foreground"
            />
          ) : (
            <FaEyeSlash
              onClick={() => setShowPassword(!showPassword)}
              className="h-6 w-6 text-muted-foreground hover:text-foreground"
            />
          )}
        </Button>
      </div>
    </div>
  )
}
export default FormPassword
