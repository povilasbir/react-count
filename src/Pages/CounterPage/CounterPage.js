import { useState } from "react"
import Counter from "../../Components/Counter/Counter"
import GradeList from "../../Components/GradeList/GradeList"
import { DEFAULT_NUM } from "../../variables"

const CounterPage = () => {

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

    const removeGradeHandler = (id) => {
        setGrade(prevState => prevState.filter((item, index) => index != id))
    }

    const removeAllHandler = () => {
        setGrade([])
    }

    return (
        <>
            <Counter numStateObj={{
                num,
                additionHandler,
                resetHandler,
                inputHandler,
                addGradeHandler
            }} />

            <GradeList gradesStateObj={{
                grades,
                removeGradeHandler,
                removeAllHandler,
            }} />
        </>
    )
}

export default CounterPage