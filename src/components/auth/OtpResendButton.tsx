import { useEffect, useState } from 'react'

interface OtpResendButtonProp {
  onClick: () => Promise<void>
}
const coolDownSeconds = 60
const storageKey = 'cooldown_end_time'

function OtpResendButton({ onClick }: OtpResendButtonProp) {
  const [secondsLeft, setSecondsLeft] = useState(0)

  useEffect(() => {
    const storedEndTime = localStorage.getItem(storageKey)
    if (storedEndTime) {
      const remaining = Math.ceil((Number(storedEndTime) - Date.now()) / 1000)
      if (remaining > 0) {
        setSecondsLeft(remaining)
      }
    }
  }, [])

  useEffect(() => {
    if (secondsLeft <= 0) return

    const timer = setInterval(() => {
      setSecondsLeft((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [secondsLeft])

  const handleClick = async () => {
    await onClick()
    const endTime = Date.now() + coolDownSeconds * 1000
    localStorage.setItem(storageKey, endTime.toString())
    setSecondsLeft(coolDownSeconds)
  }
  return (
    <div className="text-xs md:text-sm font-medium text-center mt-1 mb-6">
      Didn't receive code?{' '}
      <button
        type="button"
        className="text-primary hover:underline cursor-pointer"
        onClick={handleClick}
        disabled={secondsLeft > 0}
      >
        {secondsLeft > 0 ? `Resend in ${secondsLeft}s` : 'Resend code'}
      </button>
    </div>
  )
}

export default OtpResendButton
