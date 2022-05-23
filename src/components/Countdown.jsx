import { calcDateDuration } from '../utils/dateUtils'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

function Countdown({ targetDate }) {
  const [duration, setDuration] = useState(calcDateDuration(targetDate))

  useEffect(()=>{
    setTimeout(()=>{
      setDuration((oldState) => calcDateDuration(targetDate))
    },1000)
  },[duration])


  return (
    <div className="grid grid-cols-4 flex-row flex-wrap items-end justify-around px-10 text-center uppercase">
      <div className="after:absolute after:text-2xl after:bottom-0 after:right-0 after:content-[':'] relative">
        <div>days</div>
        <div className="text-2xl">{duration.days()}</div>
      </div>
      <div className="after:absolute after:text-2xl after:bottom-0 after:right-0 after:content-[':'] relative">
        <div>hours</div>
        <div className="text-2xl">{duration.hours()}</div>
      </div>
      <div className="after:absolute after:text-2xl after:bottom-0 after:right-0 after:content-[':'] relative">
        <div>minutes</div>
        <div className="text-2xl">{duration.minutes()}</div>
      </div>
      <div>
        <div>seconds</div>
        <div className="text-2xl">{duration.seconds()}</div>
      </div>
    </div>
  )
}

Countdown.propTypes = {
  targetDate: PropTypes.object.isRequired,
}


export default Countdown
