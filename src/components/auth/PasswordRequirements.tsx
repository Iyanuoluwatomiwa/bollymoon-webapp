import { passwordRules } from '@/utils/format'
import { Check, X } from 'lucide-react'

interface PasswordRequirementsProps {
  password: string
}

function PasswordRequirements({ password }: PasswordRequirementsProps) {
  const rules = [
    {
      label: 'At least 6 characters',
      valid: passwordRules.minLength(password),
    },
    {
      label: 'At least one uppercase letter',
      valid: passwordRules.uppercase(password),
    },
    {
      label: 'At least one number',
      valid: passwordRules.number(password),
    },
    {
      label: 'At least one special character',
      valid: passwordRules.specialChar(password),
    },
  ]

  return (
    <ul className="mt-2 space-y-1 text-xs">
      {rules.map((rule) => (
        <li key={rule.label} className="flex items-center gap-2">
          {rule.valid ? (
            <Check className="w-4 h-4 text-green-600" />
          ) : (
            <X className="w-4 h-4 text-red-500" />
          )}
          <span
            className={rule.valid ? 'text-green-600' : 'text-muted-foreground'}
          >
            {rule.label}
          </span>
        </li>
      ))}
    </ul>
  )
}

export default PasswordRequirements
