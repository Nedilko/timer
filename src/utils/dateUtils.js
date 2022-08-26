import dayjs from "dayjs";
import objectSupport from "dayjs/plugin/objectSupport";
import duration from "dayjs/plugin/duration";

dayjs.extend(objectSupport);
dayjs.extend(duration);

function calcDateDuration(targetDate) {
  const date = {
    days: targetDate.days,
    hours: targetDate.hours,
    minutes: targetDate.minutes,
    seconds: targetDate.seconds,
  };
  const targetDateObj = dayjs().set({ ...date });

  const duration = dayjs.duration(dayjs().diff(targetDateObj));

  return {
    days: Math.abs(duration.days()),
    hours: Math.abs(duration.hours()),
    minutes: Math.abs(duration.minutes()),
    seconds: Math.abs(duration.seconds()),
  };
}

export { calcDateDuration };
