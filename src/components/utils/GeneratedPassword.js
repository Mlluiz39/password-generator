const getRandomLetter = () => {
  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  return letters[Math.floor(Math.random() * letters.length)]
}

const getRandomNumber = () => {
  const numbers = '0123456789'
  const randomIndex = Math.floor(Math.random() * numbers.length)
  return numbers[randomIndex]
}

const getRandomSymbol = () => {
  const symbols = '!@#$%^&*(){}[]=<>/,.'
  return symbols[Math.floor(Math.random() * symbols.length)]
}

function generatedPassword(
  hasNumber = false,
  hasSymbol = false,
  passwordLength = 6
) {
  let functionSet = [getRandomLetter]

  functionSet = hasNumber ? [...functionSet, getRandomNumber] : functionSet
  functionSet = hasSymbol ? [...functionSet, getRandomSymbol] : functionSet

  let password = []
  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * functionSet.length)
    let randomFunction = functionSet[randomIndex]
    password.push(randomFunction())
  }

  return password.join('')
}

export default generatedPassword
