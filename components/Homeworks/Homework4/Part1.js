import Part from '../../Part'

const Part1 = () => {
  const calculatePart1a = () => {
    let multiplication = 1
    let addition = 0
    for (let i = 5; i <= 25; i += 4) {
      multiplication *= i
      addition += i
    }
    multiplication = multiplication.toLocaleString()
    addition = addition.toLocaleString()
    return { multiplication, addition }
  }

  const calculatePart1b = () => {
    let i = 3
    let multiplication = 1
    let addition = 0
    while (i <= 18) {
      multiplication *= i
      addition += i
      i += 3
    }
    multiplication = multiplication.toLocaleString()
    addition = addition.toLocaleString()
    return { multiplication, addition }
  }

  const partA = calculatePart1a()
  const partB = calculatePart1b()

  return (
    <Part header="Part 1:">
      <div>
        <p className="text-lg font-semibold">A:</p>
        <p>
          Multiplication:{' '}
          <span className="font-bold">{partA.multiplication}</span>
        </p>
        <div>
          Addition: <span className="font-bold">{partA.addition}</span>
        </div>
      </div>
      <div className="mt-3">
        <p className="text-lg font-semibold">B:</p>
        <p>
          Multiplication:{' '}
          <span className="font-bold">{partB.multiplication}</span>
        </p>
        <div>
          Addition: <span className="font-bold">{partB.addition}</span>
        </div>
      </div>
    </Part>
  )
}

export default Part1
