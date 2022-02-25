import { useState } from 'react'
import Part from '../../Part'
import Input from '../../Input'
import Button from '../../Button'

const Part2 = () => {
  const [salesperson, setSalesperson] = useState('')
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')
  const [input3, setInput3] = useState('')
  const [input4, setInput4] = useState('')

  const handleChange = (e, number) => {
    const re = /^[0-9][0-9]*([.][0-9]{2}|)$/

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

  const item1Price = 20.99
  const item2Price = 12.75
  const item3Price = 9.95
  const item4Price = 35.89
  const totalPrice1 = ((input1 || 0) * item1Price).toFixed(2)
  const totalPrice2 = ((input2 || 0) * item2Price).toFixed(2)
  const totalPrice3 = ((input3 || 0) * item3Price).toFixed(2)
  const totalPrice4 = ((input4 || 0) * item4Price).toFixed(2)
  const totalAmountSold = input1 + input2 + input3 + input4
  let totalWeeklyEarnings = 250
  totalWeeklyEarnings += totalPrice1 * 0.09
  totalWeeklyEarnings += totalPrice2 * 0.09
  totalWeeklyEarnings += totalPrice3 * 0.09
  totalWeeklyEarnings += totalPrice4 * 0.09
  totalWeeklyEarnings = totalWeeklyEarnings.toFixed(2)

  const handleReset = () => {
    setSalesperson('')
    setInput1('')
    setInput2('')
    setInput3('')
    setInput4('')
  }

  return (
    <Part header="Part 2:">
      <div className="flex items-center">
        <label className="mr-2" htmlFor="salesperson">
          Salesperson:
        </label>
        <Input
          id="salesperson"
          placeholder="Name"
          value={salesperson}
          onChange={(e) => setSalesperson(e.target.value)}
        />
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
        <Button onClick={handleReset} color="secondary">
          Reset
        </Button>
      </div>
      <div className="mt-6 grid max-w-lg grid-cols-4 gap-2">
        <div className="text-right">
          <div className="font-bold">Item #</div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div>
        <div className="text-right">
          <div className="font-bold">Price</div>
          <div>${item1Price}</div>
          <div>${item2Price}</div>
          <div>${item3Price}</div>
          <div>${item4Price}</div>
        </div>
        <div className="text-right">
          <div className="font-bold">Number Sold</div>
          <div>{input1 || 0}</div>
          <div>{input2 || 0}</div>
          <div>{input3 || 0}</div>
          <div>{input4 || 0}</div>
        </div>
        <div className="text-right">
          <div className="font-bold">Total</div>
          <div>${totalPrice1}</div>
          <div>${totalPrice2}</div>
          <div>${totalPrice3}</div>
          <div>${totalPrice4}</div>
        </div>
        <div className="col-span-4 mt-2 border-t pt-2 pl-20">
          <div className="flex items-end justify-between">
            <div>Total Amount Sold: </div>
            <div>{totalAmountSold || 0}</div>
          </div>
          <div className="flex items-end justify-between">
            <div>Total Weekly Earnings: </div>
            <div className="text-lg font-semibold">${totalWeeklyEarnings}</div>
          </div>
        </div>
      </div>
    </Part>
  )
}

export default Part2
