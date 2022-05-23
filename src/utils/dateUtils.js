import dayjs from 'dayjs'
import objectSupport from 'dayjs/plugin/objectSupport'
import duration from 'dayjs/plugin/duration'
import PropTypes from 'prop-types'
dayjs.extend(objectSupport)
dayjs.extend(duration)

function calcDateDuration(date) {
  const targetDate = dayjs().set({
    days: date.day,
    hours: date.hour,
    minutes: date.minute,
    seconds: date.second,
  })

  return dayjs.duration(dayjs().diff(targetDate))
}

calcDateDuration.PropTypes = {
  date: PropTypes.object.isRequired
}

export { calcDateDuration }
