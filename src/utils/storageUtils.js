function saveSettings({settings}) {
  return localStorage.setItem('timerSettings', btoa(JSON.stringify(settings)))
}

function loadSettings() {
  return JSON.parse(atob(localStorage.getItem('timerSettings')))
}

export {saveSettings, loadSettings}