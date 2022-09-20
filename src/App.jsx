import Logo from '@/assets/logo.png'

function App() {
  return (
    <main className="p-8 m-2 shadow-2xl shadow-indigo-900">
      <img
        src={Logo}
        alt="logo gerador de senhas"
        className="img-fluid mx-auto d-block mb-3"
      />
      <div className="container p-6">
        <label className="text-white flex flex-col items-center mb-3 pt-3">
          Quantidade de caracteres
          <input type="range" min={6} max={24} />
          15
        </label>
        <div className="flex flex-col">
          <label className="pb-3">
            Letras maiúsculas
            <input type="checkbox" className="mx-2 border-none" />
          </label>
          <label className="pb-3">
            Letras minúsculas
            <input type="checkbox" className="mx-2 border-none" />
          </label>
          <label className="pb-3">
            Números
            <input type="checkbox" className="mx-2 border-none" />
          </label>
          <label className="pb-3">
            Símbolos
            <input type="checkbox" className="mx-2 border-none" />
          </label>
        </div>
        <div className="flex justify-center items-center mt-6">
          <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            Gerar senha
          </button>
        </div>
        <div className="flex flex-col">
          <p className="text-white text-center mt-3">Senha gerada</p>
          <input type="text" />
        </div>
      </div>
    </main>
  )
}

export default App
