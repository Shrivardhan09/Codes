import { useState } from "react";

const ChatTask = () => {
    const [input, setInput] = useState('');
    const [store, setStore] = useState([]);
    const [flag, setFlag] = useState(true);

    const onInputChange = (e) => {
        setInput(e.target.value);
    }

    const onClickButton = () => {
        console.log("Button clicked");
        setStore((prev) => [...prev, input]);
        setInput('');
    };

    function throttle(fn, delay) {
        return function (...args) {
            if (flag) {
                console.log("Throttle triggered");
                setFlag(false);
                fn.apply(this, args);
                setTimeout(() => {
                    setFlag(true);
                }, delay);
            }
        };
    }

    const throttledOnClickButton = throttle(onClickButton, 4000);

    return (
        <div>
            <input type="text" onChange={onInputChange} value={input} />
            <button onClick={onClickButton}>Normal</button>
            <button onClick={throttledOnClickButton}>Throttle</button>
            {store.map((item, i) => (
                <div key={i}>{item}</div>
            ))}
        </div>
    );
}

export default ChatTask;
