import Logo from '@/assets/logo.png'
import generatedPassword from '@/components/utils/GeneratedPassword'



const PasswordGenerate = () => {
 console.log(generatedPassword())
  return (
    <main className="p-10 m-4 shadow-2xl shadow-indigo-900 bg-gradient-to-t bg-teal-500">
      <img
        src={Logo}
        alt="logo gerador de senhas"
        className="img-fluid mx-auto d-block mb-3"
      />

      <form className="container p-6 flex justify-center items-center flex-col">
        <div className="shadow-lg border-t-2 border-t-fuchsia-300 b py-6 px-24">
          <label className="flex flex-col">
            Quantidade de caracteres
            <input
              className="w-15 mx-auto mb-3 mt-1"
              type="number"
              min={6}
              max={24}
              name="passwordLength"
            />
          </label>
          <div className="flex flex-col">
            <div>
              <label>
                <input
                  type="checkbox"
                  className="mx-2 border-none"
                  name="lowercase"
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
            <input type="text" className="text-black py-8 px-24 mt-2 rounded" />
          </label>
        </div>
      </form>
    </main>
  )
}

export default PasswordGenerate
