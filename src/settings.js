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

export {TOGGLE_SWITCH, getDefaultSettings}