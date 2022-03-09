import Part from '../../Part'

const Part2 = () => {
  const principal = 1000
  const interestRates = [0.05, 0.06, 0.07]
  const years = 10

  const calculateA = (principal, interest, years) => {
    return (principal * Math.pow(1 + interest, years)).toLocaleString('en-US', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    })
  }

  return (
    <Part header="Part 2:">
      {interestRates.map((interestRate) => (
        <table key={interestRate} className="mt-6 rounded-md border">
          <tbody>
            <tr style={{ backgroundColor: 'maroon', color: 'white' }}>
              <th className="px-3 py-1" scope="row">
                Year
              </th>
              <th className="px-3 py-1" scope="row">
                Amount on deposit
              </th>
              <th className="px-3 py-1" scope="row">
                Interest Rate
              </th>
            </tr>
            {Array.apply(null, { length: years + 1 })
              .map(Number.call, Number)
              .slice(1)
              .map((year, index) => (
                <tr
                  key={year}
                  className={`border border-dotted border-gray-400 text-right ${
                    index % 2 === 0 ? 'bg-[#ff7f50]' : 'bg-[yellow]'
                  }`}
                >
                  <td className="px-3">{year}</td>
                  <td className="px-3">
                    {calculateA(principal, interestRate, year)}
                  </td>
                  <td className="px-3">{interestRate}</td>
                </tr>
              ))}
          </tbody>
        </table>
      ))}
    </Part>
  )
}

export default Part2
