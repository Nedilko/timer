import { useState } from 'react'

function Countdown({ Date }) {
  const [date, setDate] = useState(Date)

  return (
    <div className="grid grid-cols-4 flex-row flex-wrap items-end justify-around px-10 text-center uppercase">
      <div className="after:absolute after:text-2xl after:content-[':']">
        <div>days</div>
        <div className="text-2xl">{date.days()}</div>
      </div>
      <div className="after:absolute after:text-2xl after:content-[':']">
        <div>hours</div>
        <div className="text-2xl">{date.hours()}</div>
      </div>
      <div className="after:absolute after:text-2xl after:content-[':']">
        <div>minutes</div>
        <div className="text-2xl">{date.minutes()}</div>
      </div>
      <div className="after:absolute after:text-2xl after:content-[':']">
        <div>seconds</div>
        <div className="text-2xl">{date.seconds()}</div>
      </div>
    </div>
  )
}

export default Countdown