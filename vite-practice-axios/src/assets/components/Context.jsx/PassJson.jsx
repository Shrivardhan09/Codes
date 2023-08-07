// PassJson.js
import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const TaskJsonContext = createContext();

const TaskJsonProvider = ({ children }) => {
    const [holdJson, setHoldJson] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(res => setHoldJson(res.data))
            .catch(error => console.error('Error fetching data', error));
    }, []);


    if (holdJson.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <TaskJsonContext.Provider value={holdJson}>
            {children}
        </TaskJsonContext.Provider>
    );
};

export { TaskJsonContext, TaskJsonProvider };
