import {useState, useEffect, useContext} from 'react';
import {calcDateDuration} from '../utils/dateUtils';
import {addMinutesSeconds, formatNumberTwoDigit} from '../utils/helperFunctions';
import PropTypes from 'prop-types';

Countdown.propTypes = {
  targetDate: PropTypes.object.isRequired,
}

function Countdown({targetDate}) {
	const fullDate = addMinutesSeconds(targetDate)
  const [timeLeft, setTimeLeft] = useState(calcDateDuration(fullDate))

  useEffect(() => {
    const timerId = setTimeout(() => {
      setTimeLeft((oldState) => calcDateDuration(fullDate))
    }, 1000)

    return () => {
      clearTimeout(timerId)
    }
  }, [timeLeft, targetDate])

  return (
    <div className="grid grid-cols-4 flex-row flex-wrap items-end justify-around px-10 text-center uppercase">
      <div
        className="after:absolute after:text-2xl after:content-[':'] after:absolute after:right-0 after:bottom-0 relative">
        <div>days</div>
        <div className="text-2xl">{formatNumberTwoDigit(timeLeft.days)}</div>
      </div>
      <div
        className="after:absolute after:text-2xl after:content-[':'] after:absolute after:right-0 after:bottom-0 relative">
        <div>hours</div>
        <div className="text-2xl">{formatNumberTwoDigit(timeLeft.hours)}</div>
      </div>
      <div
        className="after:absolute after:text-2xl after:content-[':'] after:absolute after:right-0 after:bottom-0 relative">
        <div>minutes</div>
        <div className="text-2xl">{formatNumberTwoDigit(timeLeft.minutes)}</div>
      </div>
      <div>
        <div>seconds</div>
        <div className="text-2xl">{formatNumberTwoDigit(timeLeft.seconds)}</div>
      </div>
    </div>
  )
}

export default Countdown
