import { useState } from 'react'

import Logo from '@/assets/logo.png'
// import { PasswordServices } from '@/services/PasswordServices'

let PasswordGenerate = () => {
  let [state, setState] = useState({
    generatedPassword: '',
    passwordLength: 6,
    uppercase: false,
    lowercase: false,
    number: false,
    symbol: false,
  })

  const updateInput = e => {
    setState({
      ...state,
      [e.target.name]: e.target.checked,
    })
  }

  const updateCheckbox = e => {
    setState({
      ...state,
      [e.target.name]: e.target.checked,
    })
  }

  const handleFormSubmit = e => {
    e.preventDefault()
    // let passwordObj = PasswordServices.getPasswordObj(state)
    // let thePassword = PasswordServices.generatePassword(
    //   passwordObj,
    //   state.passwordLength
    // )
    // console.log(thePassword)
  }

  return (
    <main className="p-10 m-4 shadow-2xl shadow-indigo-900">
      <img
        src={Logo}
        alt="logo gerador de senhas"
        className="img-fluid mx-auto d-block mb-3"
      />
      <pre>{JSON.stringify(state)}</pre>
      <form
        className="container p-6 flex justify-center items-center flex-col"
        onSubmit={handleFormSubmit}
      >
        <div className="shadow-lg border-t-2 border-t-fuchsia-300 b py-6 px-24">
          <label className="flex flex-col">
            Quantidade de caracteres
            <input
              className="w-15 mx-auto mb-3 mt-1"
              type="number"
              name="passwordLength"
              value={state.passwordLength}
              onChange={updateInput}
            />
          </label>
          <div className="flex flex-col">
            <div>
              <label>
                <input
                  type="checkbox"
                  className="mx-2 border-none"
                  name="lowercase"
                  onChange={updateCheckbox}
                />
              </label>
              Letras minúsculas
            </div>
            <div>
              <label className="pb-3">
                <input
                  type="checkbox"
                  className="mx-2 border-none"
                  name="uppercase"
                  onChange={updateCheckbox}
                />
                Letras maiúsculas
              </label>
            </div>
            <div>
              <label className="pb-3">
                <input
                  type="checkbox"
                  className="mx-2 border-none"
                  name="number"
                  onChange={updateCheckbox}
                />
                Números
              </label>
            </div>
            <div>
              <label className="pb-3">
                <input
                  type="checkbox"
                  className="mx-2 border-none"
                  name="symbol"
                  onChange={updateCheckbox}
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
          <label className="text-white flex flex-col items-center mb-3 pt-6">
            Senha gerada
            <input
              type="text"
              className="text-black py-8 px-24 mt-2 rounded"
              value={state.generatedPassword}
              onChange={updateInput}
            />
          </label>
        </div>
      </form>
    </main>
  )
}

export default PasswordGenerate
