import { useState } from 'react'
import Logo from '@/assets/logo.png'
import { LowercaseLetter } from '@/components/LowercaseLetter'
import { UppercaseLetter } from './components/UppercaseLetter'
import { NumbersInput } from './components/NumbersInput'
import { SymbolsInput } from './components/SymbolsInput'

function App() {
  const [count, setCount] = useState(0)

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
            min="6"
            max="24"
            value={count}
            onChange={e => setCount(e.target.value)}
          />
          {count}
        </label>
        <div className="flex flex-col">
          <LowercaseLetter />
          <UppercaseLetter />
          <NumbersInput />
          <SymbolsInput />
        </div>
        <div className="flex justify-center items-center mt-6">
          <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            Gerar senha
          </button>
        </div>
        <div className="flex flex-col">
          <p className="text-white mt-6 mx-auto">Senha gerada</p>
          <textarea className="text-white text-center"></textarea>
        </div>
      </div>
    </main>
  )
}

export default App
