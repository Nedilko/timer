import { useState, useEffect, useContext } from "react";
import { calcDateDuration } from "../utils/dateUtils";
import {
  addMinutesSeconds,
  formatNumberTwoDigit,
} from "../utils/helperFunctions";
import PropTypes from "prop-types";

Countdown.propTypes = {
  targetDate: PropTypes.object.isRequired,
};

function Countdown({ targetDate }) {
  const fullDate = addMinutesSeconds(targetDate);
  const [timeLeft, setTimeLeft] = useState(calcDateDuration(fullDate));

  useEffect(() => {
    const timerId = setTimeout(() => {
      setTimeLeft((oldState) => calcDateDuration(fullDate));
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [timeLeft, targetDate]);

  return (
    <div className="flex-row flex-wrap items-end justify-around text-center uppercase">
      {timeLeft.days > 0 && (
        <div className="after:absolute after:text-2xl after:content-[':'] after:absolute after:right-0 after:bottom-0 relative inline-flex flex-col w-1/4 px-1">
          <div>days</div>
          <div className="text-2xl">{formatNumberTwoDigit(timeLeft.days)}</div>
        </div>
      )}

      {(timeLeft.hours > 0 || timeLeft.days > 0) && (
        <div className="after:absolute after:text-2xl after:content-[':'] after:absolute after:right-0 after:bottom-0 relative inline-flex flex-col w-1/4 px-1">
          <div>hours</div>
          <div className="text-2xl">{formatNumberTwoDigit(timeLeft.hours)}</div>
        </div>
      )}

      {(timeLeft.hours > 0 || timeLeft.days > 0 || timeLeft.minutes > 0) && (
        <div className="after:absolute after:text-2xl after:content-[':'] after:absolute after:right-0 after:bottom-0 relative inline-flex flex-col w-1/4 px-1">
          <div>minutes</div>
          <div className="text-2xl">
            {formatNumberTwoDigit(timeLeft.minutes)}
          </div>
        </div>
      )}

      <div className="inline-flex flex-col w-1/4 px-1">
        <div>seconds</div>
        <div className="text-2xl">{formatNumberTwoDigit(timeLeft.seconds)}</div>
      </div>
    </div>
  );
}

export default Countdown;
