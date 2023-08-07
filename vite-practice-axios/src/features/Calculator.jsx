import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    addition,
    subtraction,
    multiplication,
    division,
} from './CalcSlice';

export function Calculator() {
    const dispatch = useDispatch();
    const result = useSelector((state) => state.calculator.value);

    const [values, setValues] = useState({
        Number1: '',
        Number2: '',
    });

    const handleInput = (e) => {
        const { name, value } = e.target;

        setValues((prevNum) => ({ ...prevNum, [name]: value }));
    };

    const handleCalculate = (operation) => {
        const num1 = parseFloat(values.Number1);
        const num2 = parseFloat(values.Number2);

        switch (operation) {
            case 'addition':
                dispatch(addition({ valA: num1, valB: num2 }));
                break;
            case 'subtraction':
                dispatch(subtraction({ valA: num1, valB: num2 }));
                break;
            case 'multiplication':
                dispatch(multiplication({ valA: num1, valB: num2 }));
                break;
            case 'division':
                dispatch(division({ valA: num1, valB: num2 }));
                break;
            case 'clear':
                setValues({
                    Number1: '',
                    Number2: '',
                })
            default:
                break;
        }
    };

    return (
        <div>
            <div>
                <input
                    type="text"
                    name="Number1"
                    value={values.Number1}
                    onChange={handleInput}
                />
                <input
                    type="text"
                    name="Number2"
                    value={values.Number2}
                    onChange={handleInput}
                />
            </div>
            <div style={{ display: 'flex', gap: 8, margin: 10 }}>
                <button
                    style={{
                        backgroundColor: 'white',
                        outline: 'none',
                        border: '1px solid transparent',
                        padding: 8,
                        cursor: 'pointer',
                    }}
                    onClick={() => handleCalculate('addition')}
                >
                    ➕
                </button>
                <button
                    style={{
                        backgroundColor: 'white',
                        outline: 'none',
                        border: '1px solid transparent',
                        padding: 8,
                        cursor: 'pointer',
                    }}
                    onClick={() => handleCalculate('subtraction')}
                >
                    ➖
                </button>
                <button
                    style={{
                        backgroundColor: 'white',
                        outline: 'none',
                        border: '1px solid transparent',
                        padding: 8,
                        cursor: 'pointer',
                    }}
                    onClick={() => handleCalculate('multiplication')}
                >
                    ✖️
                </button>
                <button
                    style={{
                        backgroundColor: 'white',
                        outline: 'none',
                        border: '1px solid transparent',
                        padding: 8,
                        cursor: 'pointer',
                    }}
                    onClick={() => handleCalculate('division')}
                >
                    ➗
                </button>
                <button
                    style={{
                        backgroundColor: 'white',
                        outline: 'none',
                        border: '1px solid transparent',
                        padding: 8,
                        cursor: 'pointer',
                    }}
                    onClick={() => handleCalculate('clear')}>
                    🧹 Clear
                </button>
            </div>
            {isNaN(result) && values.Number1 === '' && values.Number2 === '' ? (
                <div>Result: Please fill the input fields to get result😉</div>
            ) : (
                <div>Result: {result}</div>
            )}
        </div>
    );
}
