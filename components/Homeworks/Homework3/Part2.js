import { useState } from 'react'
import Part from '../../Part'
import Input from '../../Input'
import Button from '../../Button'

const Part2 = () => {
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')
  const [input3, setInput3] = useState('')
  const [input4, setInput4] = useState('')

  const handleChange = (e, number) => {
    const re = /^[0-9]$|^[1-9][0-9]$|^(100)$/

    if (e.target.value === '' || re.test(e.target.value)) {
      if (number === 1) {
        setInput1(Number(e.target.value))
      }
      if (number === 2) {
        setInput2(Number(e.target.value))
      }
      if (number === 3) {
        setInput3(Number(e.target.value))
      }
      if (number === 4) {
        setInput4(Number(e.target.value))
      }
    }
  }

  return (
    <Part header="Part 2:">
      <div className="flex items-center">
        <label className="mr-2" htmlFor="salesperson">
          Salesperson:
        </label>
        <Input id="salesperson" placeholder="Name" />
      </div>
      <p className="my-4 text-lg font-medium leading-6 text-gray-900">
        Input the number of items sold for each item number:
      </p>
      <div className="w-40 space-y-1">
        <div className="flex items-center">
          <label className="w-24" htmlFor="item1">
            Item 1:
          </label>
          <Input
            id="item1"
            placeholder="Items sold"
            value={input1}
            onChange={(e) => handleChange(e, 1)}
          />
        </div>
        <div className="flex items-center">
          <label className="w-24" htmlFor="item2">
            Item 2:
          </label>
          <Input
            id="item2"
            placeholder="Items sold"
            value={input2}
            onChange={(e) => handleChange(e, 2)}
          />
        </div>
        <div className="flex items-center">
          <label className="w-24" htmlFor="item3">
            Item 3:
          </label>
          <Input
            id="item3"
            placeholder="Items sold"
            value={input3}
            onChange={(e) => handleChange(e, 3)}
          />
        </div>
        <div className="flex items-center">
          <label className="w-24" htmlFor="item4">
            Item 4:
          </label>
          <Input
            id="item4"
            placeholder="Items sold"
            value={input4}
            onChange={(e) => handleChange(e, 4)}
          />
        </div>
      </div>
      <div className="mt-6 flex gap-2">
        <Button>Submit</Button>
        <Button color="secondary">Reset</Button>
      </div>
      <div>
        <div>Results</div>
        <div className="grid w-96 grid-cols-4">
          <div>Item #</div>
          <div>Price</div>
          <div>Number Sold</div>
          <div>Total</div>
        </div>
      </div>
    </Part>
  )
}

export default Part2
