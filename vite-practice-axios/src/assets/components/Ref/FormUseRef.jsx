import React, { useRef } from 'react'

const FormUseRef = () => {
    const Email = useRef(null)
    const Password = useRef(null)

    const useRefOnInput = () => {
        console.log(Email.current.value)
        console.log(Password.current.value)
    }

    return (
        <div>
            <input type="email" ref={Email} />
            <input type="password" ref={Password} />
            <button onClick={useRefOnInput}>Button</button>
        </div>
    )
}

export default FormUseRef
