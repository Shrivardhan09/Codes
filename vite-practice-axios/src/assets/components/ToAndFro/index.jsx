import { useState } from "react"

const ToAndFro = () => {
    const [animation, setAnimation] = useState(1)
    const clickHere = () => {
        let arr = []
        // let timer;
        for (let i = 1; i <= 10; i++) {
            arr.push(setTimeout(() => {
                setAnimation(i)
            }, 1000 * i))
        }

        setTimeout(() => {
            for (let i = 10; i >= 1; i--) {
                arr.push(setTimeout(() => {
                    setAnimation(i)
                }, 1000 * (10 - i)))
            }
        }, 10000)
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div>
                {animation}
            </div>
            <button onClick={clickHere}>Animation</button>
        </div>
    )
}

export default ToAndFro

