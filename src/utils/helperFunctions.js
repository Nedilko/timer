const applyTheme = (light) => {
  if (light) {
    document.documentElement.classList.remove('dark');
  } else {
    document.documentElement.classList.add('dark');
  }
};

const addMinutesSeconds = (targetDate) => {
	return {...targetDate, minutes: 0, seconds: 0}	
}

const formatNumberTwoDigit = (number) => {
	if (number < 10) {
		return `0${number}`
	}

	return number;
}

export {applyTheme, addMinutesSeconds, formatNumberTwoDigit}
