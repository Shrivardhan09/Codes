import { useState } from "react"


const FunctionaC = () => {
    const [input, setInput] = useState('')

    const onChnage = (e) => {
        const { name, value } = e.target

        setInput((prevData) => [{
            ...prevData,
            [name]: value
        }])

    }

    return (
        <div>
            <input type="email" name="email" value={input} onChange={() => setInput(e.target.value)} />
            <input type="password" name="password" value={input} onChange={() => setInput(e.target.value)} />
            <button onClick={handleClick}>ADD</button>
        </div>
    )
}

export default FunctionaC
