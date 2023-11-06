import config from '../../config.json'

export const useStorage = new (class {
  private readonly _localName: string
  constructor(localName: string) {
    this._localName = localName
  }
  getStorage() {
    return JSON.parse(window.localStorage.getItem(this._localName)) || {}
  }
  setItem(key: string, val: any) {
    const storage = this.getStorage()
    storage[key] = val
    window.localStorage.setItem(this._localName, JSON.stringify(storage))
  }
  clearItem(key: string) {
    const storage = this.getStorage()
    delete storage[key]
    window.localStorage.setItem(this._localName, JSON.stringify(storage))
  }
  clearAll() {
    window.localStorage.clear()
  }
})(config.LocalName)
// const useStorage = new UseStorage
