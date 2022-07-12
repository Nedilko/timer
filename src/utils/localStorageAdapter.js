const setLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, value)
  } catch (e) {
    console.error(e)
  }
}

const getLocalStorage = (key) => {
  try {
    return localStorage.getItem(key)
  } catch (e) {
    console.error(e)
  }
}

export {setLocalStorage, getLocalStorage}