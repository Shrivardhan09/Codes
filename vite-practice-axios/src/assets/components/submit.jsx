import React, { useState } from 'react';

export function InputFieldExample() {
    const [inputValue, setInputValue] = useState('');
    // const [store, setStore] = useState([])

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleClick = () => {
        // setStore((prev) => ([{ ...prev, inputValue }]))
        console.log(inputValue)
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Enter your text"
            />
            <button onClick={handleClick}>Submit</button>

        </div>
    );
}
