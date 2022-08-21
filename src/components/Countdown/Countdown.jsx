import { useState, useEffect, useContext } from "react";
import { calcDateDuration } from "../../utils/dateUtils";
import {
  addMinutesSeconds,
  formatNumberTwoDigit,
} from "../../utils/helperFunctions";
import PropTypes from "prop-types";
import DialItem from "./DialItem";

Countdown.propTypes = {
  targetDate: PropTypes.object.isRequired,
  handleFinish: PropTypes.func.isRequired
};

function Countdown({ targetDate, handleFinish }) {
  const fullDate = addMinutesSeconds(targetDate);
  const [timeLeft, setTimeLeft] = useState(calcDateDuration(fullDate));

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft((oldState) => calcDateDuration(fullDate));

      if ( timeLeft.days == 0 && timeLeft.hours == 0 && timeLeft.minutes == 0 && timeLeft.seconds == 0 ) {
        handleFinish(true)
      }

    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [timeLeft, targetDate]);

  return (
    <div className="flex-row flex-wrap items-end justify-around text-center uppercase">
      {timeLeft.days > 0 && (
        <DialItem title="days" numbers={timeLeft.days} isLast={false}/>
      )}

      {(timeLeft.hours > 0 || timeLeft.days > 0) && (
        <DialItem title="hours" numbers={timeLeft.hours} isLast={false}/>
      )}

      {(timeLeft.hours > 0 || timeLeft.days > 0 || timeLeft.minutes > 0) && (
        <DialItem title="minutes" numbers={timeLeft.minutes} isLast={false}/>
      )}

      <DialItem title="seconds  " numbers={timeLeft.seconds} isLast={true}/>
    </div>
  );
}

export default Countdown;
