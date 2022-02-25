import { useState } from 'react'
import Input from '../../Input'
import Part from '../../Part'
import Button from '../../Button'

const Part1 = () => {
  const [value, setValue] = useState('')
  const [message, setMessage] = useState('yo')

  const handleConvertCtoF = () => {
    if (value == '') {
      setMessage(<span className="text-red-600">Please enter degrees.</span>)
      return
    }
    if (value < -273) {
      setMessage(
        <span className="text-blue-600">That's below absolute zero.</span>
      )
      return
    }

    setMessage(
      <span>
        {value} C&deg; is {Math.round((9 / 5) * value + 32)} F&deg;.
      </span>
    )
  }

  const handleConvertFtoC = () => {
    if (value == '') {
      setMessage(<span className="text-red-600">Please enter degrees.</span>)
      return
    }
    if (value < -459) {
      setMessage(
        <span className="text-blue-600">That's below absolute zero.</span>
      )
      return
    }

    setMessage(
      <span>
        {value} F&deg; is {Math.round((5 / 9) * (value - 32))} C&deg;.
      </span>
    )
  }

  const handleReset = () => {
    setValue('')
    setMessage('')
  }

  return (
    <Part header="Part 3:">
      <div className="grid w-80 grid-cols-2 gap-4">
        <Input
          id="fc"
          label="F&deg; or C&deg;"
          placeholder="Enter degrees"
          value={value}
          type="number"
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="mt-5 flex items-center text-sm font-semibold">
          {message}
        </div>
      </div>
      <div className="mt-4 flex gap-2">
        <Button onClick={handleConvertCtoF}>C&deg; to F&deg;</Button>
        <Button onClick={handleConvertFtoC}>F&deg; to C&deg;</Button>
        <Button onClick={handleReset} color="secondary">
          Reset
        </Button>
      </div>
    </Part>
  )
}

export default Part1
