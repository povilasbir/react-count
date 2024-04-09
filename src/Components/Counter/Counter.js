import React from 'react'
import { GRADE_MIN, GRADE_MAX, buttonValues, displayColor } from '../../variables'

function Counter(props) {

    const { num, additionHandler, resetHandler, inputHandler, addGradeHandler } = props.numStateObj

    return (
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
    )
}

export default Counter