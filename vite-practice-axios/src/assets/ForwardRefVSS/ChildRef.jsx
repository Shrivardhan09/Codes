import { forwardRef } from "react";

const ChildRef = forwardRef((props, ref) => {
    return (
        <div>
            <input type="text" ref={ref} {...props} />
        </div>
    );
});

export default ChildRef;
