const TOGGLE_SWITCH = {
  BG: {
    LIGHT: './assets/light.svg',
    DARK: './assets/dark.svg'
  }
}

const getDefaultSettings = () => ({
  greetingsText: "have a beer!",
  targetDate: {
    days: 5,
    hours: 18,
    minutes: 0,
    seconds: 0
  },
  theme: true,
  useSystemTheme: false,
  isFirstLoad: true,
})

const settingsData = {
  days: [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ],
  hours: (() => {
    const nums = [...Array(24).keys()]
    const fnum = []

    for (let num in nums) {
      fnum.push(parseInt(num).toLocaleString('en-US', {minimumIntegerDigits: 2}) + ':00')
    }

    return fnum
  })()
}

export {TOGGLE_SWITCH, getDefaultSettings, settingsData}