import Logo from '@/assets/logo.png'

function App() {
  return (
    <main className="border border-indigo-600 p-8 m-2">
      <img
        src={Logo}
        alt="logo gerador de senhas"
        className="img-fluid mx-auto d-block mb-3"
      />
      <div className="container">
        <label className="text-white flex flex-col mb-3 pt-3">
          Quantidade de caracteres
          <input type="range" min={6} max={24} />
        </label>
        <div className="flex flex-col">
          <label>
            Letras maiúsculas
            <input type="checkbox" className="mx-2 border-none" />
          </label>
          <label>
            Letras minúsculas
            <input type="checkbox" className="mx-2 border-none" />
          </label>
          <label>
            Números
            <input type="checkbox" className="mx-2 border-none" />
          </label>
          <label>
            Símbolos
            <input type="checkbox" className="mx-2 border-none" />
          </label>
        </div>
        <div className='flex justify-center items-center mt-6'>
          <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            Gerar senha
          </button>
        </div>
          <div className='flex flex-col'>
            <p className="text-white text-center mt-3">Senha gerada</p>
          <input type="text" />
          </div>
      </div>
    </main>
  )
}

export default App
