import React from 'react'
import { displayColor } from '../../variables'

function GradeList(props) {

    const { grades, removeGradeHandler, removeAllHandler } = props.gradesStateObj

    return (
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
            {grades.length > 0 ? (<button onClick={removeAllHandler}>Remove All Grades</button>) : ''}
        </div>
    )
}

export default GradeList