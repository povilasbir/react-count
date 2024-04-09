import { useState } from "react"

const CounterPage = () => {
    const GRADE_MIN = 1
    const GRADE_MAX = 10
    const DEFAULT_NUM = 5

    const buttonValues = [-5, -2, -1, 1, 2, 5]

    const [num, setNum] = useState(DEFAULT_NUM)
    const [grades, setGrade] = useState([]);

    const additionHandler = value => {
        setNum(prevState => prevState + value)
    }

    const resetHandler = () => {
        setNum(DEFAULT_NUM)
    }

    const inputHandler = (value) => {
        setNum(Number(value))
    }

    const addGradeHandler = () => {
        setGrade(prevState => [num, ...prevState])
    }

    const removeGradeHandler = (id, removeAll) => {
        setGrade(prevState => prevState.filter((item, index) => index != id && !removeAll))
    }

    const displayColor = (value) => value >= 5 ? 'green' : 'red'

    return (
        <>
            <div>
                <h3 style={{ color: displayColor(num) }}>{num}</h3>
                <input onChange={(event) => inputHandler(event.target.value)} type="number" value={num} min={GRADE_MIN} max={GRADE_MAX}></input>
                {buttonValues.map((item, index) => {
                    return (
                        <button key={index} onClick={() => additionHandler(item)} disabled={num + item > GRADE_MAX || num + item < GRADE_MIN}>{(item > 0 ? '+' : '') + item}</button>
                    )
                })}
                <button onClick={resetHandler} >Reset</button>
                <button onClick={addGradeHandler}>Add Grade</button>
            </div>
            <div>
                <h4>{grades.length > 0 ? 'Grades:' : 'No grades to display...'}</h4>
                {grades.length > 0 && (
                    <ul>
                        {grades.map((item, index) => {
                            return (
                                <li key={index} style={{ color: displayColor(item) }}>
                                    <span>{item}</span>
                                    <button onClick={() => removeGradeHandler(index, false)}>Remove Grade</button>
                                </li>
                            )
                        })}
                    </ul>
                )}
                {grades.length > 0 ? (<button onClick={() => removeGradeHandler(0, true)}>Remove All Grades</button>) : ''}
            </div>
        </>
    )
}

export default CounterPage