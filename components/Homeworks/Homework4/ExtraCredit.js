import { useState } from 'react'
import Part from '../../Part'
import Input from '../../Input'
import Button from '../../Button'

const ExtraCredit = () => {
  const [input, setInput] = useState('')
  const [size, setSize] = useState(0)
  const [error, setError] = useState('')

  console.log(size)

  const handleShowSquare = () => {
    if (input >= 2 && input <= 10) {
      setError('')
      setSize(Number(input))
    } else {
      setSize(0)
      setError('Enter a value between 2 and 10')
    }
  }

  const handleReset = () => {
    setSize(0)
    setError('')
  }

  return (
    <Part header="Extra Credit:">
      <div className="flex items-end gap-3">
        <Input
          label="Size"
          type="number"
          id="size"
          className="w-32"
          placeholder="2 to 10"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button onClick={handleShowSquare}>Show Square</Button>
        <Button onClick={handleReset} color="secondary">
          Reset
        </Button>
      </div>
      <div className="mt-4 text-red-600">{error}</div>
      <div className="mt-4 font-mono font-semibold">
        <div>
          {Array.apply(null, { length: size + 1 })
            .map(Number.call, Number)
            .slice(1)
            .map((value, index) => (
              <span key={index}>*&nbsp;&nbsp;</span>
            ))}
        </div>
        {Array.apply(null, { length: size - 1 })
          .map(Number.call, Number)
          .slice(1)
          .map((value, index) => (
            <div key={index}>
              *
              {Array.apply(null, { length: 3 + (size - 2) * 3 })
                .map(Number.call, Number)
                .slice(1)
                .map((value, index) => (
                  <span key={index}>&nbsp;</span>
                ))}
              *
            </div>
          ))}
        <div>
          {Array.apply(null, { length: size + 1 })
            .map(Number.call, Number)
            .slice(1)
            .map((value, index) => (
              <span key={index}>*&nbsp;&nbsp;</span>
            ))}
        </div>
      </div>
    </Part>
  )
}

export default ExtraCredit
