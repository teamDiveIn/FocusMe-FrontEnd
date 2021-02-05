function checkLocalStorage() {
  try {
    localStorage.setItem('test', 'test')
    localStorage.removeItem('test')
    return true
  } catch (e) {
    return false
  }
}

class FallbackStorage {
  fallbackStorage

  valid = checkLocalStorage()

  setItem(key, value) {
    const string = JSON.stringify(value)
    if (this.valid) {
      localStorage.setItem(key, string)
      return
    }
    this.fallbackStorage[key] = string
  }

  getItem(key) {
    let value = this.valid ? localStorage.getItem(key) : this.fallbackStorage[key]
    try {
      const parsed = JSON.parse(value || '')
      return parsed
    } catch (e) {
      return null
    }
  }

  removeItem(key) {
    if (this.valid) {
      localStorage.removeItem(key)
      return
    }
    delete this.fallbackStorage[key]
  }
}

const storage = new FallbackStorage()

export default storage
