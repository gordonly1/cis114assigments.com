import { useState } from 'react'
import Input from '../../Input'
import Part from '../../Part'
import Button from '../../Button'

const ExtraCredit = () => {
  const [input, setInput] = useState('')
  const [message, setMessage] = useState('')
  const [end, setEnd] = useState(false)

  const random = (min = 1, max = 9) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const rd1 = random()
  const rd2 = random()

  const [randomNumber1, setRandomNumber1] = useState(rd1)
  const [randomNumber2, setRandomNumber2] = useState(rd2)

  const handleReset = () => {
    setRandomNumber1(random())
    setRandomNumber2(random())
    setMessage('')
    setInput('')
  }

  const handleCheck = () => {
    if (input == '') {
      setMessage(<span className="text-red-600">Please enter a value.</span>)
      return
    }
    if (input == randomNumber1 * randomNumber2) {
      setMessage(
        <div className="font-semibold">
          ✔️ Very good! Would you like to continue playing?
          <div className="mt-2 flex gap-2">
            <Button onClick={handleReset} color="green">
              Yes
            </Button>
            <Button onClick={(e) => setEnd(true)} color="warning">
              No
            </Button>
          </div>
        </div>
      )
    } else {
      setMessage(<span className="text-red-600">❌ No. Please try again.</span>)
    }
  }

  return (
    <Part header="Extra Credit:">
      {!end ? (
        <>
          <div className="flex w-80 items-end gap-2">
            <Input
              id="math"
              type="number"
              label={`How much is ${randomNumber1} times ${randomNumber2}?`}
              placeholder="Answer"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <Button onClick={handleCheck}>Check</Button>
          </div>
          <div className="mt-2">{message}</div>
        </>
      ) : (
        <div>👋 Goodbye and thanks.</div>
      )}
    </Part>
  )
}

export default ExtraCredit
