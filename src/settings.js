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
  hours: [
    '00:00',
    '01:00',
    '02:00',
    '03:00',
    '04:00',
    '05:00',
    '06:00',
    '07:00',
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '12:00',
  ]
}

export {TOGGLE_SWITCH, getDefaultSettings, settingsData}