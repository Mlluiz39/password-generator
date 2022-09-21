import { useState } from 'react'

export const LowercaseLetter = () => {
  const [lowercaseLetter, setLowercaseLetter] = useState('')

  const handleLowercaseLetter = e => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    setLowercaseLetter(e.target.checked ? alphabet : '')
  }

  return (
    <div>
      <label>
        <input
          type="checkbox"
          className="mx-2 border-none"
          checked={lowercaseLetter}
          onChange={handleLowercaseLetter}
        />
      </label>
      Letras maiúsculas
    </div>
  )
}
