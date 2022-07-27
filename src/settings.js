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
    { key: 1, name: "Monday" },
    { key: 2, name: "Tuesday" },
    { key: 3, name: "Wednesday" },
    { key: 4, name: "Thursday" },
    { key: 5, name: "Friday" },
    { key: 6, name: "Saturday" },
    { key: 7, name: "Sunday" },
  ],
  hours: [
    { key: 0, name: "00:00" },
    { key: 1, name: "01:00" },
    { key: 2, name: "02:00" },
    { key: 3, name: "03:00" },
    { key: 4, name: "04:00" },
    { key: 5, name: "05:00" },
    { key: 6, name: "06:00" },
    { key: 7, name: "07:00" },
    { key: 8, name: "08:00" },
    { key: 9, name: "09:00" },
    { key: 10, name: "10:00" },
    { key: 11, name: "11:00" },
    { key: 12, name: "12:00" },
    { key: 13, name: "13:00" },
    { key: 14, name: "14:00" },
    { key: 15, name: "15:00" },
    { key: 16, name: "16:00" },
    { key: 17, name: "17:00" },
    { key: 18, name: "18:00" },
    { key: 19, name: "19:00" },
    { key: 20, name: "20:00" },
    { key: 21, name: "21:00" },
    { key: 22, name: "22:00" },
    { key: 23, name: "23:00" },
  ],
};

export { TOGGLE_SWITCH, getDefaultSettings, settingsData };
