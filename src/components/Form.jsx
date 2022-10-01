import { useState, useRef } from 'react'

import Logo from '@/assets/logo.png'
import { generatedPassword } from '@/utils/form.utils'

const Form = () => {
  const [password, setPassword] = useState(generatedPassword())
  const [length, setLength] = useState(6)
  const refHasNumber = useRef()
  const refHasSpecial = useRef()

  const handleSubmit = event => {
    event.preventDefault()
    setPassword(
      generatedPassword(
        refHasNumber.current.checked,
        refHasSpecial.current.checked,
        length
      )
    )
  }

  return (
    <main className="w-96 flex flex-col my-auto items-center p-10 shadow-2xl shadow-indigo-900 bg-gradient-to-t bg-teal-500">
      <img
        src={Logo}
        alt="logo gerador de senhas"
        className="img-fluid mx-auto d-block mb-3"
      />

      <form
        className="p-6 flex justify-center flex-col"
        onSubmit={handleSubmit}
      >
        <div className="shadow-lg border-t-2 border-t-fuchsia-300 b py-6 px-24">
          <label className="flex flex-col text-white">
            Tamanho Senha
            <input
              className="w-15 mx-auto mb-3 mt-1"
              type="range"
              min={6}
              max={24}
              name="password-length"
              value={length}
              onChange={event => setLength(event.target.value)}
            />
            <span className="text-center mb-6">{length}</span>
          </label>

          <div className="flex flex-col">
            <div className="mb-3">
              <label className="text-white">
                <input
                  className="mx-2 border-none"
                  type="checkbox"
                  name="numbers"
                  ref={refHasNumber}
                />
                Números
              </label>
            </div>
            <div>
              <label className="text-white">
                <input
                  type="checkbox"
                  className="mx-2 border-none"
                  name="symbols"
                  ref={refHasSpecial}
                />
                Símbolos
              </label>
            </div>
          </div>
          <div className="flex justify-center items-center mt-6">
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
              Gerar senha
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <label className="text-white flex flex-col items-center mt-3">
            Senha gerada
            <input
              type="text"
              className="text-black text-center py-8 px-16 mt-2 rounded"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </label>
        </div>
      </form>
    </main>
  )
}

export default Form
