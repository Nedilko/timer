import { useState } from 'react'
import { calcDateDuration } from '../utils/dateUtils'

function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(calcDateDuration(targetDate))

    console.log(calcDateDuration(targetDate))

  return (
    <div className="grid grid-cols-4 flex-row flex-wrap items-end justify-around px-10 text-center uppercase">
      <div className="after:absolute after:text-2xl after:content-[':'] after:absolute after:right-0 after:bottom-0 relative">
        <div>days</div>
        <div className="text-2xl">{timeLeft.days}</div>
      </div>
      <div className="after:absolute after:text-2xl after:content-[':'] after:absolute after:right-0 after:bottom-0 relative">
        <div>hours</div>
        <div className="text-2xl">{timeLeft.hours}</div>
      </div>
      <div className="after:absolute after:text-2xl after:content-[':'] after:absolute after:right-0 after:bottom-0 relative">
        <div>minutes</div>
        <div className="text-2xl">{timeLeft.minutes}</div>
      </div>
      <div>
        <div>seconds</div>
        <div className="text-2xl">{timeLeft.seconds}</div>
      </div>
    </div>
  )
}

export default Countdown
