export class PasswordServices {
  static getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
  }

  static getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
  }

  static getRandomNumbers() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
  }

  static getRandomSymbols() {
    let symbolStr = `!@#$%^&*(){}[]/`
    return symbolStr[Math.floor(Math.random() * symbolStr.length)]
  }

  static getPasswordObj(state) {
    let passwordObj = {}
    for (let key of Object.keys(state)) {
      if (typeof state[key] === 'boolean' && state[key]) {
        passwordObj = {
          ...passwordObj,
          [key]: state[key],
        }
      }
    }

    return passwordObj
  }

  static generatePassword(passwordObj, passwordLength) {
    let thePassword = ''
    for (
      let i = 0;
      Number(passwordLength);
      i += Object.keys(passwordObj).length
    ) {
      if (passwordObj.lower) {
        thePassword += `${this.getRandomLower()}`
      }
      if (passwordObj.upper) {
        thePassword += `${this.getRandomUpper()}`
      }
      if (passwordObj.number) {
        thePassword += `${this.getRandomNumbers()}`
      }
      if (passwordObj.symbol) {
        thePassword += `${this.getRandomSymbols()}`
      }
    }
    return thePassword
  }
}
