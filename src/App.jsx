import { useState, useRef } from 'react'
import Logo from '@/assets/logo.png'

function App() {
  const [dataValue, setDataValue] = useState('')
  const [count, setCount] = useState(6)
  const [lowercaseLetter, setLowercaseLetter] = useState('')
  const [uppercaseLetter, setUppercaseLetter] = useState('')
  const [number, setNumber] = useState('')
  const [symbol, setSymbol] = useState('')

  const handleLowercaseLetter = e => {
    const alphabetLower = [...Array(26)].map((_, i) =>
      String.fromCharCode(i + 97)
    )
    const randomLower =
      alphabetLower[Math.floor(Math.random() * alphabetLower.length)]
    setLowercaseLetter(e.target.checked ? randomLower : '')
  }

  const handleUppercaseLetter = e => {
    const alphabetUpper = [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
    ]
    const randomUpper =
      alphabetUpper[Math.floor(Math.random() * alphabetUpper.length)]
    setUppercaseLetter(e.target.checked ? randomUpper : '')
  }

  const handleNumber = e => {
    const number = Math.floor(Math.random() * 10).toString()
    setNumber(e.target.checked ? number : '')
  }

  const handleSymbol = e => {
    const symbol = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')']
    setSymbol(e.target.checked ? symbol : '')
  }

  
  const handleCount = [lowercaseLetter + uppercaseLetter + number + symbol]
  let password = ''

  const handleGenerate = () => {
    for (let i = 0; i <= count; i++) {
      handleCount.forEach(() => {
        password += handleCount[Math.floor(Math.random() * handleCount.length)]
      })
    }

    setDataValue(password)
  }

  console.log(dataValue)
  console.log(count)

  return (
    <main className="p-10 m-4 shadow-2xl shadow-indigo-900">
      <img
        src={Logo}
        alt="logo gerador de senhas"
        className="img-fluid mx-auto d-block mb-3"
      />
      <div className="container p-6">
        <label className="text-white flex flex-col items-center mb-3 pt-3">
          Quantidade de caracteres
          <input
            type="range"
            min={6}
            max={24}
            value={count}
            onChange={e => setCount(e.target.value)}
          />
          {count}
        </label>
        <div className="flex flex-col">
          <div>
            <label>
              <input
                type="checkbox"
                className="mx-2 border-none"
                checked={lowercaseLetter}
                onChange={handleLowercaseLetter}
              />
            </label>
            Letras minúsculas
          </div>
          <div>
            <label className="pb-3">
              <input
                type="checkbox"
                className="mx-2 border-none"
                checked={uppercaseLetter}
                onChange={handleUppercaseLetter}
              />
              Letras maiúsculas
            </label>
          </div>
          <div>
            <label className="pb-3">
              <input
                type="checkbox"
                className="mx-2 border-none"
                checked={number}
                onChange={handleNumber}
              />
              Números
            </label>
          </div>
          <div>
            <label className="pb-3">
              <input
                type="checkbox"
                className="mx-2 border-none"
                checked={symbol}
                onChange={handleSymbol}
              />
              Símbolos
            </label>
          </div>
        </div>
        <div className="flex justify-center items-center mt-6">
          <button
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            onClick={handleGenerate}
          >
            Gerar senha
          </button>
        </div>
        <div className="flex flex-col">
          <p className="text-white mt-6 mx-auto">Senha gerada</p>
          <div className="p-8 text-black border bg-white cursor-pointer">
            <p className="flex justify-center items-center">{dataValue}</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
