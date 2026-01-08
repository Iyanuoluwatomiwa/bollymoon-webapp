import {
  useRef,
  useState,
  type ClipboardEvent,
  type FormEvent,
  type KeyboardEvent,
} from 'react'
import FormSubmitButton from '../form-fields/FormSubmitButton'

function OtpInput() {
  /*  const [resending, setResending] = useState(false) */
  const [values, setValues] = useState(['', '', '', ''])
  const inputsRef = useRef<(HTMLInputElement | null)[]>([])
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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fullCode = values.join('')
    if (fullCode.length === 4) {
    }
  }
  const handleResendCode = async () => {}
  return (
    <form onSubmit={handleSubmit} className="my-3" onPaste={handlePaste}>
      <div className="flex flex-row gap-4 justify-center items-center max-w-xs mx-auto">
        {values.map((value, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            className="w-16 h-16 my-2 px-2 focus:outline-none bg-white text-tertiary border border-muted focus:border-primary text-3xl text-center"
            value={value}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            ref={(el) => {
              inputsRef.current[index] = el
            }}
          />
        ))}
      </div>
      <button
        type="button"
        className="text-primary text-sm font-medium text-center mt-3 mb-6 w-full "
        onClick={handleResendCode}
        disabled={false}
      >
        Send code
      </button>
      <div className="max-w-xs mx-auto">
        <FormSubmitButton
          text="Close the account"
          texting="Closing"
          submitting={false}
        />
      </div>
    </form>
  )
}
export default OtpInput
