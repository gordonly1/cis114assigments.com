import { useState } from "react"
import Input from "../../Input"


const Part2 = () => {
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')
  const [input3, setInput3] = useState('')

  const handleChange = (e, number) => {
    if (number === 1) { setInput1(Number(e.target.value)) }
    if (number === 2) { setInput2(Number(e.target.value)) }
    if (number === 3) { setInput3(Number(e.target.value)) }
  }

  const average = (...args) => args.reduce((a, b) => a + b) / args.length

  return (
    <div>
      <p className="mt-10 mb-2 text-lg leading-6 font-medium text-gray-900">Part 2</p>
      <div className="grid md:grid-cols-4 gap-6">
        <div className='space-y-4'>
          <Input type="number" label='First integer' placeholder='Please enter an integer' value={input1} onChange={e => handleChange(e, 1)} />
          <Input type="number" label='Second integer' placeholder='Please enter an integer' value={input2} onChange={e => handleChange(e, 2)} />
          <Input type="number" label='Third integer' placeholder='Please enter an integer' value={input3} onChange={e => handleChange(e, 3)} />
        </div>
        {(input1 && input2 && input3) ?
          <div className="space-y-1 text-sm">
            <div>Sum: <span className="font-bold">{input1 + input2 + input3}</span></div>
            <div>Average: <span className="font-bold">{(Math.round(average(input1, input2, input3) * 100) / 100).toFixed(2)}</span></div>
            <div>Product: <span className="font-bold">{input1 * input2 * input3}</span></div>
            <div>Smallest: <span className="font-bold">{Math.min(input1, input2, input3)}</span></div>
            <div>Largest: <span className="font-bold">{Math.max(input1, input2, input3)}</span></div>
          </div>
          : <span className="text-red-600">Please enter all 3 numbers to see the results.</span>
        }
      </div>
    </div>
  )
}


export default Part2