const TOGGLE_SWITCH = {
  BG: {
    LIGHT: "./assets/light.svg",
    DARK: "./assets/dark.svg",
  },
};

const getDefaultSettings = () => ({
  greetingsText: "have a beer!",
  targetDate: {
    days: 5,
    hours: 18,
  },
  theme: "light",
  useSystemTheme: false,
  isFirstLoad: true,
});

const settingsData = {
  days: [
    { key: 1, value: "Monday" },
    { key: 2, value: "Tuesday" },
    { key: 3, value: "Wednesday" },
    { key: 4, value: "Thursday" },
    { key: 5, value: "Friday" },
    { key: 6, value: "Saturday" },
    { key: 7, value: "Sunday" },
  ],
  hours: [
    { key: 0, value: "00:00" },
    { key: 1, value: "01:00" },
    { key: 2, value: "02:00" },
    { key: 3, value: "03:00" },
    { key: 4, value: "04:00" },
    { key: 5, value: "05:00" },
    { key: 6, value: "06:00" },
    { key: 7, value: "07:00" },
    { key: 8, value: "08:00" },
    { key: 9, value: "09:00" },
    { key: 10, value: "10:00" },
    { key: 11, value: "11:00" },
    { key: 12, value: "12:00" },
    { key: 13, value: "13:00" },
    { key: 14, value: "14:00" },
    { key: 15, value: "15:00" },
    { key: 16, value: "16:00" },
    { key: 17, value: "17:00" },
    { key: 18, value: "18:00" },
    { key: 19, value: "19:00" },
    { key: 20, value: "20:00" },
    { key: 21, value: "21:00" },
    { key: 22, value: "22:00" },
    { key: 23, value: "23:00" },
  ],
};

export { TOGGLE_SWITCH, getDefaultSettings, settingsData };
