function setItem(key, value) {
  return localStorage.setItem(key, btoa(JSON.stringify(value)))
}

function getItem(key) {
  return JSON.parse(decode(localStorage.getItem(key)))
}

function decode(encodedString) {
  try {
    return atob(encodedString)
  } catch (e) {
    return null
  }
}

export {setItem, getItem}