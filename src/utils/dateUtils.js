import dayjs from 'dayjs'
import objectSupport from 'dayjs/plugin/objectSupport'
import duration from 'dayjs/plugin/duration'
dayjs.extend(objectSupport)
dayjs.extend(duration)

function calcDateDuration(date) {
  date = {
    days: date.day,
    hours: date.hour,
    minutes: date.minute,
    seconds: date.second,
  }
  const targetDate = dayjs().set({...date})

  return dayjs.duration(dayjs().diff(targetDate))
}

export { calcDateDuration }
