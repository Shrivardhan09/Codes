
import { useEffect, useRef } from 'react';

const OTPTask = () => {
    const enterNum = useRef([]);
    // const inputArrRef = useRef([]);

    useEffect(() => {
        // enterNum.current = enterNum.current.slice(0, 4);
        enterNum.current[0].focus();

        const handleBackspace = (event) => {
            if (event.key === 'Backspace') {
                for (let i = 1; i <= 3; i++) {
                    if (enterNum.current[i].value === '') {
                        enterNum.current[i - 1].value = '';
                        enterNum.current[i - 1].focus();
                        break;
                    }
                }
            }
        };

        document.addEventListener('keydown', handleBackspace);

        return () => {
            document.removeEventListener('keydown', handleBackspace);
        };
    }, []);

    const onRefChange = (id) => {
        // console.log(enterNum.current[id].value, 'hey: ');
        if (id < 3 && enterNum.current[id].value !== '') {
            enterNum.current[id + 1].focus();
        }
    };

    const inputArr = [];
    for (let i = 0; i <= 3; i++) {
        console.log('loop')
        inputArr.push(
            <input
                type="text"
                key={i}
                maxLength={1}
                ref={(elem) => enterNum.current[i] = elem}
                onChange={() => onRefChange(i)}
                style={{ width: 25, padding: 10 }}
            />
        );
    }

    return (
        <div style={{ display: "flex", gap: 8 }}>
            {inputArr}
        </div>
    );
}

export default OTPTask;






