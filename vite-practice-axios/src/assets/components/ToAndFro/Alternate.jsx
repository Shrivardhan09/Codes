import { Button } from "@mui/material"
import { useEffect, useState } from "react"


const Alternate = () => {
    const [num, setNum] = useState(1)
    const [isActive, setIsActive] = useState(true)
    const [direction, setDirection] = useState(1)

    let timer;
    useEffect(() => {
        if (isActive) {
            timer = setInterval(() => {
                if (num === 9) {
                    setDirection(-1)
                } else if (num === 1 && direction === -1) {
                    setDirection(1)
                }
                setNum((prev) => prev + direction)
            }, 1000)
        } else {
            clearInterval(timer)
        }
        return () => clearInterval(timer)
    }, [isActive, direction, num])

    return (
        <div>
            Number: {num}
            <Button onClick={() => setIsActive(!isActive)}>{isActive ? 'Stop' : 'Start'}</Button>
        </div>
    )
}

export default Alternate


