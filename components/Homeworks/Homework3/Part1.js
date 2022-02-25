import classNames from 'classnames'
import { useState } from 'react'
import Input from '../../Input'
import Part from '../../Part'

const Part1 = () => {
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

  const calculateStudentGrade = () => {
    const avg = (
      0.5 * input1 +
      0.2 * input2 +
      0.2 * input3 +
      0.1 * input4
    ).toFixed(2)
    if (avg >= 90) return 'A'
    if (avg >= 80) return 'B'
    if (avg >= 70) return 'C'
    if (avg >= 60) return 'D'
    if (avg >= 0) return 'F'
  }
  const studentGrade = calculateStudentGrade()
  const studentPass =
    studentGrade == 'A' || studentGrade == 'B' || studentGrade == 'C'

  return (
    <Part header="Part 1: Student Grades">
      <div className="flex gap-4">
        <div className="w-40 space-y-4">
          <Input
            label="Homework average"
            id="Homework average"
            placeholder="0 to 100"
            value={input1}
            onChange={(e) => handleChange(e, 1)}
          />
          <Input
            label="Mid-term exam score"
            id="Mid-term exam score"
            placeholder="0 to 100"
            value={input2}
            onChange={(e) => handleChange(e, 2)}
          />
          <Input
            label="Final exam score"
            id="Final exam score"
            placeholder="0 to 100"
            value={input3}
            onChange={(e) => handleChange(e, 3)}
          />
          <Input
            label="Participation"
            id="Participation"
            placeholder="0 to 100"
            value={input4}
            onChange={(e) => handleChange(e, 4)}
          />
        </div>
        {studentGrade &&
        typeof input1 != 'string' &&
        typeof input2 != 'string' &&
        typeof input3 != 'string' &&
        typeof input4 != 'string' ? (
          <div className="space-y-1 text-sm">
            {!studentPass && (
              <div className="text-red-600">
                Student must retake the course.
              </div>
            )}
            <div>
              Student grade:{' '}
              <span
                className={classNames(
                  'text-lg font-bold',
                  !studentPass && 'text-red-600'
                )}
              >
                {studentGrade}
              </span>
            </div>
          </div>
        ) : (
          <span className="text-sm text-red-600">
            Enter scores to see the student's grade.
          </span>
        )}
      </div>
    </Part>
  )
}

export default Part1
