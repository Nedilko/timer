const TOGGLE_SWITCH = {
  BG: {
    LIGHT: './assets/light.svg',
    DARK: './assets/dark.svg'
  }
}

const TARGET_DATE = {
  days: 7,
  hours: 22,
  minutes: 50,
  seconds: 1
}

const DEFAULT_SETTINGS = {
  greetingsText: "have a beer!",
  targetDate: {
    days: 5,
    hours: 18,
    minutes: 0,
    seconds: 0
  },
  theme: "light",
  useSystemTheme: false,
  isFirstLoad: true,
}

export {TARGET_DATE, TOGGLE_SWITCH, DEFAULT_SETTINGS}