const applyTheme = (theme) => {
  if (theme == "light") {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
  } else {
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
  }
};

const addMinutesSeconds = (targetDate) => {
  return { ...targetDate, minutes: 0, seconds: 0 };
};

const formatNumberTwoDigit = (number) => {
  if (number < 10) {
    // TODO: test 9,10,11,String
    return `0${number}`;
  }

  return number;
};

const getSystemTheme = () => {
  if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    return "light";
  } else {
    return "dark";
  }
  // TODO: mock this ^ method to test isSystemTheme
};

export { applyTheme, addMinutesSeconds, formatNumberTwoDigit, getSystemTheme };
