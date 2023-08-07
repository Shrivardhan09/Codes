import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const MyComponent = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        if (isChecked) {
            searchParams.set('IPhone', 'true');
        } else {
            searchParams.delete('IPhone');
        }
        setSearchParams(searchParams)
    }, [isChecked]);

    const handleCheckboxChange = (event) => {
        const checked = event.target.checked;
        setIsChecked(checked);
    };

    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                Iphone
            </label>

            {/* Use the isChecked state in your component logic */}
            {isChecked ? <p>IPhone Applied</p> : <p>No IPhone applied.</p>}
        </div>
    );
};

export default MyComponent;
