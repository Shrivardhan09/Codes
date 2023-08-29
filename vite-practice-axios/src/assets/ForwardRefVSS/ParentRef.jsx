import { useRef } from "react";
import ChildRef from "./ChildRef";

const ParentRef = () => {
    const refPass = useRef(null);
    console.log({ refPass })

    const onClickInput = () => {
        if (refPass.current) {
            refPass.current.value = 'hey'
            refPass.current.focus()
            refPass.current.style.color = 'blue'
        }
    };

    return (
        <div>
            <h1>Forward ref</h1>
            <ChildRef ref={refPass} placeholder='Enter text' />
            <button onClick={() => onClickInput()}>Through Forward ref</button>
        </div>
    );
};

export default ParentRef;
