import { useState, useRef, useEffect } from 'react'
import { Tooltip } from '@material-tailwind/react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Logo from '@/assets/logo.png'
import { generatedPassword } from '@/utils/form.utils'

const Form = () => {
  const [password, setPassword] = useState(generatedPassword())
  const [length, setLength] = useState(6)
  const [isShowElement, isSetShowElement] = useState(false)

  const refHasNumber = useRef()
  const refHasSpecial = useRef()

  const notify = () => toast.success('Copiado para area de trabalho!',{
    position: 'top-center',
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })

  const handleSubmit = event => {
    event.preventDefault()
    setPassword(
      generatedPassword(
        refHasNumber.current.checked,
        refHasSpecial.current.checked,
        length
      )
    )
    isSetShowElement(showElement)
  }

  const copyPassword = () => {
    navigator.clipboard.writeText(password)
    notify()
  }

  const showElement = () => {
    return (
      <>
      <ToastContainer />
        <label
          className="text-black flex flex-col items-center mt-16 border p-3 bg-slate-100 rounded cursor-pointer"
          onClick={copyPassword}
        >
          <span className="mb-3 font-bold text-blue-500">Senha gerada</span>
          <div className="mx-auto">
            <span className="text-2xl text-blue-700">{password}</span>

            <span className="w-16 cursor-pointer">
              <Tooltip
                placement="bottom"
                content="Copiar a senha"
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
                className="text-blue-500 mx-auto my-4 py-1 px-28 bg-white"
              >
                <p className="text-blue-500 font-bold mt-3">Clique para...</p>
              </Tooltip>
            </span>
          </div>
        </label>
      </>
    )
  }

  return (
    <main className="w-96 flex flex-col my-auto items-center px-10 pt-8 pb-48 shadow-2xl shadow-indigo-900 bg-gradient-to-t bg-teal-500">
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
        <div className="flex flex-col h-10">
          {isShowElement && showElement()}
        </div>
      </form>
    </main>
  )
}

export default Form
