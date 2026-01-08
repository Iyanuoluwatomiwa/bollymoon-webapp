import {
  useRef,
  useState,
  type ClipboardEvent,
  type FormEvent,
  type KeyboardEvent,
} from 'react'
import FormSubmitButton from '../form-fields/FormSubmitButton'
import { confirmDeactivation, deactivateAccount } from '@/api/auth'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { clearUser } from '@/features/user/userSlice'
import OtpResendButton from './OtpResendButton'

function OtpInput() {
  const [resend, setResend] = useState(false)
  const [values, setValues] = useState(['', '', '', '', '', ''])
  const inputsRef = useRef<(HTMLInputElement | null)[]>([])
  const fullCode = values.join('')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleChange = (index: number, value: string) => {
    const newValue = value.replace(/[^0-9]/g, '').slice(-1)
    const newValues = [...values]
    newValues[index] = newValue
    setValues(newValues)

    // Focus next input if current one has a value
    if (newValue && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1]?.focus()
    }
  }
  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !values[index] && index > 0) {
      inputsRef.current[index - 1]?.focus()
    }
  }
  const handlePaste = (e: ClipboardEvent<HTMLFormElement>) => {
    const pasted = e.clipboardData
      .getData('text')
      .replace(/\D/g, '')
      .slice(0, 4)
      .split('')
    const newValues = [...values]
    pasted.forEach((char, i) => {
      newValues[i] = char
      if (inputsRef.current[i]) {
        inputsRef.current[i].value = char
      }
    })
    setValues(newValues)
    const nextIndex = Math.min(pasted.length, inputsRef.current.length - 1)
    inputsRef.current[nextIndex]?.focus()
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await confirmDeactivation({ otp: fullCode })
      dispatch(clearUser())
      navigate('/')
      toast.success('Account closed successfully!')
    } catch (error: any) {
      toast.error(error?.message)
    }
  }
  const handleSendOtp = async () => {
    try {
      await deactivateAccount()
      setResend(true)
      toast.success(
        'OTP sent to your email address. Enter the code to proceed.'
      )
    } catch (error: any) {
      toast.error(error?.message)
    }
  }
  return (
    <form onSubmit={handleSubmit} className="my-3" onPaste={handlePaste}>
      <div className="flex flex-row gap-2 justify-center items-center max-w-xs mx-auto">
        {values.map((value, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            className="w-8 h-8 md:h-10 md:w-10 my-2 px-2 focus:outline-none bg-white text-tertiary border border-muted focusborder-primary text-xl md:text-2xl text-center"
            value={value}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            ref={(el) => {
              inputsRef.current[index] = el
            }}
          />
        ))}
      </div>
      {resend ? (
        <OtpResendButton onClick={handleSendOtp} />
      ) : (
        <div className="w-max mx-auto">
          <button
            type="button"
            className="text-xs md:text-sm font-medium text-center  mb-6 text-primary hover:underline cursor-pointer"
            onClick={handleSendOtp}
          >
            Request OTP
          </button>
        </div>
      )}

      <div className="max-w-xs mx-auto">
        <FormSubmitButton
          text="Close the account"
          texting="Closing"
          submitting={false}
          disabled={fullCode.length !== 6}
        />
      </div>
    </form>
  )
}
export default OtpInput
