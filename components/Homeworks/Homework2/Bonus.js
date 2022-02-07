import { useState } from "react"

const Bonus = () => {
  const [dollarValue, setDollarValue] = useState('')


  return (
    <div>
      <p className="mt-10 mb-2 text-lg leading-6 font-medium text-gray-900">Extra Credit</p>

      <table border={1}><caption>exchange rates</caption>
        <tbody>
          <tr>
            <th colSpan={3} scope="col">Monetary Exchange Rates</th>
          </tr>
          <tr>
            <th scope="col">Currency</th>
            <th scope="col">Rate</th>
            <th scope="col">Value</th>
          </tr>
          <tr>
            <td style={{ border: '1px dotted gray' }}>Euro</td>
            <td style={{ border: '1px dotted gray', textAlign: 'right' }}>8.90</td>
            <td style={{ border: '1px dotted gray', textAlign: 'right' }}>{(dollarValue * 8.90).toFixed(2)}</td>
          </tr>
          <tr>
            <td style={{ border: '1px dotted gray' }}>Canadian Dollar</td>
            <td style={{ border: '1px dotted gray', textAlign: 'right' }}>13.10</td>
            <td style={{ border: '1px dotted gray', textAlign: 'right' }}>{(dollarValue * 13.10).toFixed(2)}</td>
          </tr>
          <tr>
            <td style={{ border: '1px dotted gray' }}>Hong Kong Dollar</td>
            <td style={{ border: '1px dotted gray', textAlign: 'right' }}>78.00</td>
            <td style={{ border: '1px dotted gray', textAlign: 'right' }}>{(dollarValue * 78.00).toFixed(2)}</td>
          </tr>
          <tr>
            <td style={{ border: '1px dotted gray' }}>Japanese Yen</td>
            <td style={{ border: '1px dotted gray', textAlign: 'right' }}>1083.80</td>
            <td style={{ border: '1px dotted gray', textAlign: 'right' }}>{(dollarValue * 1083.80).toFixed(2)}</td>
          </tr>
          <tr>
            <td style={{ border: '1px dotted gray' }}>Mexican Peso</td>
            <td style={{ border: '1px dotted gray', textAlign: 'right' }}>191.10</td>
            <td style={{ border: '1px dotted gray', textAlign: 'right' }}>{(dollarValue * 191.10).toFixed(2)}</td>
          </tr>
          <tr>
            <td style={{ border: '1px dotted gray' }} colSpan={2}><strong>Enter Amount of U.S. Dollars</strong></td>
            <td style={{ border: '1px dotted gray', textAlign: 'right' }}>
              <input
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                value={dollarValue}
                onChange={e => setDollarValue(e.target.value)}
                className="pl-2 max-w-[6rem] focus:outline-none focus:ring-2 focus:ring-primary-600 focus:bg-yellow-200"
              />
            </td>

          </tr>
        </tbody>
      </table>
    </div>
  )
}


export default Bonus